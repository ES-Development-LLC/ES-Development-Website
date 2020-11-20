firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.alert("Signed in successfully!")
    var user = firebase.auth().currentUser;

    if (user!=null){
      var email_id = user.email;
      window.alert("Welcome " + email_id);
      //document.getElementById("head").innerHTML = ()"Welcome " + email_id);
    }

  } else {
    // No user is signed in.
  }
});
//////////////////////////////////////////////////////

function login(){
  var success = true;
  try{

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    window.alert(userEmail + " " + userPass);

  } catch(err) {
    success = false;
    window.alert("Error:" + err.message);

  } if (success){

      firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then((user) => {
      // Signed in
      window.alert("Signed in as "+ userEmail);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  }


}
