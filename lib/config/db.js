import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://JuiceJuice:A8A3plWjIqeqna6V@cluster0.0g65tlc.mongodb.net/todo-app');

    console.log("Database Connected");
}