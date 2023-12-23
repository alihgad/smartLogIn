var inemail = document.querySelector("#inemail"),
    inpassword = document.querySelector("#inpassword"),
    inbutton = document.querySelector("#inbutton"),
    user = JSON.parse(localStorage.getItem("user")),
    eye = document.querySelector("#eye"),
    users = JSON.parse(localStorage.getItem("users"))

    
    inbutton.addEventListener("click",function(e){
        logIn()
    })

    document.addEventListener("keyup",function(e){
        if(e.key=="Enter"){
            logIn() 
        }
    })


    function logIn(){
        if (users){
            var loginStatus = false
            for(let i =0 ; i<users.length; i++){
                if(inemail.value == users[i].email  ){
                    loginStatus = true
                    if(inpassword.value.toLowerCase() == users[i].password){
                        localStorage.setItem("login",JSON.stringify(inemail.value))
                        inbutton.setAttribute("href","home.html")
                        if( window.location.pathname == "smartLogIn/index.html"){
                        window.location.pathname = "smartLogIn/home.html"
                        }else{
                            window.location.pathname = "/home.html"
                        }     
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "password is incorrect",
                        });
                    }
                }
                }
    
        
        
            if(loginStatus == false){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "email or password is incorrect",
                });
            }
        
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'theres no data',
                footer : '<p class="fs-6 text-capitalize fe-bold">please <a class="text-decoration-none" href="sign-up.html">signup</a> first</p>'
              });
        }
    }

    eye.addEventListener("click",function(){
        inpassword.toggleAttribute("type")
        setTimeout(pass,500)
    })
    
    function pass(){
        inpassword.setAttribute("type","password")
    }






