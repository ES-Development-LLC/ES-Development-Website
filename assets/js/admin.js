function login(){
  try{
    var userEmail = document.getElementByID("email_field").value;
    var userPass = document.getElementByID("password_field").value;
    window.alert(userEmail + " " + userPass);
  } catch{
    window.alert("Error getting Username and Password");
  }


}
