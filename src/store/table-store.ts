import { TableData } from '@/components/common/Table/Table';
import { Column, SortColumn } from '@/components/common/models';
import { create } from 'zustand';

interface TableQuery {
  columns?: Column[];
  data?: TableData<unknown>[];
  sortColumn: SortColumn;
  toolTipColumn: string;
}

interface TableQueryStore {
  tableQuery: TableQuery;
  setSortColumn: (sortColumn: SortColumn) => void;
  setToolTipColumn: (toolTipColumn: string) => void;
  setTableColumns: (columns: Column[]) => void;
  setTableData: (data: TableData<unknown>[]) => void;
}

const useTableStore = create<TableQueryStore>(set => ({
  tableQuery: {
    sortColumn: {
      order: 'desc',
      path: 'id',
    },
    toolTipColumn: '',
  },
  setSortColumn: (sortColumn: SortColumn) =>
    set(store => ({
      tableQuery: {
        ...store.tableQuery,
        sortColumn,
      },
    })),
  setToolTipColumn: (toolTipColumn: string) =>
    set(store => ({
      tableQuery: {
        ...store.tableQuery,
        toolTipColumn,
      },
    })),
  setTableColumns: (columns: Column[]) =>
    set(store => ({
      tableQuery: {
        ...store.tableQuery,
        columns,
      },
    })),
  setTableData: (data: TableData<unknown>[]) =>
    set(store => ({
      tableQuery: {
        ...store.tableQuery,
        data,
      },
    })),
}));

export default useTableStore;
