import {gql} from 'apollo-server-express';
const  typeDefs=gql`
scalar Date

type todo{
id:ID,
title:String,
description:String,
isCompleted:Boolean,
dateTime:Date}

    type Query {
        hello: String,
        getTodos:[todo],
        getTodoById(id: ID!): todo
        
    }

    type Mutation {
        createTodo(title: String!, description: String!, isCompleted: Boolean!, dateTime: Date!): todo
        updateTodo(id:ID!, title: String!, description: String!, isCompleted: Boolean!, dateTime: Date!): todo
        deleteTodo(id:ID!): todo
    }
`;  
export default typeDefs