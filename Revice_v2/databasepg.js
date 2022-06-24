const {Client} = require('pg')

const client = new Client ({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"password",
    database:"web_db"
})

client.connect()

async function getAllProductsFromDB(){

    try {
        const res = await client.query(
          `SELECT * FROM devices`
        );
        return res.rows;
      } catch (err) {
        return err.stack;
      }
     
}

async function findProductByID(id){
client.query(`Select * from devices where id=$1`,[id],(err,res) =>{
    if(!err){
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    client.end
})
}

async function findProductByCategory(category){
    client.query(`Select * from devices where category=$1`,[category],(err,res) =>{
        if(!err){
            console.log(res.rows)
        } else {
            console.log(err.message)
        }
        client.end
    })
    }


module.exports = {
    findProductByID,
    findProductByCategory,
    getAllProductsFromDB
}