import { Table as ChakraTable } from '@chakra-ui/react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { TableProps } from '@/components/common/models';
import useTableQueryStore from '@/store/table-store';
import { useCallback, useEffect } from 'react';

type FieldData<T> = {
  [K in keyof T]: T[K];
};

export type TableData<T> = {
  id: number | string;
} & FieldData<T>;

const Table = <T extends TableData<T>>({
  colorScheme = 'gray',
  columns,
  data,
  variant = 'simple',
}: TableProps<T>) => {
  const { setTableColumns, setTableData } = useTableQueryStore();

  const setData = useCallback(() => {
    setTableColumns(columns);
    setTableData(data);
  }, [columns, data, setTableColumns, setTableData]);

  useEffect(() => {
    setData();
  }, [setData]);

  return (
    <ChakraTable variant={variant} colorScheme={colorScheme}>
      <TableHeader />
      <TableBody />
    </ChakraTable>
  );
};

export default Table;
