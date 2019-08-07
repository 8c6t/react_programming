import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNextFriend } from '../../common/mockData';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import { addFriend, setAgeLimit, setShowLimit } from '../state';
import { getAgeLimit, getShowLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit } from '../state/selector';

import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';

const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT];
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];

const FriendMain = memo(() => {
  const dispatch = useDispatch();
  
  const ageLimit = useSelector(getAgeLimit);
  const showLimit = useSelector(getShowLimit);
  const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
  const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);

  const onAdd = () => {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  };

  console.log('FriendMain render');
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={setAgeLimit}
        value={ageLimit}
        options={ageLimitOptions}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={setShowLimit}
        value={showLimit}
        options={showLimitOptions}
        postfix="명 이하만 보기(연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
});

export default FriendMain;
