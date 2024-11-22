import  mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    }
},{timestamps: true});  

export default mongoose.model('Todo', todoSchema);