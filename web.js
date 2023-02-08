const btn = document.querySelectorAll("button")
console.log(btn)
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("h3").innerText
            var productPrice = product.querySelector("span").innerText
            addcart(productPrice, productImg, productName)

        }
    })

})
function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")

    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".tittle")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr class="mauchu"><td class="td1"><img style="width: 140px;" src="' + productImg + '" alt=""><span class="tittle">' + productName + '</span></td><td><p> <span class="prices"> ' + productPrice + '</span></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor:pointer"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")

    cartTable.append(addtr)
    carttotal()
    deleteCart()

}
//-------------totalprice--------------///
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA = inputValue * productPrice * 1000
        totalC = totalC + totalA
        // totalD = totalC .toLocaleString('de-DE')
    }
    var carttotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}
//-------------delete cart--------------///
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
        })
    }
}
function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function () {
            carttotal()
        })
    }
}
const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".fa-shop")
cartshow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0"

})
cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100"

})
//register//
var mua = document.getElementById("mua")
var cuoi = document.getElementsByClassName("button-cuoi")[0]
var product = document.querySelectorAll(".product-items")
console.log(product)
mua.addEventListener("click", () => {
    cuoi.style.display = "initial";
    for (i of product) {
        i.style.justifyContent = "flex-start"
    }
})


