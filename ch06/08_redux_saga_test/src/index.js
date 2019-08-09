import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import FriendMain from './friend/container/FriendMain';
import TimelineMain from './timeline/container/TimelineMain';
import store from './common/store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FriendMain ageLimit={30} />
      <TimelineMain />
    </div>
  </Provider>,
  document.getElementById('root')
);
