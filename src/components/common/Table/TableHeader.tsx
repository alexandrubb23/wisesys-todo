import { TableColumnHeaderProps, Th, Thead, Tr } from '@chakra-ui/react';
import { useState } from 'react';

import { TableProps } from '@/components/common/models';
import TableColumnSortIcon from './TableColumnSortIcon';
import TableColumnTooltip from './TableColumnTooltip';
import { TableData } from './Table';

const TableHeader = <TFields extends TableData<TFields>>({
  columns,
  sortColumn,
  onSort,
}: Pick<TableProps<TFields>, 'columns' | 'sortColumn' | 'onSort'>) => {
  const [toolTipColumn, setToolTipColumn] = useState('');

  const ascOrder = sortColumn.order === 'asc';

  const handleSort = (path: string) => {
    if (sortColumn.path === path) {
      sortColumn.order = ascOrder ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    onSort(sortColumn);
  };

  return (
    <Thead>
      <Tr>
        {columns.map(column => {
          const props: TableColumnHeaderProps = {};
          if (column?.isSortable) {
            props.cursor = 'pointer';
            props.onClick = () => handleSort(column.path);
          }

          return (
            <Th
              {...props}
              key={column.path}
              onMouseEnter={() => setToolTipColumn(column.path)}
              onMouseLeave={() => setToolTipColumn('')}
            >
              <TableColumnTooltip
                column={column}
                label={`Sort by ${column.label} ${
                  ascOrder ? 'descending' : 'ascending'
                }`}
                toolTipColumn={toolTipColumn}
              />
              <TableColumnSortIcon column={column} sortColumn={sortColumn} />
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
};

export default TableHeader;
