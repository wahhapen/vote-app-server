import makeStore from './src/store';
import startServer from './src/server';

const store = makeStore();
export default store;
startServer();
