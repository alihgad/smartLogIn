var box = document.querySelector("#box")
var users = JSON.parse(localStorage.getItem("users")),
login = JSON.parse(localStorage.getItem("login")),
logout = document.querySelector("#logout"),
signout =  document.querySelector("#signout")

for(let i=0;i<users.length;i++){
    if(login == users[i].email){
        box.innerHTML = `Welcome , ${users[i].name}`
    }else{
        box.innerHTML = `please <a href="./index.html" class="text-decoration-none">login</a>`
    }
}

logout.addEventListener("click",function(){
    localStorage.removeItem("login")
})

signout.addEventListener("click",function(){
    signOut()
})

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }






