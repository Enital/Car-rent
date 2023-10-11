// export const selectFavorite = state => state.favorite.favorite;
// export const selectAdverts = state => state.catalog.adverts;
// export const selectAllAdverts = state => state.catalog.AllAdverts;
// export const selectPage = state => state.catalog.page;
// export const selectFilters = state => state.filter.filters;
// export const filterFavorite = state => state.filter.filterFavorite;

export const selectFavorites = state => state.favorite.favorites;
export const selectAdverts = state => state.catalog.adverts;
export const selectAllAdverts = state => state.catalog.allAdverts;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;
export const selectPage = state => state.catalog.page;
export const selectFilters = state => state.filter.filter;
export const filterFavorite = state => state.filter.filterFavorite;
