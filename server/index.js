import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import resolvers from"./resolvers.js";
import typeDefs from"./typeDefs.js";
import mongoose from "mongoose";
import cors from "cors";
import  dotenv from "dotenv";

async function  initserver(){
    const  app= express();
    app.use(cors());
    dotenv.config();
  
    const  apolloServer=new  ApolloServer({typeDefs, resolvers});
    await apolloServer.start();
    try {
        await mongoose.connect(process.env.mongoDb);
        console.log("MongoDb connected");
    } catch (error) {
        console.log(error);
    }
    apolloServer.applyMiddleware({app});
    app.use((req, res) => {
        res.send("Server  is  starting");
      });
    app.listen(4000,()=>console.log("server started"));
}

initserver();