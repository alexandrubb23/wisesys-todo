import { Table as ChakraTable } from '@chakra-ui/react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { TableProps } from './models';

export type TableData = {
  [key: string]: any;
  id: number;
};

const Table = <T extends TableData>({
  columns,
  sortColumn,
  onSort,
  onDelete,
  data,
}: TableProps<T>) => {
  return (
    <ChakraTable variant='simple'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} onDelete={onDelete} />
    </ChakraTable>
  );
};

export default Table;
