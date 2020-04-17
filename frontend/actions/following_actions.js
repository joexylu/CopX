import { fetchUserFollowingItems } from "../util/follow_api_util";

export const RECEIVE_ALL_FOLLOWING = "RECEIVE_ALL_FOLLOWING";

const receiveAllFollowing = followingItems => ({
    type: RECEIVE_ALL_FOLLOWING,
    followingItems
})

export const getAllFollowing = () => dispatch => fetchUserFollowingItems()
    .then(res => dispatch(receiveAllFollowing(res)))
