import * as mongoose from 'mongoose';

export const op = new mongoose.Schema({
    question: {type: String, required:true},
    ans: {type: String, required:true}
    
});

export const OperationSchema = new mongoose.Schema({
    operation: {type:op, required:true},
    
}, {timestamps: true});


export interface Operation extends mongoose.Document{
    id:string;
    operation: object;
}
