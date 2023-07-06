import { Tooltip } from '@chakra-ui/react';

import { Column } from '../models';
import { TableData } from './Table';

interface TableColumnTooltipProps<TFields extends TableData<TFields>> {
  column: Column<TFields>;
  label: string;
  toolTipColumn: string;
}

const TableColumnTooltip = <TFields extends TableData<TFields>>({
  column,
  label,
  toolTipColumn,
}: TableColumnTooltipProps<TFields>) => {
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
