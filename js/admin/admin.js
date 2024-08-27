let elKarkasTitle = document.querySelector(".karkas-title")
let elNaduvTitle = document.querySelector(".naduv-title")
let dataUser = JSON.parse(localStorage.getItem("Logindata"))
let UserName = document.querySelector(".user-name")

UserName.innerHTML = dataUser.username;

const pools = [
    {
        id: 1,
        img: "./images/pool-1.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 10,
        type: "Металлический",
        width:"110",
        height:"41",
    },
    {
        id: 2,
        img: "./images/pool-1.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 7,
        type: "Металлический",
        width:"110",
        height:"41",
    },
    {
        id: 3,
        img: "./images/pool-1.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 7,
        type: "Металлический",
        width:"110",
        height:"41",
    },
    {
        id: 4,
        img: "./images/pool-2.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 10,
        type: "Прямоугольная",
        width:"108",
        height:"49",
    },
    {
        id: 5,
        img: "./images/pool-2.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 10,
        type: "Прямоугольная",
        width:"108",
        height:"49",
    },
    {
        id: 6,
        img: "./images/pool-3.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 10,
        type: "Рамка призмы",
        width:"89",
        height:"55",
    },
    {
        id: 7,
        img: "./images/pool-4.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 10,
        type: "Прямоугольная",
        width:"99",
        height:"54",
    },
    {
        id: 8,
        img: "./images/pool-3.png",
        priceOld: "1,800,000",
        priceNew: "1,520,000",
        size: 10,
        type: "Рамка призмы",
        width:"89",
        height:"55",
    }
];



elKarkasTitle.addEventListener("click",function(){
    elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
    elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
})
elNaduvTitle.addEventListener("click",function(){
    elNaduvTitle.className = "naduv-title font-bold text-[35px] text-[#009398] pb-[8px] border-b-[3px] border-b-[#009398] leading-[40px]"
    elKarkasTitle.className = "karkas-title font-bold text-[35px] text-[#A6A6A6] pb-[8px] border-b-[3px] border-b-transparent leading-[40px]"
})


function rederPools(arr){

    arr.map(item => {
        let elItemPools = document.createElement("li");
        elItemPools.className= "rounded-[30px] bg-white py-[14px] pl-[43px] pr-[40px] flex items-center justify-between"
        elItemPools.innerHTML = `
            <img class="object-cover" src="${item.img}" alt="pool img" width="110" height="41" >
           <div >
                <span class="text-[15px] leading-[18px] text-[#A6A6A6] relative before:absolute before:w-full before:h-[1px] before:bg-[#FF0000] before:m-auto before:inset-0 before:rotate-[6deg]">${item.priceOld}</span>
                <span class="block text-[20px] leading-[25px] font-bold  ">${item.priceNew}</span>
            </div>
                                
            <span class="text-[20px] leading-[35px]">${item.size}</span>
            <p class="text-center text-[20px] leading-[35px]">${item.type}</p>
            <div class="flex items-center gap-[21px] ">
                <img src="./images/edit.svg" alt="edit img" width="16.5" height="16.5">
                <img src="./images/delete.svg" alt="delete img" width="16" height="19">
            </div>
        `
        document.querySelector(".pools").appendChild(elItemPools)
    })
}rederPools(pools)