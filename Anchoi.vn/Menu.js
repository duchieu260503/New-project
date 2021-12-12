let bag = [];
localStorage.setItem('prd',  JSON.stringify(bag));

var add_cart = document.getElementsByClassName("buttonv2");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement;
    var img = product.getElementsByClassName("div1")[0].src
    console.log(img)
    var title = product.getElementsByClassName("nameText")[0].innerText
    console.log(title)
    var price = product.getElementsByClassName("price")[0].innerText.match(/(\d+)/);
    console.log(price)
    addItemToCart(title, price, img)
    
  })
}

function addItemToCart(title, price, img) {
    let obj = {
        title1: title,
        price1: price,
        img1: img,
        quantity: 1
    };

    if (!localStorage.getItem('prd')) {
        localStorage.setItem('prd', JSON.stringify([]));
    }
    let temp = JSON.parse(localStorage.getItem('prd'));
    let isDuplicate = false
    temp.forEach((item) => {
        if (item['title1'] === obj['title1']) {
            item['quantity']++
            isDuplicate = true
            alert('The product has been added to cart')
            return false
        }
    })
    if (!isDuplicate) {
        temp.push(obj);
        alert('The product has been added to cart')
    }

    localStorage.setItem('prd', JSON.stringify(temp));

    console.log(JSON.parse(localStorage.getItem('prd')));

}



