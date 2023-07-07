import { TableColumnHeaderProps, Th } from '@chakra-ui/react';
import { useState, useCallback } from 'react';

import { Column, SortColumn } from '../models';
import { TableData } from './Table';
import TableColumnSortIcon from './TableColumnSortIcon';
import TableColumnTooltip from './TableColumnTooltip';

interface TableTdProps<TFields extends TableData<TFields>> {
  column: Column<TFields>;
  onSort: (sortColumn: SortColumn) => void;
  sortColumn: SortColumn;
}

const TableTd = <TFields extends TableData<TFields>>({
  column,
  onSort,
  sortColumn,
}: TableTdProps<TFields>) => {
  const [toolTipColumn, setToolTipColumn] = useState('');

  const isAscendingOrder = sortColumn.order === 'asc';

  const handleSort = useCallback(
    (path: string) => {
      if (sortColumn.path === path) {
        sortColumn.order = isAscendingOrder ? 'desc' : 'asc';
      } else {
        sortColumn.path = path;
        sortColumn.order = 'asc';
      }

      onSort(sortColumn);
    },
    [onSort, sortColumn, isAscendingOrder]
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
        toolTipColumn={toolTipColumn}
      />
      <TableColumnSortIcon column={column} sortColumn={sortColumn} />
    </Th>
  );
};

export default TableTd;
