import React from "react";
import HomepageContainer from "./homepage/homepage_container"
import SignupformContainer from "./sessions/singupform_container";
import LoginformContainer from "./sessions/loginform_container";
import SneakerIndexContainer from "./sneaker_index/sneaker_index_container"
import SneakerShowContainer from "./sneaker_index/sneaker_show_container"
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
// import listItemsIndexContainer from "./listingItems/listitems_index_container"
import listItemShowContainer from "./listingItems/listingItem_show_container"
// import MoreComming from "./more_comming";
import UserShowContainer from "./user_page/user_show_container";
import PurchasedItemShowContainer from "./purchaseditems/purchaseditem_container";
import SearchContainer from "./search/search_container";


const App = () => (
  <Switch>
      <AuthRoute exact path="/signup" component={SignupformContainer}/>
      <AuthRoute exact path="/login" component={LoginformContainer}/>
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>

      <ProtectedRoute exact path="/purchased/:purchasedItemId" component={PurchasedItemShowContainer}/>
      
      <Route exact path="/listingitems/:itemId" component={listItemShowContainer} />
      <Route exact path="/sneakers/:sneakerId" component={SneakerShowContainer} />
      {/* <Route exact path="/sneakers/:sneakerId/listingitems" component={listItemsIndexContainer} /> */}
      <Route exact path="/sneakers" component={SneakerIndexContainer}/>
      <Route exact path="/search" component={SearchContainer} />
      <Route path="/" component={HomepageContainer}/>
      {/* <Route path="/" component={MoreComming}/> */}
  </Switch>
    
);

export default App;