
// Your web app's Firebase configuration



  var firebaseConfig = {
    apiKey: "AIzaSyAjlpHCqwEKl2Pii4bLIE9yBMVx2PsPd-Q",
    authDomain: "groupproject1-ae982.firebaseapp.com",
    databaseURL: "https://groupproject1-ae982.firebaseio.com",
    projectId: "groupproject1-ae982",
    storageBucket: "groupproject1-ae982.appspot.com",
    messagingSenderId: "646862267515",
    appId: "1:646862267515:web:27b1bade313e596f"

  };

  



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebaseConfig);

  
var database = firebase.database();

//testing news html section to push to firebase
var ref =database.ref('catagories')

var data = {
    News: "News",
    Politics: "Politics",
    Tech: "Tech",
    Style:"Style",
    Sports:"Sports",
    Food:"Food"

}
console.log(data);



//ref.push(data); (this will push everything in the data oject when page refreshes)


//ref.push(data); (will push data object to fire base on refresh)



//ref.push(data); (this will push everything in the data oject when page refreshes)



function News(){
    ref.push(data.News)
}
function Politics(){
    ref.push(data.Politics)
}
function Tech(){
    ref.push(data.Tech)
}
function Style(){
    ref.push(data.Style)
}
function Sports(){
    ref.push(data.Sports)
}
function Food(){
    ref.push(data.Food)
}

