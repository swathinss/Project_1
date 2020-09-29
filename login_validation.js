function Validatefunc(){
  var passwrd=document.getElementById("pass_word").value;
  var confrmpswd=document.getElementById("con_pass").value;
  if (passwrd != confrmpswd){
    alert("Sorry! Password did not Match Please Reset and Try Again");
    return false;
  }
  else{
  alert("Congratulations! You have logged in successfully");
  return true;
  }
}
