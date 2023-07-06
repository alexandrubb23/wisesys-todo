import { Table as ChakraTable } from '@chakra-ui/react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { TableProps } from './models';

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
  onSort,
  sortColumn,
  variant = 'simple',
}: TableProps<TFields>) => {
  return (
    <ChakraTable variant={variant} colorScheme={colorScheme}>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </ChakraTable>
  );
};

export default Table;
