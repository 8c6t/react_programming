import React, { useEffect, useRef, useState } from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList';

const TimelineMain = () => {
  // const [_, forceUpdate] = useReducer(s => s+1, 0);
  const [timelines, setTimelines] = useState(store.getState().timeline.timelines);
  const unsubscribeRef = useRef();

  useEffect(() => {
    // unsubscribeRef.current = store.subscribe(() => forceUpdate());
    unsubscribeRef.current = store.subscribe(() => setTimelines(store.getState().timeline.timelines));
    return () => {
      unsubscribeRef.current();
    };
  }, []);

  const onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
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
