import { combineReducers } from 'redux';
import main from './mainState';
import mainCity from './mainCity.jsx';
import cityList from './cityList.jsx';

export default combineReducers({
    main,
    mainCity,
    cityList,
});