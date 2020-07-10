import Store from './store';

import states from './states';
import mutations from './mutations';
import actions from './actions';

const store = new Store({
  states,
  mutations,
  actions
});

export default store;