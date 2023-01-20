// TRANSPORTATION

var a = document.querySelector("#trans-from-airport-to-house");
var b = document.querySelector("#trans-from-house-to-airport");
var c = document.querySelector("#trans-to-relative");
var d = document.querySelector("#trans-for-departure");

// SECURITY

var e = document.querySelector("#security");

// cart total elements
var total = document.querySelector("#total");
var transTotalTag = document.querySelector("#trans-total");

var cartTotal = 10;
var transTotal = 0;
var secTotal = 0;

// Airport to House Event Listener
a.addEventListener("change", function () {
    if (this.checked) {
        cartTotal += Number(this.value);
        transTotal += Number(this.value);
    } else {
        cartTotal -= Number(this.value);
        transTotal -= Number(this.value);
    }
    transTotalTag.textContent = transTotal;
    total.textContent = cartTotal;
})

// House to Airport Event Listener
b.addEventListener("change", function () {
    if (this.checked) {
        cartTotal += Number(this.value);
        transTotal += Number(this.value);
    } else {
        cartTotal -= Number(this.value);
        transTotal -= Number(this.value);
    }
    transTotalTag.textContent = transTotal;
    total.textContent = cartTotal;
})

c.addEventListener("change", function () {
    if (this.checked) {
        cartTotal += Number(this.value);
        transTotal += Number(this.value);
    } else {
        cartTotal -= Number(this.value);
        transTotal -= Number(this.value);
    }
    transTotalTag.textContent = transTotal;
    total.textContent = cartTotal;
})

d.addEventListener("change", function () {
    if (this.checked) {
        cartTotal += Number(this.value);
        transTotal += Number(this.value);
    } else {
        cartTotal -= Number(this.value);
        transTotal -= Number(this.value);
    }
    transTotalTag.textContent = transTotal;
    total.textContent = cartTotal;
})
