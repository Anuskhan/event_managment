import ActionTypes from '../constant/constant';
import { initializeApp } from 'firebase';

const INITIAL_STATE = {
    getdata:[],
    name:"Anas khan",
    array:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.API:
            return ({
                ...state,
                getdata: action.payload
            })
      
        default:
            return state;
    }

}
