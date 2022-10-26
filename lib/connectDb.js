import clientPromise from "../lib/mongodb";

const connectDb = async () => {
    const client = await clientPromise;
    const db = client.db("jibon");
   
    return db;
  
  }

  export default connectDb;