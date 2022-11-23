const{client}=require("./dbconfig")

const insertDoc=async()=>{
try {
    
    const database = client.db("learnmongo");
    const users = database.collection("users");

    const doc={
        name:"Rifat Biswas"
    }
    
    const result=await users.insertOne(doc);
     console.log(result);
     console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
    
 catch (error) {
   
    
console.log(error);

}finally{
    await client.close();

}
}
insertDoc();


