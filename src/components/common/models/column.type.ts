export type Column<T> = {
  path: string;
  label: string;
  isSortable?: boolean;
  content?: (item: T) => JSX.Element;
};

export default Column;
