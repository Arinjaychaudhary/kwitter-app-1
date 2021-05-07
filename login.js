function add(){
    user_name=document.getElementById("login").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter.html";
}