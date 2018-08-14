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
var monthsWorked;
var totalBilled;

// submit on click 
  // add new employee

// on child added
  // populate table rows

database.ref().on("childAdded", function(event) {
  var newRow = $("<tr>")
  // Columns in Current Employees Div
  var tdName = $("<td>")
  tdName.text(event.val().employeeName)
  var tdRole = $("<td>")
  tdRole.text(event.val().role)
  var tdStart = $("<td>")
  tdStart.text(event.val().startDate)
  var tdWorked = $("<td>")
  tdWorked.text(event.val().monthsWorked) 
  var tdRate = $("<td>")
  tdRate.text(event.val().monthlyRate)
  var tdBilled = $("<td>")
  tdBilled.text(event.val().totalBilled)
  newRow.append(tdName, tdRole, tdStart, tdWorked, tdRate,  tdBilled)
  $("tbody").append(newRow)
})
