import mongoose from "mongoose";
import Recipe from "./models/Recipe.model.js";

async function connect()
{
    try{
        const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Conectado...${dbConnect.connection.name}`);
        return Recipe.deleteMany();
    } catch (error) {
        console.log(error);
    }
}

export default connect; 