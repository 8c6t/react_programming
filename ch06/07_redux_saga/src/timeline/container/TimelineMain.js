import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList';

const TimelineMain = () => {
  const [currentText, setCurrentText] = useState('');

  const dispatch = useDispatch();
  const { timelines, isLoading, error, text } = useSelector(state => state.timeline);

  const onAdd = () => {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }

  const onLike = (e) => {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    dispatch(actions.requestLike(timeline));
  }

  const onChangeText = (e) => {
    const text = e.currentTarget.value;
    dispatch(actions.trySetText(text));
    setCurrentText(text);
  }

  console.log('TimelineMain render');
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {!!isLoading && <p>전송 중...</p>}
      {!!error && <p>에러 발생: {error}</p>}
      <input type='text' value={currentText} onChange={onChangeText} />
      {!!text && <p>{text}</p>}
    </div>
  );
}

export default TimelineMain;
