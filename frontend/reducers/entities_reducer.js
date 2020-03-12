import { combineReducers } from "redux";

import { usersReducer } from "./users_reducer";
import sneakerReducer from "./sneaker_reducer";
import listingItemReducer from "./listingitem_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  sneakers: sneakerReducer,
  listingItems: listingItemReducer
});

export default entitiesReducer;