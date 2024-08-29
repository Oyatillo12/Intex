let elKarkasTitle = document.querySelector(".karkas-title")
let elNaduvTitle = document.querySelector(".naduv-title")
let dataUser = JSON.parse(localStorage.getItem("Logindata"))
let UserName = document.querySelector(".user-name")

let elValueAdd = document.querySelector(".add-product")
let elAddmodal = document.querySelector(".modal-add")
let productsList = document.querySelector(".pools")
let elModalInner = document.querySelector(".modal-inner")


let elPopover = document.querySelector(".popap-list")
let elSearchInput = document.querySelector(".search-input")

UserName.innerHTML = dataUser.username;

let products = JSON.parse(localStorage.getItem("products")) || []



elKarkasTitle.addEventListener("click",function(){
    elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
    elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
    Renderproducts(products, "1")
})
elNaduvTitle.addEventListener("click",function(){
    elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
    elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
    Renderproducts(products, "2")

})



elValueAdd.addEventListener("click", function(){
    elAddmodal.classList.remove("hidden")
    elModalInner.innerHTML = `
        <button class="close-modal absolute top-[41px] right-[40px]">
                <img src="./images/close.svg" alt="close img" width="38" height="38">
        </button>
            <form class="product-form flex flex-col items-center">
                <label class="mx-auto">
                    <input required autocomplete="off" class="add-img hidden" type="file" name="addimg">
                    <img class="cursor-pointer mx-auto empty-img object-cover" src="./images/empty-img.png" alt="add image" width="491" height="116">
                </label>
                <div class="flex items-center justify-between mt-6 flex-wrap space-y-[8px]">
                    
                    <label class="categories flex flex-col ">
                        <span class="text-[16px] leading-[26px] text-[#898989]">Категории</span>
                        <div class="flex items-center gap-4">
                            <img src="./images/category.svg" alt="categories img" width="28" height="28">
                            <select class="text-[20px] leading-[25px]  outline-none border-b-[1px] border-b-black w-[300px] py-[6px] bg-transparent" name="categories">
                                <option value="1">Каркасные</option>
                                <option value="2">Надувные</option>
                            </select>
                        </div>
                    </label>
                
                    <label class="quantity flex flex-col ">
                        <span  class="text-[16px] leading-[26px] text-[#898989]">Количество</span>
                        <div class="flex items-center gap-4">
                            <img src="./images/count.svg" alt="count img" width="28" height="28">
                            <input class="outline-none text-[20px] leading-[25px]  border-b-[1px] border-b-black w-[300px] py-[6px] bg-transparent" type="number" autocomplete="off" name="amount" >
                        </div>
                    </label>
                    <label class="oldprice flex flex-col ">
                        <span  class="text-[16px] leading-[26px] text-[#898989]">Стартая цена (сум) </span>
                        <div class="flex items-center gap-4">
                            <img src="./images/price.svg" alt="count img" width="31" height="28">
                            <input class="outline-none border-b-[1px] text-[20px] leading-[25px] border-b-black w-[300px] py-[6px] bg-transparent" type="number" autocomplete="off" name="oldprice" >
                        </div>
                    </label>
                    <label class="newprice flex flex-col ">
                        <span  class="text-[16px] leading-[26px] text-[#898989]">Цена со скидкой (сум) </span>
                        <div class="flex items-center gap-4">
                            <img src="./images/price.svg" alt="count img" width="31" height="28">
                            <input class="outline-none border-b-[1px] text-[20px] leading-[25px] border-b-black w-[300px] py-[6px] bg-transparent" type="number" autocomplete="off" name="newprice" >
                        </div>
                    </label>
                    <label class="frame flex flex-col ">
                        <span class="text-[16px] leading-[26px] text-[#898989]">Категории</span>
                        <div class="flex items-center gap-4">
                            <img src="./images/frame.svg" alt="frame img" width="28" height="28">
                            <select class="outline-none text-[20px] leading-[25px] border-b-[1px] border-b-black w-[300px] py-[6px] bg-transparent" name="productFrame">
                                <option value="Металлический">Металлический</option>
                                <option value="Прямоугольная">Прямоугольная</option>
                                <option value="Рамка призмы">Рамка призмы</option>
                            </select>
                        </div>
                    </label>
                </div>
                <button class="add-btn w-[300px] text-white py-[15px] mx-auto bg-[#3F8C8E] mt-8 text-[25px] font-bold leading-[29px] rounded-[25px]" type="submit">Добавить</button>
            </form>
    `
    let elProdcutForm = document.querySelector(".product-form")
    elProdcutForm.addEventListener("submit", function(e){
        e.preventDefault()
        let data = {
            id:products.length ? products[products.length - 1].id + 1 : 1,
            categoryID:e.target.categories.value,
            quantify:e.target.amount.value,
            priceOld: e.target.oldprice.value,
            priceNew: e.target.newprice.value,
            frame:e.target.productFrame.value,
            img:emptyImg.src
        }
        products.push(data)
    
        elProdcutForm.lastElementChild.innerHTML =`
            <img class="mx-auto scale-[1]" src="./images/loading-img.png" alt="Loading..." width="40" > `
        
        setTimeout(() =>{
            elAddmodal.classList.add("hidden")
            if(data.categoryID == "1"){
                 elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
                elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
            }
            else {
                elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
                elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
            }
            elProdcutForm.lastElementChild.innerHTML = "Добавить"
            Renderproducts(products, data.categoryID)
        }, 1000)
    
    })

    let elAddimg = document.querySelector(".add-img")
    let emptyImg = document.querySelector(".empty-img")
    let closeModal = document.querySelector(".close-modal")

    elAddimg.addEventListener("change", function(e){
        emptyImg.src = URL.createObjectURL(e.target.files[0])
    })
    
    closeModal.addEventListener("click", () =>  elAddmodal.classList.add("hidden"))
})
elAddmodal.addEventListener("click", function(e){
    if(e.target.classList.contains("modal-add")){
        elAddmodal.classList.add("hidden")
    }
})


 function Renderproducts(arr, categoryID){
    productsList.innerHTML = null
    let filteredProducts = arr.filter(item => item.categoryID == categoryID)
    filteredProducts.forEach(item => {
        let elItemPools = document.createElement("li");
        elItemPools.className= "rounded-[30px] bg-white py-[14px] pl-[43px] pr-[40px] flex items-center justify-between"
        elItemPools.innerHTML = `
            <img class="object-cover" src="${item.img}" alt="pool img" width="110" height="41" >
           <div >
                <span class="text-[15px] leading-[18px] text-[#A6A6A6] relative before:absolute before:w-full before:h-[1px] before:bg-[#FF0000] before:m-auto before:inset-0 before:rotate-[6deg]">${item.priceOld}</span>
                <span class="block text-[20px] leading-[25px] font-bold  ">${item.priceNew}</span>
            </div>
                                
            <span class="text-[20px] leading-[35px]">${item.quantify}</span>
            <p class="text-center text-[20px] leading-[35px]">${item.frame}</p>
            <div class="flex items-center gap-[21px] ">
                <button >
                    <img onclick="handleUpdate(${item.id})" class="hover:scale-[1.3] duration-300" src="./images/edit.svg" alt="edit img" width="20" height="20">
                </button> 
                <button onclick="handleDeleteProducts(${item.id})" >
                    <img class="hover:scale-[1.3] duration-300" src="./images/delete.svg" alt="delete img" width="20" height="23">
                </button>               
            </div>
        `
        productsList.appendChild(elItemPools)
        
    
    })
    localStorage.setItem("products", JSON.stringify(products))
 }
 Renderproducts(products, "1")

 function handleDeleteProducts(id){
    
    console.log(id);
    
    elAddmodal.classList.remove("hidden")
    elModalInner.className = "modal-inner bg-[#F8F8F8] rounded-xl px-[20px] py-[20px] shadow-2xl relative"
    elModalInner.innerHTML = `
        <p class="text-[25px] font-semibold leading-[33px]">Вы уверены, что хотите удалить этот продукт?</p>
        <div class="flex justify-between gap-[15px] mt-[15px]">
            <button onclick="handleCancel()" class="bg-[#FF0000] hover:opacity-70 text-[#FFFFFF] py-[13px] w-[48%] rounded-[5px] font-semibold">Отмена</button>
            <button onclick="handledeleteYes(${id})"  class="bg-[#009398] hover:opacity-70 text-[#FFFFFF] py-[13px] w-[48%] rounded-[5px] font-semibold" onclick="deleteProduct()">Удалить</button>
        </div>
    `
 }

 function handledeleteYes(id){
    const findedIndex = products.findIndex(item => item.id == id)
    const findedObj= products.find(item => item.id == id)
    products.splice(findedIndex, 1)
    elAddmodal.classList.add("hidden")
    Renderproducts([...products], findedObj.categoryID)
    localStorage.setItem("products", JSON.stringify(products))
 }

 function handleCancel(){
    elAddmodal.classList.add("hidden")
 }

//  Search  part start
elSearchInput.addEventListener("input",function(e){
     elPopover.innerHTML = null
     
    const filteredProducts = products.filter(item => item.priceNew.includes(e.target.value));
    console.log(filteredProducts);
    
    if(e.target.value && filteredProducts.length){
        elPopover.classList.remove("h-0")
        elPopover.classList.remove("p-0")
        elPopover.classList.add("p-2")
        filteredProducts.forEach((item, index) =>  {
            let elPopoverItem = document.createElement("li");
            elPopoverItem.id = item.id
            elPopoverItem.className = "text-white  py-2 px-3 rounded-xl font-bold hover:bg-white hover:text-[#009398]"
            elPopoverItem.innerHTML = `
                <span id="${item.id}">${index + 1}.</span>
                <strong id="${item.id}">${item.categoryID == "1" ? "Каркасные" :"Надувные"} -</strong>
                <span id="${item.id}">${item.priceNew}</span>
            `
            elPopover.appendChild(elPopoverItem)

            elPopoverItem.addEventListener("click", function(e){
                
                let findedProduct = products.find(item => item.id == e.target.id)
                elSearchInput.value = `${findedProduct.id}.${findedProduct.categoryID == "1" ? "Каркасные" :"Надувные"}-${findedProduct.priceNew}`
                Renderproducts([findedProduct], findedProduct.categoryID)
                if(findedProduct.categoryID == "1"){
                    elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
                   elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
                }
               else {
                   elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
                   elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
               }
            })
        })
    }
    else{
        elPopover.classList.add("h-0")
        elPopover.classList.add("p-0")
        elPopover.classList.remove("p-2")
    }
})
elSearchInput.addEventListener("blur", function(){
    setTimeout(() => {
     elPopover.classList.add("h-0")
    elPopover.classList.add("p-0")
    elPopover.classList.remove("p-2")
    }, 400)
    
})
//  Search  part end

// logut part start

function handleLogut(){
    elAddmodal.classList.remove("hidden")
    elModalInner.className = "modal-inner bg-[#F8F8F8] rounded-xl px-[20px] py-[20px] shadow-2xl relative"
    elModalInner.innerHTML = `
        <p class="text-[25px] font-semibold leading-[33px]">Вы уверены, что хотите выйти из системы?</p>
        <div class="flex justify-between gap-[15px] mt-[15px]">
            <button onclick="handleCancel()" class="bg-[#FF0000] hover:opacity-70 text-[#FFFFFF] py-[13px] w-[48%] rounded-[5px] font-semibold">Отмена</button>
            <button onclick="handledeLogoutYes()"  class="bg-[#009398] hover:opacity-70 text-[#FFFFFF] py-[13px] w-[48%] rounded-[5px] font-semibold" onclick="deleteProduct()">Удалить</button>
        </div>
        `
}

function handledeLogoutYes(){
    setTimeout(() => {
        localStorage.clear()
        location.pathname = "/"
    },300)
}


// logut part end

// edit Modal 




