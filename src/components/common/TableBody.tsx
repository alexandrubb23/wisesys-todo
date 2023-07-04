import { Tbody, Td, Tr } from '@chakra-ui/react';
import { get } from 'lodash';

import { TableData } from './Table';
import { Column } from './models';

interface TableBodyProps<T> {
  columns: Column<T>[];
  data: T[];
}

const TableBody = <T extends TableData>({
  columns,
  data,
}: TableBodyProps<T>) => {
  const renderCell = (item: T, column: Column<T>) => {
    if (column.content) return column.content(item);

    return get(item, column.path);
  };

  const createKey = (item: T, column: Column<T>) => item.id + column.path;

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
