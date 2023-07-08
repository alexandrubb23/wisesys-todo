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
  setTableSortColumn: (sortColumn: SortColumn) => void;
  setTableToolTipColumn: (toolTipColumn: string) => void;
  setTableColumns: (columns: Column[]) => void;
  setTableData: (data: TableData<unknown>[]) => void;
}

const setQueryMember =
  (data: Partial<TableQuery>) => (store: TableQueryStore) => {
    const tableQuery: Partial<TableQuery> = Object.entries(data).reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as Record<string, Partial<TableQuery[keyof TableQuery]>>
    );

    return {
      tableQuery: {
        ...store.tableQuery,
        ...tableQuery,
      },
    };
  };

const useTableQueryStore = create<TableQueryStore>(set => ({
  tableQuery: {
    sortColumn: {
      order: 'desc',
      path: 'id',
    },
    toolTipColumn: '',
  },
  setTableSortColumn: (sortColumn: SortColumn) =>
    set(setQueryMember({ sortColumn })),
  setTableToolTipColumn: (toolTipColumn: string) =>
    set(setQueryMember({ toolTipColumn })),
  setTableColumns: (columns: Column[]) => set(setQueryMember({ columns })),
  setTableData: (data: TableData<unknown>[]) => set(setQueryMember({ data })),
}));

export const useTableDataStore = <T>() =>
  useTableQueryStore(s => s.tableQuery.data) as TableData<T>[];

export const useTableColumns = <T>() =>
  useTableQueryStore(s => s.tableQuery.columns) as Column<T>[];

export const useTableSortColumn = () =>
  useTableQueryStore(s => s.tableQuery.sortColumn);

export const useTableToolTipColumnStore = () =>
  useTableQueryStore(s => s.tableQuery.toolTipColumn);

export default useTableQueryStore;
