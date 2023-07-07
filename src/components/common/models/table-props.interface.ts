import { TableProps as ChakraTableProps } from '@chakra-ui/react';

import { TableData } from '@/components/common/Table/Table';
import Column from './column.type';

interface TableProps<T> {
  colorScheme?: ChakraTableProps['colorScheme'];
  columns: Column<T>[];
  data: TableData<T>[];
  variant?: ChakraTableProps['variant'];
}

export default TableProps;
