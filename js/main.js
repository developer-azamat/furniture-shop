const parentProduct = document.querySelector('#parentProduct')
const inputSearch = document.querySelector('#nameOf')
const inputForm = document.querySelector('#nameOfForm')
const forPro = document.querySelector('#forPro')
const loader = document.querySelector('.loader')

setTimeout(() => {
    loader.classList.add("hidden")
}, 2000);


const products = [
    {
        id: 1,
        img : "./images/1.svg",
        name : "Sofa",
        price : 200,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 2,
        img : "./images/2.svg",
        name : "Bed",
        price : 250,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 3,
        img : "./images/3.svg",
        name : "Mebel",
        price : 250,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 4,
        img : "./images/4.svg",
        name : "Sofass",
        price : 250,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 5,
        img : "./images/5.svg",
        name : "Beatiful room",
        price : 2500,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 6,
        img : "./images/6.svg",
        name : "Keyboard",
        price : 250,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 7,
        img : "./images/7.svg",
        name : "Performances",
        price : 250,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 8,
        img : "./images/8.svg",
        name : "Furniture Room",
        price : 250,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Mebel'
    },
    {
        id: 9,
        img : "./images/9.webp",
        name : "Super Car",
        price : 2500,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Car'
    },
    {
        id: 10,
        img : "./images/10.webp",
        name : "Mclaren",
        price : 3500,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Car'
    },
    {
        id: 11,
        img : "./images/11.webp",
        name : "Range Rover",
        price : 5500,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Car'
    },
    {
        id: 12,
        img : "./images/12.webp",
        name : "Acer",
        price : 600,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Laptop'
    },
    {
        id: 13,
        img : "./images/13.jpg",
        name : "Acer",
        price : 600,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Laptop'
    },
    {
        id: 14,
        img : "./images/14.jpg",
        name : "Asus Rog",
        price : 900,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Laptop'
    },
    {
        id: 15,
        img : "./images/15.webp",
        name : "Macbook",
        price : 2000,
        description : "It is a long estiabs lished fact that a reader will be the service.",
        category : 'Laptop'
    },
]

products.forEach(element =>{
    setTimeout(()=>{
        loader.classList.remove("hidden")
        loader.classList.add("hidden")
    },1000)

    const {img, name, price, description, category, id} = element;

    parentProduct.innerHTML += `
    <div class="w-[300px] border-gray-500 bg-[#F9F9F9] shadow-lg shadow-gray-500 hover:shadow-2xl border-none px-2 py-4 rounded-lg overflow-hidden hover:shadow-[skyblue] transition-all">
        <img  src=${img} alt="" id="image-prod" class="w-[100%] h-[50%] object-cover cursor-pointer">
        <div class="flex justify-between text-[#373737] text-lfont-semibold py-2">
            <p id="name" class="font-semibold text-2xl text-red-500">${name}</p>
            <p class="font-semibold text-2xl text-cyan-500">$ ${price}</p>
        </div>
        <p class="text-[#696161] py-3"> ${description}</p>
        <p class="pb-2 text-[#696161]" id="categr">Category : ${category}</p>
        <button onclick="AddForm(${id - 1 })" class="py-2 px-4 bg-[#373737] rounded-md text-white hover:opacity-70 transition-colors">Order Now</button>
    </div>
    `
})
const fixedEl = document.getElementsByClassName("fixedEl")[0];

fixedEl.addEventListener('click', (e)=>{
    console.log();
    const target = e.target.classList.contains("fixedEl")

    if(target){
        clickme()
    }
})


function myFunc (){
    inputSearch.addEventListener("input", () => {
        
        const search = inputSearch.value.toLowerCase().trim()
    
          parentProduct.childNodes.forEach(el=>{
                if(el.className) {
                  let itemName = el.querySelector('#name').textContent.toLowerCase()
                  if (!itemName.includes(search)){
                      el.classList.add('hidden')
                  } else {
                      el.classList.remove('hidden')
                  }
                }
            })
    })
}
myFunc()
inputForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const search = inputSearch.value.toLowerCase().trim()
    loader.classList.remove("hidden")
    
    setTimeout(()=>{

        parentProduct.childNodes.forEach(el=>{
            if(el.className) {
              let itemName = el.querySelector('#name').textContent.toLowerCase()
              if (!itemName.includes(search)){
                  el.classList.add('hidden')
              } else {
                  el.classList.remove('hidden')
              }
            }
        })
  

    loader.classList.add("hidden")
    
    },600)
    
})

function AddForm(idx){
    loader.classList.remove("hidden")
    // forPro.parentElement.classList.remove("activePro")
    forPro.parentElement.classList.remove("-top-[100%]")

    let {img, price, description, name, category} = products[idx]

    forPro.innerHTML = `
    <img src=${img} alt="" id="image-prod" class="w-[50%] h-[500px] object-cover cursor-pointer">
            
        <div class="text-lg text-[#373737] flex flex-col justify-between gap-3">
                    <p id="name" class="font-semibold text-2xl text-red-500"><b>Name of product : </b> ${name}</p>
                    <p class="font-semibold text-2xl text-cyan-500"><b>Price : </b> $ ${price}</p>
                <p class="text-[#696161] py-3"><b>Description: </b> ${description}</p>
                <p class="pb-2 text-[#696161]"><b>Category : </b> ${category} </p>
                <p class="pb-2 text-[#696161]"><b>About of product : </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, cupiditate ipsam odit, voluptatum consequatur consequuntur sit a molestiae repudiandae corporis facere porro quam atque officiis! Aliquid obcaecati reprehenderit eius! </p>
                <button onclick="clickme()" class="py-2 mt-10 px-4 bg-[#373737] rounded-md text-white hover:opacity-70 transition-colors">Order Now</button>
        </div>
    `
    loader.classList.add("hidden")

}

function clickme(){
    forPro.parentElement.classList.add("-top-[100%]")
}
const changeOrder = document.querySelector("#select")

changeOrder.addEventListener("change", () => {
    
    const search = changeOrder.value

    parentProduct.childNodes.forEach(el=>{
        if(el.className){
         const categr = el.querySelector("#categr").textContent
         if(changeOrder.value == "All"){
             el.classList.remove('hidden')
         } else if (!categr.includes(search)) {
             el.classList.add('hidden')
         } else {
            el.classList.remove('hidden')
         }
        }
    })

})




//   if(el.className) {
//     let itemName = el.querySelector('#name').textContent.toLowerCase()
//     if (!itemName.includes(search)){
//         el.classList.add('hidden')
//     } else {
//         el.classList.remove('hidden')
//     }
//   }