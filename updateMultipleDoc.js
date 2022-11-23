const {client} = require("./dbconfig")

const updateMultipleDoc =async()=>{

try {
   
    const database = client.db("learnmongo");
    const users = database.collection("users");

    const filter = {};

    const updateDoc = {
        $set: {
          city:"Khula",
        },
      };

      const result = await users.updateMany(filter, updateDoc);
      console.log(`Updated ${result.modifiedCount} documents`);

} catch (error) {
    console.log(error);
}finally{

    await client.close();
}

}
updateMultipleDoc();