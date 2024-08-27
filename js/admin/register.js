let elRegister = document.querySelector(".register-form")


elRegister.addEventListener("submit", function(e){
    e.preventDefault()
    const newData = {
        newname: e.target.username.value,
        newpassword: e.target.userpassword.value
    }
    elRegister.lastElementChild.innerHTML = `
        <img class="mx-auto scale-[1.3]" src="./images/loading-img.png" alt="Loading..." width="40" >`
        localStorage.setItem("isregister",JSON.stringify(newData))
    setTimeout(() => location.pathname = "../../index.html", 1000)
})