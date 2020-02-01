import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './createStore';
import View from './View';
import { loadUser } from './actions/userProfile';
import store from './store';

 const SurveyContainer = () => {
    return (
      <Provider store={store}>
        <View />
      </Provider>
    );
};

export default SurveyContainer;
