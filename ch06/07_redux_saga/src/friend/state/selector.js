import { createSelector } from 'reselect';

const getFriends = state => state.friend.friends;
export const getAgeLimit = state => state.friend.showLimit;

// export const getFriendsWithAgeLimit = createSelector(
//   getFriends,
//   (_, props) => props.ageLimit,
//   (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit)
// );

export const makeGetFriendsWithAgeLimit = () => {
  return createSelector(
    getFriends,
    (_, props) => props.ageLimit,
    (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit)
  );
};
