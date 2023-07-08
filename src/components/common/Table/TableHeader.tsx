import { Thead, Tr } from '@chakra-ui/react';

import { useTableColumns } from '@/store/table-store';
import { TableData } from './Table';
import TableTd from './TableTd';

const TableHeader = <T extends TableData<T>>() => {
  const columns = useTableColumns<T>();

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
