function login(){
    user_name = document.getElementById("login_userNAME").value;
    localStorage.setItem("user_name", user_name);

    window.location = "room_name.html";
}