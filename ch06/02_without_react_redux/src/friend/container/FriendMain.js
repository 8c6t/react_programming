import React, { useState, useEffect, useRef, memo } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';

const FriendMain = memo(() => {
  const [friends, setFriends] = useState(store.getState().friend.friends);
  const unsubscribeRef = useRef();

  useEffect(() => {
    unsubscribeRef.current = store.subscribe(() => setFriends(store.getState().friend.friends));
    return () => {
      unsubscribeRef.current();
    };
  }, []);

  const onAdd = () => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  };

  console.log('FriendMain render');
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
});

export default FriendMain;
