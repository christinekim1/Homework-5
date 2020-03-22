function changeImage() {

    document.getElementById("add").src = "added.png";
    document.getElementById('cart').src = 'addedToCart.png';
}

function changeSize() {
    if(document.getElementById('less').getAttribute('src')== 'small.png'){
        document.getElementById('less').src = 'med.png';
    }
    else if(document.getElementById('less').getAttribute('src')== 'med.png'){
        document.getElementById('less').src = 'large.png';
    }
    else if(document.getElementById('less').getAttribute('src')== 'large.png'){
        document.getElementById('less').src = 'xl.png';
    }
    else if(document.getElementById('less').getAttribute('src')== 'xl.png'){
        document.getElementById('less').src = 'small.png';
    }
}

function decrementValueThird()
{
    var value = parseInt(document.getElementById('amountThird').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0){
        value = 0;
    }
    document.getElementById('amountThird').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('checkoutThird').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    var price = value * (45);
    document.getElementById('priceThird').innerHTML = '$' +price+ '.99';
    if (value == 0){
        document.getElementById('priceThird').innerHTML = '$' + price;
    }
    updateSubtotal();

}

function incrementValueThird()
{
    var value = parseInt(document.getElementById('amountThird').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('amountThird').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('checkoutThird').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';

    var price = value * (45);
    document.getElementById('priceThird').innerHTML = '$' + price + '.99';
    updateSubtotal();

}