
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBhaRlvn3RImUFBSqDfaqeMF4WxawxG1Bw",
      authDomain: "kwitter-c6259.firebaseapp.com",
      databaseURL: "https://kwitter-c6259-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6259",
      storageBucket: "kwitter-c6259.appspot.com",
      messagingSenderId: "484567487600",
      appId: "1:484567487600:web:6ce40395e11d6c48fd90b5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="WELCOME " +user_name+"!";
      
      function addroom()
      {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html"
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name -" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 function redirecttoroomname(name)
 {
      console.log(name);
      localStorage.setItem("room name", name);
      window.location = "kwitter_page.html";
 }