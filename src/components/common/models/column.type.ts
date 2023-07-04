export type Column<T> = {
  path: string;
  label: string;
  isSortable?: boolean;
  content?: (item: T, onDelete: (item: T) => void) => JSX.Element;
};

export default Column;
