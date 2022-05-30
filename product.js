menstock = [
    {name: "Classic Trousers",price: "70.00", pic: "shop1.jpg",id:"001"},
    {name: "Formal Trousers",price: "70.00", pic: "shop1.jpg",id:"002"},
    {name: "Cargo Shorts",price: "50.00", pic: "shop1.jpg",id:"003"},
    {name: "Drawstring Shorts",price: "50.00", pic: "shop1.jpg",id:"004"},
    {name: "Slim-Leg Shorts",price: "50.00", pic: "shop1.jpg",id:"005"},
    {name: "Baseball Cap",price: "30.00", pic: "shop1.jpg",id:"006"}
    ]

womenstock = [
    {name: "Long Hoodie",price: "100.00", pic: "shop1.jpg",id:"0001"},
    {name: "Cotton Sweartshirt",price: "70.00", pic: "shop1.jpg",id:"0002"},
    {name: "Crop Hoodie",price: "60.00", pic: "shop1.jpg",id:"0003"},
    {name: "Soft Knit Cardigan",price: "75.00", pic: "shop1.jpg",id:"0004"},
    {name: "Pink Cardigan",price: "75.00", pic: "shop1.jpg",id:"0005"},
    {name: "Drawstring Hoodie",price: "80.00", pic: "shop1.jpg",id:"0006"},
    {name: "Sequin Jumpsuit",price: "100.00", pic: "shop1.jpg",id:"0007"}
    ]


let menCard = document.getElementById("men")
let womenCard = document.getElementById("women")


menstock.forEach(element => {
    let cardmain = document.createElement("div");
        cardmain.classList.add("cardmain");

    let picture = document.createElement("div")
        picture.classList.add("picture")
        let image = document.createElement("img")
        image.setAttribute("src",element.pic)
    picture.appendChild(image)

    let info = document.createElement("div")
        info.classList.add("info")
        info.classList.add(element.id)
        let nameofitem = document.createElement("span")
            nameofitem.classList.add("n")
            nameofitem.innerHTML = element.name
        let priceofitem = document.createElement("span")
            priceofitem.innerHTML = "₵"+element.price
    info.appendChild(nameofitem)
    info.appendChild(priceofitem)

    let buttt = document.createElement("div")
        buttt.classList.add("button")
        let clickbutton = document.createElement("button")
            clickbutton.setAttribute("onclick","addtocart(this.id)")
            clickbutton.setAttribute("id",element.id)
            clickbutton.innerHTML = "add to cart"
    buttt.appendChild(clickbutton)

    cardmain.appendChild(picture)
    cardmain.appendChild(info)
    cardmain.appendChild(buttt)
    menCard.appendChild(cardmain)

})

womenstock.forEach(element => {
    let cardmain = document.createElement("div");
        cardmain.classList.add("cardmain");

    let picture = document.createElement("div")
        picture.classList.add("picture")
        let image = document.createElement("img")
        image.setAttribute("src",element.pic)
    picture.appendChild(image)

    let info = document.createElement("div")
        info.classList.add("info")
        info.classList.add(element.id)
        let nameofitem = document.createElement("span")
            nameofitem.classList.add("n")
            nameofitem.innerHTML = element.name
        let priceofitem = document.createElement("span")
            priceofitem.innerHTML = "₵"+element.price
    info.appendChild(nameofitem)
    info.appendChild(priceofitem)

    let buttt = document.createElement("div")
        buttt.classList.add("button")
        let clickbutton = document.createElement("button")
            clickbutton.setAttribute("onclick","addtocart(this.id)")
            clickbutton.setAttribute("id",element.id)
            clickbutton.innerHTML = "add to cart"
    buttt.appendChild(clickbutton)

    cardmain.appendChild(picture)
    cardmain.appendChild(info)
    cardmain.appendChild(buttt)
    womenCard.appendChild(cardmain)

})






let priceofItems = new Array()
function totalPrice(){
    sum = 0
    priceofItems.forEach(element => {
        sum += element
    });

    document.getElementById("total").innerText = "₵"+sum.toFixed(2)
}
function del(id){
    const cartt = document.getElementsByClassName(id)
    let toremove = cartt[1].childNodes[1].innerText
    const ind = priceofItems.indexOf(parseFloat(toremove.substring(1)))
    if(ind > -1){
        priceofItems.splice(ind,1)
    } 
    totalPrice()
    cartt[1].parentNode.removeChild(cartt[1])
    document.getElementById(id).disabled = false;
}


let first = true

function addtocart(id){
    let noI = document.getElementsByClassName(id)[0].childNodes[0].innerText
    let poI = document.getElementsByClassName(id)[0].childNodes[1].innerText
    priceofItems.push(parseFloat(poI.substring(1)))
    totalPrice()


    let insidecart = document.getElementById("cart-items");
    if (first){
        insidecart.innerHTML = "";
        first = false;
    }
    let item = document.createElement("div");
    item.classList.add("item");
    item.classList.add(id);
    item.setAttribute("id",id)

    let itemName = document.createElement("span");
    itemName.classList.add("item-name");
    itemName.innerHTML = noI;

    let price = document.createElement("span");
    price.classList.add("price");
    price.innerHTML = poI;

    let but = document.createElement("button");
    but.innerHTML = "remove";
    but.classList.add(id)
    but.setAttribute("onclick","del(this.getAttribute('class'))")

    item.appendChild(itemName)
    item.appendChild(price)
    item.appendChild(but)
    insidecart.appendChild(item)
    document.getElementById(id).disabled = true;
}

