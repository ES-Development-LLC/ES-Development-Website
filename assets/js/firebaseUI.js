var firebaseConfig = {
 apiKey: "AIzaSyC4nkzFPcD1ODP42TiFpzaOQ3tNqHiRIVc",
 authDomain: "emmetts.dev",
 databaseURL: "https://es-admin-86d5b.firebaseio.com",
 projectId: "es-admin-86d5b",
 storageBucket: "es-admin-86d5b.appspot.com",
 messagingSenderId: "366373933747",
 appId: "1:366373933747:web:a5630df03224c9120b96c6",
 measurementId: "G-KYKNFLTVPH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

///////////////////////////////////////////////////
function loginStart(){
  var r = document.getElementsByClassName("r");
  for (i=0; i < r.length; i++){
    r[i].style.visibility = "hidden";
  }

  var l = document.getElementsByClassName("l");
  for (i=0; i < l.length; i++){
    l[i].style.visibility = "visible";
  }
}

function loginGood(){
  var r = document.getElementsByClassName("r");
  for (i=0; i < r.length; i++){
    r[i].style.visibility = "visible";
  }

  var l = document.getElementsByClassName("l");
  for (i=0; i < l.length; i++){
    l[i].style.visibility = "hidden";
  }
}

////////////////////////////////////////////////////////


// Initialize the FirebaseUI Widget using Firebase.
try{

  loginStart();

  var ui = new firebaseui.auth.AuthUI(firebase.auth());


  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  //   // Other config options...
  // });
} catch(err) {
  window.alert(err);
}


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      loginGood();
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'https://emmetts.dev/resources',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: 'https://emmetts.dev',
  // Privacy policy url.
  privacyPolicyUrl: 'https://emmetts.dev'
};



// The start method will wait until the DOM is loaded.
try{
  ui.start('#firebaseui-auth-container', uiConfig);
} catch(err) {
  window.alert(err.messaage);
}


/////////////////////////////////////////////////
