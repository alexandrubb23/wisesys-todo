import { Table as ChakraTable } from '@chakra-ui/react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { SortColumn } from '../Tasks/TasksTable';

export type Column<T> = {
  path: string;
  label: string;
  isSortable?: boolean;
  content?: (item: T) => JSX.Element;
};

export interface TableProps<T> {
  columns: Column<T>[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
  data: T[];
}

export type TableData = {
  [key: string]: any;
  id: number;
};

const Table = <T extends TableData>({
  columns,
  sortColumn,
  onSort,
  data,
}: TableProps<T>) => {
  return (
    <ChakraTable variant='simple'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </ChakraTable>
  );
};

export default Table;
