import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Th, Thead, Tr, TableColumnHeaderProps } from '@chakra-ui/react';

import { TableData } from './Table';
import { Column, TableProps } from './models';

const TableHeader = <T extends TableData>({
  columns,
  sortColumn,
  onSort,
}: Omit<TableProps<T>, 'data' | 'onSearch' | 'onDelete'>) => {
  const handleSort = (path: string) => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    onSort(sortColumn);
  };

  const renderSortIcon = (column: Column<T>) => {
    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === 'asc') return <ChevronUpIcon />;

    return <ChevronDownIcon />;
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
