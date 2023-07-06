import { TableData } from '@/components/common/Table';

export type Column<TFields> = {
  path: string;
  label: string;
  isSortable?: boolean;
  isTruncable?: boolean;
  content?: (item: TableData<TFields>) => JSX.Element;
};

export default Column;
