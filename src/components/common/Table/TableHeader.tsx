import { Thead, Tr } from '@chakra-ui/react';

import { useTableColumnsStore } from '@/store/table-store';
import { TableData } from './Table';
import TableTd from './TableTd';

const TableHeader = <T extends TableData<T>>() => {
  const columns = useTableColumnsStore<T>();

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
