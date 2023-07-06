import { TableProps as ChakraTableProps } from '@chakra-ui/react';

import Column from './column.type';
import SortColumn from './sort-column.type';
import { TableData } from '@/components/common/Table';

interface TableProps<T> {
  colorScheme?: ChakraTableProps['colorScheme'];
  columns: Column<T>[];
  data: TableData<T>[];
  onSort: (sortColumn: SortColumn) => void;
  sortColumn: SortColumn;
  variant?: ChakraTableProps['variant'];
}

export default TableProps;
