import React, { memo, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import { makeGetFriendsWithAgeLimit } from '../state/selector';

import FriendList from '../component/FriendList';

const FriendMain = memo((props) => {
  const dispatch = useDispatch();
  const getFriendsWithAgeLimit = useMemo(makeGetFriendsWithAgeLimit, []);

  const friendsWithAgeLimit = useSelector(state => getFriendsWithAgeLimit(state, props));

  const onAdd = () => {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  };

  console.log('FriendMain render');
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friendsWithAgeLimit} />
    </div>
  );
});

export default FriendMain;
