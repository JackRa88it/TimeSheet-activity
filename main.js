var config = {
  apiKey: "AIzaSyAbxy20Uu3kArW8CKeH1AKXys8Y4YgNxGQ",
  authDomain: "timesheet-14ba2.firebaseapp.com",
  databaseURL: "https://timesheet-14ba2.firebaseio.com",
  projectId: "timesheet-14ba2",
  storageBucket: "",
  messagingSenderId: "675252922865"
};
firebase.initializeApp(config);

var database = firebase.database()

var employeeName;
var role;
var startDate;
var monthlyRate;

// submit on click 
  // add new employee

// on child added
  // populate table rows
