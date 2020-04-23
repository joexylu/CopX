import { combineReducers } from "redux";

import { usersReducer } from "./users_reducer";
import sneakerReducer from "./sneaker_reducer";
import listingItemReducer from "./listingitem_reducer";
import purchasedItemReducer from "./purchaseditem_reducer";
import followingItemReducer from "./followingitem_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  sneakers: sneakerReducer,
  listingItems: listingItemReducer,
  followingItem: followingItemReducer,
  purchasedItem: purchasedItemReducer,
  search: searchReducer
});

export default entitiesReducer;