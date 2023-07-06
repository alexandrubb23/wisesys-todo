import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Th, Thead, Tr, TableColumnHeaderProps } from '@chakra-ui/react';

import { TableData } from './Table';
import { Column, TableProps } from './models';

const TableHeader = <TFields extends TableData<TFields>>({
  columns,
  sortColumn,
  onSort,
}: Pick<TableProps<TFields>, 'columns' | 'sortColumn' | 'onSort'>) => {
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

  const renderSortIcon = (column: Column<TFields>) => {
    if (column.path !== sortColumn.path) return null;
    return ascOrder ? <ChevronUpIcon /> : <ChevronDownIcon />;
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
            <Th key={column.path} {...props}>
              {column.label} {renderSortIcon(column)}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
};

export default TableHeader;
