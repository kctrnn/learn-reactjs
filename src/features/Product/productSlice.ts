import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListResponse, PaginationResponse, Product, QueryParams } from 'models';

export interface ProductState {
  list: Product[];
  loading: boolean;

  filter: Partial<QueryParams>;
  pagination: PaginationResponse;
}

const initialState: ProductState = {
  list: [],
  loading: false,

  filter: {
    _page: 1,
    _limit: 10,
    _order: 'asc',
    _sort: 'salePrice',
  },

  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state, action: PayloadAction<Partial<QueryParams>>) {
      state.loading = true;
    },

    fetchProductListSuccess(state, action: PayloadAction<ListResponse<Product>>) {
      state.loading = false;
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
    },

    fetchProductListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<Partial<QueryParams>>) {
      state.filter = action.payload;
    },

    // for search debounce
    setFilterDebounce(state, action: PayloadAction<Partial<QueryParams>>) {},
  },
});

// actions
export const {
  fetchProductList,
  fetchProductListSuccess,
  fetchProductListFailed,
  setFilter,
  setFilterDebounce,
} = productSlice.actions;

// selectors
export const selectProductList = (state: RootState) => state.product.list;
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectProductFilter = (state: RootState) => state.product.filter;
export const selectProductPagination = (state: RootState) => state.product.pagination;

// reducer
const productReducer = productSlice.reducer;
export default productReducer;
