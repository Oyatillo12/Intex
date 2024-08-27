let elLoginForm = document.querySelector(".login-form")
let elSubmitBtn = elLoginForm.lastElementChild
const isRegister = JSON.parse(localStorage.getItem("isregister"))
elLoginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        username: e.target.username.value,
        userpassword: e.target.userpassword.value
    }
 
    if(isRegister) {
        if(data.username == isRegister.newname && data.userpassword == isRegister.newpassword) {
            elSubmitBtn.innerHTML = `
                <img class="mx-auto scale-[1.3]" src="./images/loading-img.png" alt="Loading..." width="40" > `
                localStorage.setItem("Logindata", JSON.stringify(data))
            setTimeout(() => location.pathname = "../../admin.html", 1000)
        }
        else{
            alert("Togri kiriting...")
        }  
    }
    else{
         if(data.username == "oyatillo" && data.userpassword == "123"){
        elSubmitBtn.innerHTML = `
            <img class="mx-auto scale-[1.3]" src="./images/loading-img.png" alt="Loading..." width="40" >`
            localStorage.setItem("Logindata", JSON.stringify(data))
            setTimeout(() => location.pathname = "../../admin.html", 1000)
        }
        else{
            alert("Togri kiriting...")
        }
    }

   
})