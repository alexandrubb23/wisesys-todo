import { Table as ChakraTable } from '@chakra-ui/react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { TableProps } from './models';

export type TableData = {
  [key: string]: any;
  id: number;
};

const Table = <T extends TableData>({
  colorScheme = 'gray',
  columns,
  data,
  onSort,
  sortColumn,
  variant = 'simple',
}: TableProps<T>) => {
  return (
    <ChakraTable variant={variant} colorScheme={colorScheme}>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </ChakraTable>
  );
};

export default Table;
