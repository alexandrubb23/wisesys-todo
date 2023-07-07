import { Table as ChakraTable } from '@chakra-ui/react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { TableProps } from '@/components/common/models';
import useTableStore from '@/store/table-store';
import { useCallback, useEffect } from 'react';

type FieldData<TFields> = {
  [K in keyof TFields]: TFields[K];
};

export type TableData<TFields> = {
  id: number | string;
} & FieldData<TFields>;

const Table = <TFields extends TableData<TFields>>({
  colorScheme = 'gray',
  columns,
  data,
  variant = 'simple',
}: TableProps<TFields>) => {
  const { setTableColumns, setTableData } = useTableStore();

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
