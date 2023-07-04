type Content<T> = {
  onDelete: (item: T) => void;
  item: T;
};

export default Content;
