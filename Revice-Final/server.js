const http = require('http')
const fs = require('fs')
const path = require('path')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct, deleteAllProducts, createAllProducts } = require('./controllers/productController')

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index') {
        fs.readFile('./app_pages/index.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        
        })
    } else if (req.url.match('/productDetails')) {
        fs.readFile('./app_pages/productDetails.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        })
    } else if (req.url.match('/drones')) {
        fs.readFile('./app_pages/DronesList.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        })
    } 
    else if (req.url.match('/phones')) {
        fs.readFile('./app_pages/PhonesList.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        })
    }else if (req.url.match('/smartwatches')) {
        fs.readFile('./app_pages/WatchesList.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        })
    } else if (req.url.match('/laptops')) {
        fs.readFile('./app_pages/LaptopsList.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        })
    } else if (req.url.match('/pcs')) {
        fs.readFile('./app_pages/PCsList.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        })
    }else if (req.url === '/signup') {
        fs.readFile('./app_pages/signup.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        
        })
    } else if (req.url === '/userGuide') {
        fs.readFile('./documentation/GUIDESCHOLARLY.html','UTF-8',(err,html)=>{
            if(err){
                res.writeHead(404)
                res.end('File not found')
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(html)
                res.end()
            }
        
        })
    } else if(req.url.match('\.css$')) {
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {'Content-Type': 'text/css'});
        fileStream.pipe(res); 

    }else if(req.url.match('\.png$')){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {'Content-Type': 'image/png'});
        fileStream.pipe(res)
    }
    else if(req.url.match('\.html$')){
    var htmlPath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(htmlPath);
    res.writeHead(200, {'Content-Type': 'text/html'});
    fileStream.pipe(res)
} else if(req.url.match('\.js$')){
    var jsPath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(jsPath);
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    fileStream.pipe(res)
} 
else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') 
    {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    } else if(req.url === '/api/products' && req.method === 'POST') {
        createAllProducts(req, res)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        deleteProduct(req, res, id)
    } else if(req.url.match(/\/api\/products/) && req.method === 'GET'){
        getProducts(req, res)
    } else if(req.url.match(/\/api\/products/) && req.method === 'DELETE'){
        deleteAllProducts(req, res)
    }
    else {
        res.writeHead(404,{'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))