import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { Column, SortColumn } from '@/components/common/models';
import { TableData } from './Table';

interface SortColumnIconProps<T extends TableData<T>> {
  column: Column<T>;
  sortColumn: SortColumn;
}

const TableColumnSortIcon = <T extends TableData<T>>({
  column,
  sortColumn,
}: SortColumnIconProps<T>) => {
  if (column.path !== sortColumn.path) return null;

  return sortColumn.order === 'asc' ? <ChevronUpIcon /> : <ChevronDownIcon />;
};

export default TableColumnSortIcon;
