import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList';

const TimelineMain = () => {
  const dispatch = useDispatch();
  const { timelines } = useSelector(state => state.timeline);

  const onAdd = () => {
    const timeline = getNextTimeline();
    dispatch(addTimeline(timeline));
  }

  console.log('TimelineMain render');
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}

export default TimelineMain;
