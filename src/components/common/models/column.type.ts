import { TableData } from '@/components/common/Table';

export type Column<T> = {
  path: string;
  label: string;
  isSortable?: boolean;
  isTruncable?: boolean;
  content?: (item: TableData<T>) => JSX.Element;
};

export default Column;
