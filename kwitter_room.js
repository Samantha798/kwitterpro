var firebaseConfig = {
    apiKey: "AIzaSyARemHkfWei-2klQHk44-d6-NhkqrG5QLU",
  authDomain: "kwitterpro-93bf5.firebaseapp.com",
  projectId: "kwitterpro-93bf5",
  storageBucket: "kwitterpro-93bf5.appspot.com",
  messagingSenderId: "24298467812",
  appId: "1:24298467812:web:b26a918900d161884357f1",
};

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
}