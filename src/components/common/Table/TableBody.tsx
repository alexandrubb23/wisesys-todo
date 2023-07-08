import { Tbody, Td, Tr } from '@chakra-ui/react';
import { get } from 'lodash';

import { Column } from '@/components/common/models';
import { useTableColumnsStore, useTableDataStore } from '@/store/table-store';
import { TableData } from './Table';

const TRUNCATE_LENGTH = 20;

const TableBody = <T extends TableData<T>>() => {
  const data = useTableDataStore<T>();
  const columns = useTableColumnsStore<T>();

  const renderCell = (item: TableData<T>, column: Column<T>) => {
    if (column.content) return column.content(item);

    let text: string = get(item, column.path);
    if (column?.isTruncable)
      text =
        text.length > TRUNCATE_LENGTH
          ? text.substring(0, TRUNCATE_LENGTH) + '...'
          : text;

    return text;
  };

  const createKey = (item: TableData<T>, column: Column<T>) =>
    item.id + column.path;

  return (
    <Tbody>
      {data?.map(item => (
        <Tr key={item.id}>
          {columns?.map(column => (
            <Td key={createKey(item, column)}>{renderCell(item, column)}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableBody;
