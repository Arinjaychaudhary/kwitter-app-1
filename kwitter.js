var firebaseConfig = {
    apiKey: "AIzaSyD9G5E02SaXL443V2_aNWycoMWEPSrCa0A",
    authDomain: "kwitter-de2b1.firebaseapp.com",
    databaseURL: "https://kwitter-de2b1-default-rtdb.firebaseio.com",
    projectId: "kwitter-de2b1",
    storageBucket: "kwitter-de2b1.appspot.com",
    messagingSenderId: "212216083990",
    appId: "1:212216083990:web:8e5f50e944b14964502737"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



    var user_name= localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML= `Welcome ${user_name} `;



var room_name=document.getElementById("roomname").value;
  function addroom(){
      localStorage.setItem("room_name",room_name);
firebase.database().ref(user_name).update({
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