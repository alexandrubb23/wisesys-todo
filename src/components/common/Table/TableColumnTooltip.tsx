import { Tooltip } from '@chakra-ui/react';

import { Column } from '@/components/common/models';
import { useTableToolTipColumnStore } from '@/store/table-store';
import { TableData } from './Table';

interface TableColumnTooltipProps<T extends TableData<T>> {
  column: Column<T>;
  label: string;
}

const TableColumnTooltip = <T extends TableData<T>>({
  column,
  label,
}: TableColumnTooltipProps<T>) => {
  const toolTipColumn = useTableToolTipColumnStore();

  if (!column?.isSortable) return <>{column.label}</>;

  return (
    <Tooltip
      aria-label={label}
      hasArrow
      isOpen={column.path === toolTipColumn}
      label={label}
      placement='top-end'
    >
      {column.label}
    </Tooltip>
  );
};

export default TableColumnTooltip;
