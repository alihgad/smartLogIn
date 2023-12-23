var box = document.querySelector("#box")
var users = JSON.parse(localStorage.getItem("users")),
login = JSON.parse(localStorage.getItem("login")),
logout = document.querySelector("#logout"),
signout =  document.querySelector("#signout")
var found = false
for(let i=0;i<users.length;i++){
    if(login == users[i].email){
        box.innerHTML = `Welcome , ${users[i].name.toUpperCase()}`
        found = true
    }
}

if(found == false){
    box.innerHTML = `please <a href="./index.html" class="text-decoration-none">login</a>`
    logout.innerHTML = `Log in`
}

logout.addEventListener("click",function(){
    localStorage.removeItem("login")
})







