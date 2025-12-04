import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import { combineReducers, legacy_createStore, applyMiddleware} from "redux";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";
import withdrawalReducer from "./Withdrawl/Reducer";
import orderReducer from "./Orders/Reducer";
import assetReducer from "./Asset/Reducer";
import watchlistReducer from "./Watchlist/Reducer"

const rootReducer = combineReducers({
    auth : authReducer,
    coin : coinReducer ,
    wallet : walletReducer,
    withdrawal : withdrawalReducer,
    order : orderReducer,
    assets : assetReducer,
    watchlist : watchlistReducer,
})


export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))



