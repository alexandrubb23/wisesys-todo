import { Tbody, Td, Tr } from '@chakra-ui/react';
import { get } from 'lodash';

import { TableData } from './Table';
import { Column } from './models';

interface TableBodyProps<T> {
  columns: Column<T>[];
  data: T[];
  onDelete: (item: T) => void;
}

const TableBody = <T extends TableData>({
  columns,
  data,
  onDelete,
}: TableBodyProps<T>) => {
  const renderCell = (item: T, column: Column<T>) => {
    if (column.content) return column.content(item, onDelete);

    return get(item, column.path);
  };

  const createKey = (item: T, column: Column<T>) => {
    return item.id + column.path;
  };

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
