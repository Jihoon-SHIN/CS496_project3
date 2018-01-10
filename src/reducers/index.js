import authentication from './authentication';
import memo from './memo';
import search from './search';
import notice from './notice';

import { combineReducers } from 'redux';

export default combineReducers({
    authentication, memo, search, notice
});
