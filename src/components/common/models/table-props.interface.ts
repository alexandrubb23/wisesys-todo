import Column from './column.type';
import SortColumn from './sort-column.type';

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onSort: (sortColumn: SortColumn) => void;
  sortColumn: SortColumn;
}

export default TableProps;
