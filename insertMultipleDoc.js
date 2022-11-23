// const{client} =require("./dbconfig")

// const insertDoc=async()=>{
// try {
    
//     const database = client.db("learnmongo");
//     const users = database.collection("users");

//     const doc=[
//         {
//             name:"Rifat Biswas",
//             ID:606,
//         },

//         {
//             name:"Jagannath Dey",
//             ID:523,
//         },

//         {
//             name:"Tanmoy Roy",
//             ID:627,
//         },
//         {
//             name:"Rasel Mahmud",
//             ID:672,
//         },
//     ]
         
//     const result=await users.insertMany(doc);
     
//      console.log(`${result.insertedCount} documents were inserted`);
//     }
    
//  catch (error) {
   
    
// console.log(error);

// }finally{
//     await client.close();
// }
// }
// insertDoc();


