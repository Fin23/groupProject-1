

//########################################################
//  This can be changed to anyone else's Firebase DB, Comment out if that's the case
//########################################################

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDU2c26o-uCjjLF8PBamijT5u7FF3K3RWg",
    authDomain: "groupproject-1-68108.firebaseapp.com",
    databaseURL: "https://groupproject-1-68108.firebaseio.com",
    projectId: "groupproject-1-68108",
    storageBucket: "",
    messagingSenderId: "263316411387",
    appId: "1:263316411387:web:f7d1f6ac506a10c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//########################################################
// End
//########################################################



//This is the variable that holds the user's name if you want to display it dynamically somewhere (eg "currently logged in - [userName]" )
var userName = "";

//behind the scene variables that will not leave this .js file
var pass = "";
var currentUser = "";

//These variables are location related strings that will be plugged into the other APIs queries
//example: var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "..."
var zipCode = "";
var street = "";
var city = "";
var state = "";


$(document).ready(function () {
    var database = firebase.database();

    //root area of the database
    var ref = database.ref();


    //logIn Function
    function logIn() {

        userName = $("#userLForm").val().trim();
        pass = $("#passLForm").val().trim();

        //Supposed to find fUserNames in the Userdata folder on Firebase that match what the one the user entered
        ref.child('Userdata').orderByChild("fUser/fUserName").equalTo(userName).on("value", function (snapshot) {

            //This is needed to query info from firebase items that have keys (eg: the different user profiles)
            //var test = snapshot.val();
            var userInfo = Object.keys(snapshot.val());


            console.log(snapshot.child(userInfo).val().fUser.fUserName);

            // Compares username input to the lists of usernames in the database to see if there is an account with that name
            if (snapshot.child(userInfo).val().fUser.fUserName === userName) {

                //If user exists in the DB, set's this var to that user object
                currentUser = snapshot.child(userInfo).val().fUser;

                if (currentUser.fPass === pass) {
                    //if both checks succeed, login them in here
                    console.log("Logged In!!!");

                    //Sets these variables to what the user's counterparts are on the server
                    zipCode = currentUser.fZipCode;
                    street = currentUser.fStreet;
                    city = currentUser.fCity;
                    state = currentUser.fState;

                    console.log(zipCode);
                    console.log(street);
                    console.log(city);
                    console.log(state);

                }
                else {
                    //If the password entered does not match the one in the user object
                    console.log("Incorrect password.");

                }
            }
            else {
                //If username is not found in the database
                console.log("Username not found.");

            }
        }, function (errorObject) {

            // In case of error this will print the error
            console.log("The read failed: " + errorObject.code);
        });


    }

    //logIn button
    $("#sign-in-bttn").on("click", function () {
        logIn();

        // ################### Uncomment ############################
        //This is supposed to close the Login Modal after button is clicked
        $("#loginModal").modal('hide');

        //Supposed to Redirect to homepage
        //window.location.href = "index.html";
    });

    //Register function(It works!!)
    function register() {

        userName = $("#userRForm").val().trim();
        pass = $("#passRForm").val().trim();
        street = $("#streetForm").val().trim();
        city = $("#cityForm").val().trim();
        state = $("#stateForm").val().trim();
        zipCode = $("#zipForm").val().trim();

        //Puts info from register text fields into a user object that will be saved on the database
        var user = {
            fUserName: userName,
            fPass: pass,
            fStreet: street,
            fCity: city,
            fState: state,
            fZipCode: zipCode
        };

        //Saves the user's info to a server here
        database.ref("/Userdata").push({
            fUser: user
        });

        //Maybe also log them automatically too(CAUTION THIS MIGHT BE NOT GOOD CODE IDK)
        logIn();
    }


    $("#submit-acct-btn").on("click", function () {
        register();

        //##################### Uncomment ################################
        //This is supposed to close the Register Modal after button is clicked
        $("#registerModal").modal('hide');

        //Supposed to Redirect to homepage
        //window.location.href = "index.html";
    });


    function logOut() {

        //Clears user info (Crude I know)
        currentUser = "";
        zipCode = "";
        street = "";
        city = "";
        state = "";

        //Supposed to Redirect to homepage
        //window.location.href = "index.html";

    }

    $("#logOutButton").on("click", function () {
        logOut();
    });

});
