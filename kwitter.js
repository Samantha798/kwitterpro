function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location="kwitter_room.html";
}

function addRoom(){
    roomname=document.getElementById("room_name").value;
    localStorage.setItem("room_name", roomname);
    window.location="kwitter_room.html";
}

function logout(){
    
}