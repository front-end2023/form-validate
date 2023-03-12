let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let userName = id("username"), 
    email = id("email"),
    password = id("password"),
    cPassword = id ("cPassword"),
    form = id("sign-form"),
    checkCircle = classes("fa-circle-check"),
    exclamation = classes("fa-circle-exclamation"),
    error = classes("error"),
    message = "";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (userName.value === ""){
        message = "user name can't be blank";
        error[0].innerHTML = message;
        exclamation[0].style.opacity = "1";
        exclamation[1].style.opacity = "1";
        exclamation[2].style.opacity = "1";
        exclamation[3].style.opacity = "1";
        checkCircle[0].style.opacity = "0";
        
    } else {
        message = "";
        error[0].innerHTML = "";
        exclamation[0].style.opacity = "0";
        checkCircle[0].style.opacity = "1";
    }

    if (email.value === ""){
        message = "email can't be blank";
        error[1].innerHTML = message;
        exclamation[1].style.opacity = "1";
        exclamation[2].style.opacity = "1";
        exclamation[3].style.opacity = "1";
        checkCircle[1].style.opacity = "0";
        
    } else {
        message = "";
        error[1].innerHTML = "";
        exclamation[1].style.opacity = "0";
        checkCircle[1].style.opacity = "1";
    }

    if (password.value === ""){
        message = "password can't be blank";
        error[2].innerHTML = message;
        exclamation[2].style.opacity = "1";
        exclamation[3].style.opacity = "1";
        checkCircle[2].style.opacity = "0";
        
    } else {
        message = "";
        error[2].innerHTML = "";
        exclamation[2].style.opacity = "0";
        checkCircle[2].style.opacity = "1";
    }

    if (cPassword.value !== password.value ){
        message = "password does not mattch";
        error[3].innerHTML = message;
        exclamation[3].style.opacity = "1";
        checkCircle[3].style.opacity = "0";
        
    } else {
        message = "";
        error[3].innerHTML = "";
        exclamation[3].style.opacity = "0";
        checkCircle[3].style.opacity = "1";
    }
});