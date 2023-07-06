import { Tbody, Td, Tr } from '@chakra-ui/react';
import { get } from 'lodash';

import { TableData } from './Table';
import { Column } from '@/components/common/models';

interface TableBodyProps<TFields> {
  columns: Column<TFields>[];
  data: TableData<TFields>[];
}

const TRUNCATE_LENGTH = 20;

const TableBody = <TFields extends TableData<TFields>>({
  columns,
  data,
}: TableBodyProps<TFields>) => {
  const renderCell = (item: TableData<TFields>, column: Column<TFields>) => {
    if (column.content) return column.content(item);

    let text: string = get(item, column.path);
    if (column?.isTruncable)
      text =
        text.length > TRUNCATE_LENGTH
          ? text.substring(0, TRUNCATE_LENGTH) + '...'
          : text;

    return text;
  };

  const createKey = (item: TableData<TFields>, column: Column<TFields>) =>
    item.id + column.path;

  return (
    <Tbody>
      {data.map(item => (
        <Tr key={item.id}>
          {columns.map(column => (
            <Td key={createKey(item, column)}>{renderCell(item, column)}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableBody;
