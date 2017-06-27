import makeStore from './src/store';
import startServer from './src/server';

const store = makeStore();
export default store;
startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});

store.dispatch({ type: 'NEXT' });
