import { TableColumnHeaderProps, Th } from '@chakra-ui/react';
import { useCallback } from 'react';

import useTableQueryStore, { useTableSortColumn } from '@/store/table-store';
import { Column } from '@/components/common/models';
import { TableData } from './Table';
import TableColumnSortIcon from './TableColumnSortIcon';
import TableColumnTooltip from './TableColumnTooltip';

interface TableTdProps<T extends TableData<T>> {
  column: Column<T>;
}

const TableTd = <T extends TableData<T>>({ column }: TableTdProps<T>) => {
  const { setTableSortColumn, setTableToolTipColumn } = useTableQueryStore();
  const sortColumn = useTableSortColumn();

  const isAscendingOrder = sortColumn.order === 'asc';

  const handleSort = useCallback(
    (path: string) => {
      if (sortColumn.path === path) {
        sortColumn.order = isAscendingOrder ? 'desc' : 'asc';
      } else {
        sortColumn.path = path;
        sortColumn.order = 'asc';
      }

      setTableSortColumn({ ...sortColumn });
    },
    [sortColumn, setTableSortColumn, isAscendingOrder]
  );

  const props: TableColumnHeaderProps = {};
  if (column?.isSortable) {
    props.cursor = 'pointer';
    props.onClick = () => handleSort(column.path);
  }

  return (
    <Th
      {...props}
      onMouseEnter={() => setTableToolTipColumn(column.path)}
      onMouseLeave={() => setTableToolTipColumn('')}
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
