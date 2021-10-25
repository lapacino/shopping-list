var plBtn = document.getElementsByClassName("plus-btn");
var mnBtn = document.getElementsByClassName("minus-btn");
var quantBtn = document.getElementsByClassName("Quant");
var deleteBtn = document.getElementsByClassName("delete");
var price = document.getElementsByClassName("price");
var itemCls = document.getElementsByClassName("Item");
var likeBtn = document.getElementsByClassName("like");


var finalPrice = document.getElementById("finalPrice");


// plus botton 
for (let i = 0; i < plBtn.length; i++) {

    plBtn[i].addEventListener('click', function (e) {


        var nbr = parseInt(quantBtn[i].value);
        nbr++;
        quantBtn[i].value = nbr;

        var pr = price[i].innerHTML;
        price[i].innerHTML = (pr / (nbr - 1) * nbr).toPrecision(6);

        Total();
    });

}


// minus button
for (let i = 0; i < mnBtn.length; i++) {

    mnBtn[i].addEventListener('click', function () {

        var nbr = parseInt(quantBtn[i].value);

        var pr = price[i].innerHTML;
        var cNbr = pr / nbr;

        nbr--;
        quantBtn[i].value = nbr;
        price[i].innerHTML = (pr - cNbr).toPrecision(6);

        Total();
    });

}

// delete botton 

for (let i = 0; i < itemCls.length; i++) {

    deleteBtn[i].addEventListener('click', function () {

        itemCls[i].innerHTML = "";
        Total();
    });

}

// like button

for (let i = 0; i < likeBtn.length; i++) {

    likeBtn[i].addEventListener('click', function () {

        likeBtn[i].classList.toggle("red");
        console.log("my color is red");

    });

}




// Total price


function Total() {

    var totalP = 0;

    for (let i = 0; i < price.length; i++) {

        totalP += parseInt(price[i].innerHTML);
    }

    finalPrice.value = totalP;
}

