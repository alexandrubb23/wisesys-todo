import { Thead, Tr } from '@chakra-ui/react';

import { Column } from '@/components/common/models';
import useTableQueryStore from '@/store/table-store';
import { TableData } from './Table';
import TableTd from './TableTd';

const TableHeader = <T extends TableData<T>>() => {
  const columns = useTableQueryStore(s => s.tableQuery.columns) as Column<T>[];

  return (
    <Thead>
      <Tr>
        {columns?.map(column => (
          <TableTd column={column} key={column.path} />
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHeader;
