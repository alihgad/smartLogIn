var upname = document.querySelector("#upname"),
    helpname = document.querySelector("#helpname"),
    upemail = document.querySelector("#upemail"),
    helpemail = document.querySelector("#helpemail"),
    uppassword = document.querySelector("#uppassword"),
    helppassword = document.querySelector("#helppassword"),
    upbutton = document.querySelector("#upbutton"),
    eye = document.querySelector("#eye"),
    users = []

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"))
    }

upbutton.addEventListener("click", function () {
    signUp()

})


document.addEventListener("keyup", function (e) {
    
    if(e.key=="Enter"){
        signUp()
    }
})



function signUp(){
    if (nameValidate() == true && emailValidate() == true && passwordValidate() == true ) {
        if(newEmail() == true){
        var user = {
            name : upname.value,
            email : upemail.value,
            password : uppassword.value.toLowerCase() 
        }
        users.push(user)

        localStorage.setItem("users", JSON.stringify(users))
        upbutton.setAttribute("href", "index.html")
        if( window.location.pathname == "/smartLogIn/sign-up.html"){
            window.location.pathname = "/smartLogIn/"
            }else{
                window.location.pathname = "/index.html"
            } 
        }else{
            Swal.fire({
                icon: "warning",
                title: "Email alerdy exist",
                confirmButtonText: `<a href = 'index.html' class="text-decoration-none text-white">Log in </a> `,
                showCloseButton: true,
                denyButtonText: `try another email`,
                showDenyButton: true,
                buttonStyling : false,
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-info"
                }
            });
        }
    } else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please check your data",
    });
}
}


function nameValidate() {
    var regx = /^[a-z]{3,8}$/ig
    if (regx.test(upname.value)) {
        upname.classList.replace("is-invalid", "is-valid")
        helpname.classList.replace("opacity-100", "opacity-0")
        return true;
    } else {
        helpname.classList.replace("opacity-0", "opacity-100")
        upname.classList.add("is-invalid")
    }

    if (!upname.value) {
        upname.classList.remove("is-invalid")
        upname.classList.remove("is-valid")
        helpname.classList.replace("opacity-100", "opacity-0")
    }

}

upname.addEventListener("input", function () {
    nameValidate()
})


function emailValidate() {
    var regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig;
    if (regx.test(upemail.value)) {
        upemail.classList.replace("is-invalid", "is-valid")
        helpemail.classList.replace("opacity-100", "opacity-0")
        return true;
    } else {
        helpemail.classList.replace("opacity-0", "opacity-100")
        upemail.classList.add("is-invalid")
    }

    if (!upemail.value) {
        upemail.classList.remove("is-invalid")
        upemail.classList.remove("is-valid")
        helpemail.classList.replace("opacity-100", "opacity-0")
    }

}

upemail.addEventListener("input", function () {
    emailValidate()
})




function passwordValidate() {
    var regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/ig
    if (regx.test(uppassword.value)) {
        uppassword.classList.replace("is-invalid", "is-valid")
        helppassword.classList.replace("opacity-100", "opacity-0")
        return true;
    } else {
        helppassword.classList.replace("opacity-0", "opacity-100")
        uppassword.classList.add("is-invalid")
    }

    if (!uppassword.value) {
        uppassword.classList.remove("is-invalid")
        uppassword.classList.remove("is-valid")
        helppassword.classList.replace("opacity-100", "opacity-0")
    }

}

uppassword.addEventListener("input", function () {
    passwordValidate()
})


eye.addEventListener("click", function () {
    uppassword.toggleAttribute("type")
    setTimeout(pass, 500)
})

function pass() {
    uppassword.setAttribute("type", "password")
}


function newEmail(){
    for(let i = 0 ; i < users.length ; i++){
        if(upemail.value == users[i].email){
            return false
        }
    }
    return true
}



