import Column from './column.type';
import SortColumn from './sort-column.type';

interface TableProps<T> {
  columns: Column<T>[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
  data: T[];
}

export default TableProps;
