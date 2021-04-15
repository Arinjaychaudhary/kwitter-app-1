function add(){
    username=document.getElementById("login").value;
    localStorage.setItem("Username",username);
    window.location="kwitter.html";
}