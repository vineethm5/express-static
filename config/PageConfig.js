const mongoose = require("mongoose");

const dbconnection =  async () =>
{
    try
    {
    const dbconnect  =await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected Successfully to the db",dbconnect.name,dbconnect.host);
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
    
}

module.exports=dbconnection;