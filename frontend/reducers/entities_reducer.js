import { combineReducers } from "redux";

import { usersReducer } from "./users_reducer";
import sneakerReducer from "./sneaker_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  sneakers: sneakerReducer
});

export default entitiesReducer;