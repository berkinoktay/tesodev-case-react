import { combineReducers } from 'redux';

import records from '../redux/slices/records';

const rootReducer = combineReducers({
  records: records,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
