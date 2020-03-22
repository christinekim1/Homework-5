function incrementValueFirst()
{
    var value = parseInt(document.getElementById('amountFirst').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('amountFirst').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('checkoutFirst').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';

    var price = value * (45);
    document.getElementById('priceFirst').innerHTML = '$' + price + '.99';
    updateSubtotal();

}


function incrementValueSecond()
{
    var value = parseInt(document.getElementById('amountSecond').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('amountSecond').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('checkoutSecond').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';

    var price = value * (45);
    document.getElementById('priceSecond').innerHTML = '$' + price + '.99';
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

function decrementValueFirst()
{
    var value = parseInt(document.getElementById('amountFirst').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0){
        value = 0;
    }
    document.getElementById('amountFirst').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('checkoutFirst').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';

    var price = value * (45);
    document.getElementById('priceFirst').innerHTML = '$' + price + '.99';
    if (value == 0){
        document.getElementById('priceFirst').innerHTML = '$' + price;
    }
    updateSubtotal();

}

function decrementValueSecond()
{
    var value = parseInt(document.getElementById('amountSecond').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0){
        value = 0;
    }
    document.getElementById('amountSecond').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById('checkoutSecond').innerHTML = value + '&nbsp;&nbsp;&nbsp;&nbsp;';
    var price = value * (45);
    document.getElementById('priceSecond').innerHTML = '$' +price+ '.99';
    if (value == 0){
        document.getElementById('priceSecond').innerHTML = '$' + price;
    }

    updateSubtotal();
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

function updateSubtotal(){
    var valueFirst = parseInt(document.getElementById('amountFirst').innerHTML, 10);
    var valueSecond = parseInt(document.getElementById('amountSecond').innerHTML, 10);
    var valueThird = parseInt(document.getElementById('amountThird').innerHTML, 10);

    valueFirst = valueFirst*45;
    valueSecond = valueSecond*45;
    valueThird = valueThird*45;


    console.log(valueFirst);
    console.log(valueSecond);
    console.log(valueThird);

    var sub = valueFirst+valueSecond+valueThird;


    document.getElementById('subtotal').innerHTML ='Subtotal: $'+ sub + '.99 &nbsp;&nbsp;&nbsp;&nbsp;';

}
