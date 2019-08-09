import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList';

const TimelineMain = () => {
  const dispatch = useDispatch();
  const { timelines, isLoading, error } = useSelector(state => state.timeline);

  const onAdd = () => {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }

  const onLike = (e) => {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    dispatch(actions.requestLike(timeline));
  }

  console.log('TimelineMain render');
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {!!isLoading && <p>전송 중...</p>}
      {!!error && <p>에러 발생: {error}</p>}
    </div>
  );
}

export default TimelineMain;
