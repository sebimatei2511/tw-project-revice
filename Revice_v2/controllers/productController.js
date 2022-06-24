const Product = require('../models/productModel')

const Product1 = require('../databasepg')

const { getPostData } = require('../utils')

const {getAllProductsFromDB} = require('../databasepg')

// @desc Gets All Products
// @route GET /api/products
async function getProducts(req, res) {
    try{
        const products = await Product.findAll()

        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))

    } catch (error) {
        console.log(error)
    }
}

// @desc Gets Single Product
// @route GET /api/product/:id
async function getProduct(req, res, id) {
    try{
        const product = await Product.findById(id)

        if(!product){
            res.writeHead(404,{'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Product Not Found'}))
        } else{
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(JSON.stringify(product))
        }

    } catch (error) {
        console.log(error)
    }
}

// @desc Create a Product
// @route POST /api/products
  async function createAllProducts(req, res) {
    try{

        //const body = await getPostData(req)
        const body = await getAllProductsFromDB()
        const jsonData = body
        jsonData.forEach((element) => {
            //let obj = jsonData[i];
    
                    var { id, name, brand, imageurls, specification1, specification2, specification3, specification4, specification5, description, avgprice, category } = element

                    var product = {
                                        id,
                                        name,
                                        brand,
                                        imageurls,
                                        specification1,
                                        specification2,
                                        specification3,
                                        specification4,
                                        specification5,
                                        description,
                                        avgprice,
                                        category
                    }

        var newProduct = Product.create(product)

                })


    } catch (error) {
        console.log(error)
    }
} 

///////
 async function createProduct(req, res) {
    try{

        const body = await getPostData(req)
        //console.log(body[1])
        const jsonData = JSON.parse(body)
            //let obj = jsonData[i];
        
            console.log(element)
        
                    var { id, name, url, spec1, spec2, spec3, description, categorie } = jsonData.parse(body)

                    var product = {
                                        id,
                                        name,
                                        url,
                                        spec1,
                                        spec2,
                                        spec3,
                                        description,
                                        categorie
                    }

        var newProduct = Product.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json'})
        return res.end(JSON.stringify(newProduct))  


    } catch (error) {
        console.log(error)
    }
} 
// @desc Update a Product
// @route PUT /api/products
async function updateProduct(req, res, id) {
    try{
        const product = await Product.findById(id)
        
        if(!product){
            res.writeHead(404,{'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Product Not Found'}))
        } else {
            const body = await getPostData(req)

            const { title, description, price } = JSON.parse(body)

            const productData = {
            title: title || product.title,
            description: description || product.description,
            price: price || product.price
        }

            const updProduct = await Product.update(id, productData)

            res.writeHead(200, { 'Content-Type': 'application/json'})
            return res.end(JSON.stringify(updProduct)) 
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc Delete Product
// @route DELETE /api/product/:id
async function deleteProduct(req, res, id) {
    try{
        const product = await Product.findById(id)

        if(!product){
            res.writeHead(404,{'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Product Not Found'}))
        } else{
            await Product.remove(id)
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(JSON.stringify( { message: `Product ${id} removed`}))
        }

    } catch (error) {
        console.log(error)
    }
}

async function deleteAllProducts(req, res) {
    try{
        const product = await Product.findAll()

        if(!product){
            res.writeHead(404,{'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Product Not Found'}))
        } else{
            await Product.removeAll()
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(JSON.stringify( { message: `Products removed`}))
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts,
    createAllProducts
}