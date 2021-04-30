
  var firebaseConfig = {
    apiKey: "AIzaSyAwAOnzY1j2yy8oz157uOoYZ5QN7C1zJJU",
    authDomain: "kwitter-test-5c613.firebaseapp.com",
    databaseURL: "https://kwitter-test-5c613-default-rtdb.firebaseio.com/",
    projectId: "kwitter-test-5c613",
    storageBucket: "kwitter-test-5c613.appspot.com",
    messagingSenderId: "190763164953",
    appId: "1:190763164953:web:8d46a10b1e1132ac14d188"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


    var user_name= localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML= `Welcome ${user_name} `;



var room_name=document.getElementById("roomname").value;
  function addroom(){
      localStorage.setItem("room_name",room_name);
    
      
firebase.database().ref("/").child(room_name).update({
  purpose:"chat"
});
      
        window.location= "kwitter_page.html";
  }
  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="login.html";
  }
    function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row= `<div id=${Room_names} class=room_name onclick=redirect_to_room_name(this.id)> ${Room_names} </div><hr>`;

document.getElementById("output").innerHTML += row;
console.log(Room_names);
 //End code
 });});}
getData();

