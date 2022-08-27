function valid(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("ad").value;
    console.log(name);
    localStorage.setItem("name", name);
    localStorage.setItem("Address", address);
    // document.write(<h1>`Welcome ${name}`</h1>);
    console.log(name);
    window.open("index2.html");
}
// function gotowhatsapp() {
    
//     var name = document.getElementById("name").value;
//     var phone = document.getElementById("phone").value;
//     // var email = document.getElementById("email").value;
//     // var service = document.getElementById("service").value;

//     var url = "https://wa.me/917020655614?text=" 
//     + "Name: " + name + "%0a"
//     + "Phone: " + phone + "%0a"
//     // + "Email: " + email  + "%0a"
//     // + "Service: " + service; 

//     window.open(url, '_blank').focus();
// }
