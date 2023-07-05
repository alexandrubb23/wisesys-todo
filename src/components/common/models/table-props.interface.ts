import { TableProps as ChakraTableProps } from '@chakra-ui/react';
import Column from './column.type';
import SortColumn from './sort-column.type';

interface TableProps<T> {
  colorScheme?: ChakraTableProps['colorScheme'];
  columns: Column<T>[];
  data: T[];
  onSort: (sortColumn: SortColumn) => void;
  sortColumn: SortColumn;
  variant?: ChakraTableProps['variant'];
}

export default TableProps;
