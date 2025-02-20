
let login = prompt("What is your username ?");
let password = "TheMaster";

if (login === "Admin") {
  prompt("Enter you password");
  if (password) {
    alert("Welcome");
  }else if (!(password && "")){
    alert("Wrong password");
  }else {
    alert("Cancelled");
  }
  
}else if(login === ("" || null )) {
  alert("Cancelled");
}else {
  alert("I don't know you");
}


// correction 
/*
let userLogin = prompt("What is your username?");
let userPassword;

if (userLogin === "Admin") {
  userPassword = prompt("Enter your password");

  if (userPassword === "TheMaster") {
    alert("Welcome!");
  } else if (userPassword === null || userPassword === "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userLogin === null || userLogin === "") {
  alert("Canceled");
} else {
  alert("I don't know you");
}
*/