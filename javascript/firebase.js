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
  var ref = database.ref('scores')

 // var address = 
//   var data = {
//       rock: "Rock",
//       paper: "Paper",
//       scissors: "Scissors"
//   }
//   console.log(data);
//   ref.push(data);


//   function rock1(){
//       ref.push(data.rock)
//   }
//   function paper1(){
//       ref.push(data.paper)
//   }
//   function scissors1(){
//       ref.push(data.scissors)
//   }

//Running Modal Window
