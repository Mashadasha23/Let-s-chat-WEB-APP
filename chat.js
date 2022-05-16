// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
<script >
  const firebaseConfig = {
    apiKey: "AIzaSyAIDN0o2z7qDQFGK-qK-cRfbMrcTPo3XTM",
    authDomain: "let-s-chat-web-app-2a531.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-2a531-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-2a531",
    storageBucket: "let-s-chat-web-app-2a531.appspot.com",
    messagingSenderId: "88092089962",
    appId: "1:88092089962:web:62040ac7e64aba53693413"
  };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



