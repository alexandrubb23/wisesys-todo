import Content from './content.type';

export type Column<T> = {
  path: string;
  label: string;
  isSortable?: boolean;
  content?: (data: Content<T>) => JSX.Element;
};

export default Column;
