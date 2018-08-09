
import ActionTypes from '../constant/constant';
// import history from '../../History';
// import createBrowserHistory from 'history/createBrowserHistory'
import firebase from 'firebase';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()

// const hsitory = createBrowserHistory()





  var config = {
    apiKey: "AIzaSyBU9H-abTd31otb8bJut_5WWUOt8cQazaU",
    authDomain: "reactnative-32c24.firebaseapp.com",
    databaseURL: "https://reactnative-32c24.firebaseio.com",
    projectId: "reactnative-32c24",
    storageBucket: "reactnative-32c24.appspot.com",
    messagingSenderId: "163065329715"
  };
  firebase.initializeApp(config);



export function fatchdatafun(name) {
    console.log(name,"bhai")    
return function(dispatch){

    // fetch(`https://www.metaweather.com/api/location/search/?query=${name}`, {mode: 'no-cors'})
    fetch("https://greencommunitylaundry.herokuapp.com/api/products")
       // axios.get("https://greencommunitylaundry.herokuapp.com/api/products").
    .then(function(snap) {
     snap.json().then((data)=>{

         console.log(data,"snap")
         return dispatch => {
             dispatch({ type: ActionTypes.API, payload: data })
         }
         
     })
    });
    }
}


export function NameFun(obj) {
    console.log(obj,"Name")
    return (
        dispatch => {
            console.log("dispatc",dispatch)
                dispatch({ type: ActionTypes.NAME, payload: obj })
            }
        )
}
export function useable(obj) {
    console.log(obj,"rudexxx")
    return (
        dispatch => {
                dispatch({ type: ActionTypes.DATA, payload: obj })
            }
        )
}
 

