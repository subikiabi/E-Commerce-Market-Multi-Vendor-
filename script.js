fetch("http://localhost:5000/api/products")

.then(res=>res.text())

.then(data=>{

document.getElementById("products").innerHTML=data;

});