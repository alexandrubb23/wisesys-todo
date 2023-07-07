import { TableData } from '@/components/common/Table/Table';

export type Column<T = any> = {
  path: string;
  label: string;
  isSortable?: boolean;
  isTruncable?: boolean;
  content?: (item: TableData<T>) => JSX.Element;
};

export default Column;
