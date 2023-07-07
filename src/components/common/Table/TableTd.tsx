import { TableColumnHeaderProps, Th } from '@chakra-ui/react';
import { useCallback } from 'react';

import useTableStore from '@/store/table-store';
import { Column } from '../models';
import { TableData } from './Table';
import TableColumnSortIcon from './TableColumnSortIcon';
import TableColumnTooltip from './TableColumnTooltip';

interface TableTdProps<T extends TableData<T>> {
  column: Column<T>;
}

const TableTd = <T extends TableData<T>>({ column }: TableTdProps<T>) => {
  const setSortColumn = useTableStore(s => s.setSortColumn);
  const setToolTipColumn = useTableStore(s => s.setToolTipColumn);
  const sortColumn = useTableStore(s => s.tableQuery.sortColumn);

  const isAscendingOrder = sortColumn.order === 'asc';

  const handleSort = useCallback(
    (path: string) => {
      if (sortColumn.path === path) {
        sortColumn.order = isAscendingOrder ? 'desc' : 'asc';
      } else {
        sortColumn.path = path;
        sortColumn.order = 'asc';
      }

      setSortColumn({ ...sortColumn });
    },
    [sortColumn, setSortColumn, isAscendingOrder]
  );

  const props: TableColumnHeaderProps = {};
  if (column?.isSortable) {
    props.cursor = 'pointer';
    props.onClick = () => handleSort(column.path);
  }

  return (
    <Th
      {...props}
      onMouseEnter={() => setToolTipColumn(column.path)}
      onMouseLeave={() => setToolTipColumn('')}
    >
      <TableColumnTooltip
        column={column}
        label={`Sort by ${column.label} ${
          isAscendingOrder ? 'descending' : 'ascending'
        }`}
      />
      <TableColumnSortIcon column={column} sortColumn={sortColumn} />
    </Th>
  );
};

export default TableTd;
