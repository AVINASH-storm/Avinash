import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://Avinash:_vavinash_@ac-6lnxmye-shard-00-00.2bu8nta.mongodb.net:27017,ac-6lnxmye-shard-00-01.2bu8nta.mongodb.net:27017,ac-6lnxmye-shard-00-02.2bu8nta.mongodb.net:27017/?ssl=true&replicaSet=atlas-uwt5xe-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Whatsapp-clone";
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
};

export default Connection;
