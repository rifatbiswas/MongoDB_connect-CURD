const {client} = require("./dbconfig")

const findSingleDoc=async()=>{

    try {
        const database = client.db("learnmongo");
        const users = database.collection("users");

        const query = {ID:627 };

        const result = await users.findOne(query);
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }finally{
        await client.close();

    }
}
findSingleDoc();