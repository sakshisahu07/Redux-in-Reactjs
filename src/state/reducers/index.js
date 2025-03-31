import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer";

const reducer =combineReducers({
    amount: AmountReducer
})
export default reducer