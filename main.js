let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function formValidate(){
    let userName = id ("username").value, 
        email = id ("email").Value,
        password = id ("password").Value,
        cPassword = id ("cPassword").Value,
        form = id ("sign-form"),
        checkCircle = classes("fa-circle-check"),
        exclamation = classes("fa-circle-exclamation"),
        error = classes("error"),
        message = "";

    
    if (userName === ""){
        message = " user name can't be empty";
        error[0].innerHTML = message;
        exclamation[0].innerHTML.style.opacity = "1";
        return false;
    }
    else {
        alert("done")
        return true;
    }
}