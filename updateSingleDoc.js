// const{client} = require('./dbconfig')

// const updateSingleDoc =async()=>{

//     try {

//     const database = client.db("learnmongo");
//     const users = database.collection("users");

//     const filter = { name: "Rasel Mahmud" };
//     const options = { upsert: true };

//     const updateDoc = {
//         $set: {
//         country:"Bangladesh"
//         },
//       };
//       const result = await users.updateOne(filter, updateDoc, options);
//     console.log(
//       `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//     );
        
//     } catch (error) {
//         console.log(error);
//     }finally{
//         await client.close();
//     }
    
// }
// updateSingleDoc();