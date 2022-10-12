import { data } from "./data.js";

let featuredSection = document.getElementsByClassName("featured")[0].getElementsByClassName("grid");
let names = document.getElementsByClassName("featured")[0]
let i2 = document.getElementsByClassName('i2')
let popular = document.getElementsByClassName('popular')[0].children


for (let i = 0; i < featuredSection.length; i++) {
  featuredSection[i].children[0].attributes[0].value = `${Object.entries(data)[i][1].img}`;
    names.children[i].getElementsByTagName('h2')[0].textContent = `${Object.entries(data)[i][1].name}`;
    names.children[i].getElementsByTagName('h4')[0].textContent = `${Object.entries(data)[i][1].price}`;
    featuredSection[i].getElementsByTagName('button')[0].addEventListener('click' , clicked)
}

function clicked(event){
    if (event.target.innerText == 'Cart'){
        let parent = event.target.parentElement.parentElement
        let productInfo = []
        productInfo.push(parent.children[0].src)
        productInfo.push(parent.children[1].children[0].innerText)
        window.location.href = 'cart.html'
    }
    if (event.target.innerText == 'Add to Cart'){
        let parent = event.target.parentElement.parentElement
        let productInfo = []
        productInfo.push(parent.children[0].src)
        productInfo.push(parent.children[1].children[0].innerText)
        window.location.href = 'cart.html'
    }
}
for (let i = 6; i < (popular.length + 4); i++) {
    i2[i-6].getElementsByTagName('h3')[0].textContent = `${Object.entries(data)[i][1].name}`;
    i2[i-6].children[0].attributes[0].value = `${Object.entries(data)[i][1].img}`;
    i2[i-6].children[1].children[2].addEventListener('click' , clicked)
}






