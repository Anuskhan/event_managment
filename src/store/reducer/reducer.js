import ActionTypes from '../constant/constant';
// import { initializeApp } from 'firebase';

const INITIAL_STATE = {
  app:[{name:"Anas",age:20}]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.API:
            return ({
                ...state,
                getdata: action.payload
            })
            case ActionTypes.API:
            return Object.assign({}, state, {EventLoading: true});
        default:
            return state;
    }

}
