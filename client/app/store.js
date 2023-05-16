import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allStocksReducer from "../features/allStocks/allStocksSlice";
import singleStockViewSliceReducer from "../features/singleStock/singleStockViewSlice.js";
import popularStocksViewSliceReducer from "../features/home/popularStockView/popularStockViewSlice";
import watchlistStocksViewSliceReducer from "../features/home/watchListView/watchListViewSlice";
import portfolioSliceReducer from "../features/portfolio/portfolioSlice";
import transactionSliceReducer from "../features/portfolio/transactionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allStocks: allStocksReducer,
    singleStockView: singleStockViewSliceReducer,
    popularStocksView: popularStocksViewSliceReducer,
    watchlistStocksView: watchlistStocksViewSliceReducer,
    portfolio: portfolioSliceReducer,
    transactions: transactionSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
