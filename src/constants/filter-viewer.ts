import { QueryParams } from 'models';
import { formatPrice } from 'utils';

export const FILTER_LIST = [
  {
    getLabel: () => 'Giao hàng miễn phí',
    isVisible: () => true,
    isActive: (filter: Partial<QueryParams>) => filter.isFreeShip,

    onRemove: null,
    onToggle: (filter: Partial<QueryParams>) => ({ isFreeShip: !filter.isFreeShip, _page: 1 }),
  },
  {
    getLabel: () => 'Có khuyến mãi',
    isVisible: (filter: Partial<QueryParams>) => filter.isPromotion,
    isActive: () => true,

    onRemove: () => ({ isPromotion: undefined, _page: 1 }),
    onToggle: null,
  },
  {
    getLabel: (filter: Partial<QueryParams>) =>
      `Từ ${formatPrice(filter.salePrice_gte)} đến ${formatPrice(filter.salePrice_lte)}`,
    isVisible: (filter: Partial<QueryParams>) =>
      filter.salePrice_gte !== undefined && filter.salePrice_lte !== undefined,
    isActive: () => true,

    onRemove: () => ({
      salePrice_gte: undefined,
      salePrice_lte: undefined,
      _page: 1,
    }),
    onToggle: null,
  },
  {
    getLabel: (filter: Partial<QueryParams>) => `Danh mục: ${filter.categoryId.slice(-1)}`,
    isVisible: (filter: Partial<QueryParams>) => filter.categoryId,
    isActive: () => true,

    onRemove: () => ({
      categoryId: undefined,
      _page: 1,
    }),
    onToggle: null,
  },
];
