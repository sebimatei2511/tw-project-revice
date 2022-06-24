//const { getAllProductsFromDB } = require("../databasepg");


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

    async function getInfo()
    {   
        const baseUrl = window.location.href;
        const apiUrl = 'http://localhost:5000/api/products/'+baseUrl.split('/')[4]
        const res = await fetch(apiUrl, {
            method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        //const obj = JSON.parse(data)
        document.getElementById('product_description').textContent = data.description
        document.getElementById('product_name').textContent = data.name
        document.getElementById('product_img').src = data.imageurls
        document.getElementById('product_spec1').textContent = data.specification1
        document.getElementById('product_spec2').textContent = data.specification2
        document.getElementById('product_spec3').textContent = data.specification3
        document.getElementById('product_spec4').textContent = data.specification4
        document.getElementById('product_spec5').textContent = data.specification5
        document.getElementById('product_brand').textContent = data.brand
        document.getElementById('product_price').textContent = data.avgprice
        
        //document.getElementById('product_price').textContent = data.price
    }
    async function getAllProducts(index)
    {   
        const baseUrl = 'http://localhost:5000/api/products'
        const res = await fetch(baseUrl, {
            method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        document.getElementById('product_description_'+index).textContent = data[index].description
    }
    async function getAllProductsImage(index)
    {   
        const baseUrl = 'http://localhost:5000/api/products'
        const res = await fetch(baseUrl, {
            method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        document.getElementById('myImg_'+index).src = data[index].imageurls
    }
    async function getProductId(index)
    {   
        const baseUrl = 'http://localhost:5000/api/products'
        const res = await fetch(baseUrl, {
            method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        document.getElementById('product_id_'+index).textContent = data[index].id

    }

    async function postAllData()
    {    
        const baseUrl = 'http://localhost:5000/api/products'
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: data
        })
      
    }



    

    
    
    

