import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { Column, SortColumn } from '@/components/common/models';
import { TableData } from './Table';

interface SortColumnIconProps<TFields extends TableData<TFields>> {
  column: Column<TFields>;
  sortColumn: SortColumn;
}

const TableColumnSortIcon = <TFields extends TableData<TFields>>({
  column,
  sortColumn,
}: SortColumnIconProps<TFields>) => {
  if (column.path !== sortColumn.path) return null;

  return sortColumn.order === 'asc' ? <ChevronUpIcon /> : <ChevronDownIcon />;
};

export default TableColumnSortIcon;
