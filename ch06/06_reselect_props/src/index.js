import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import FriendMain from './friend/container/FriendMain';
import store from './common/store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FriendMain ageLimit={30} />
      <FriendMain ageLimit={15} />
    </div>
  </Provider>,
  document.getElementById('root')
);
