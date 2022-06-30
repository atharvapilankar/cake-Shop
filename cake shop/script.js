let name = localStorage.getItem("name");
let address = localStorage.getItem("Address");
let cake1 = document.getElementById('1');
let cake2 = document.getElementById('2');
let cake3 = document.getElementById('3');
let cake4 = document.getElementById('4');
let cake5 = document.getElementById('5');
let cake6 = document.getElementById('6');
console.log(cake1.textContent);
cake1.addEventListener("click", () => {
    var url = "https://wa.me/917020655614?text=" +
        "Name: " + name + "%0a" +
        "Address: " + address + "%0a" +
        "Order: " + cake1.textContent + "%0a";
    window.open(url, '_blank').focus();

    console.log("clicked");
})
cake2.addEventListener("click", () => {
    var url = "https://wa.me/917020655614?text=" +
        "Name: " + name + "%0a" +
        "Address: " + address + "%0a" +
        "Order: " + cake2.textContent + "%0a";
    window.open(url, '_blank').focus();

    console.log("clicked");
})
cake3.addEventListener("click", () => {
    var url = "https://wa.me/917020655614?text=" +
        "Name: " + name + "%0a" +
        "Address: " + address + "%0a" +
        "Order: " + cake3.textContent + "%0a";
    window.open(url, '_blank').focus();

    console.log("clicked");
})
cake4.addEventListener("click", () => {
    var url = "https://wa.me/917020655614?text=" +
        "Name: " + name + "%0a" +
        "Address: " + address + "%0a" +
        "Order: " + cake4.textContent + "%0a";
    window.open(url, '_blank').focus();

    console.log("clicked");
})
cake5.addEventListener("click", () => {
    var url = "https://wa.me/917020655614?text=" +
        "Name: " + name + "%0a" +
        "Address: " + address + "%0a" +
        "Order: " + cake5.textContent + "%0a";
    window.open(url, '_blank').focus();

    console.log("clicked");
})
cake6.addEventListener("click", () => {
    var url = "https://wa.me/917020655614?text=" +
        "Name: " + name + "%0a" +
        "Address: " + address + "%0a" +
        "Order: " + cake6.textContent + "%0a";
    window.open(url, '_blank').focus();

    console.log("clicked");
})



