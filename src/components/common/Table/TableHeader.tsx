import { Thead, Tr } from '@chakra-ui/react';

import { TableProps } from '@/components/common/models';
import { TableData } from './Table';
import TableTd from './TableTd';

const TableHeader = <TFields extends TableData<TFields>>({
  columns,
  sortColumn,
  onSort,
}: Pick<TableProps<TFields>, 'columns' | 'sortColumn' | 'onSort'>) => (
  <Thead>
    <Tr>
      {columns.map(column => (
        <TableTd
          column={column}
          key={column.path}
          onSort={onSort}
          sortColumn={sortColumn}
        />
      ))}
    </Tr>
  </Thead>
);

export default TableHeader;
