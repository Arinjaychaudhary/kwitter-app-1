var firebaseConfig = {
  apiKey: "AIzaSyCJKFD1_NBOJtW8cvol6xhDYToT32iideo",
  authDomain: "kwtterprojectlaptop.firebaseapp.com",
  databaseURL: "https://kwtterprojectlaptop-default-rtdb.firebaseio.com/",
  projectId: "kwtterprojectlaptop",
  storageBucket: "kwtterprojectlaptop.appspot.com",
  messagingSenderId: "403322413709",
  appId: "1:403322413709:web:c4064207d61163f5db78c4",
  measurementId: "G-NV9358JJ31"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



    var user_name= localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML= `Welcome ${user_name} `;



var room_name=document.getElementById("roomname").value;
  function addroom(){
      localStorage.setItem("room_name",room_name);
firebase.database().ref(user_name).child(room_name).update({
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