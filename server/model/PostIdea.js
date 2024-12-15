import mongoose from "mongoose"

const IdeaSchema = new mongoose.Schema({
    ideaTitle: { type: String, required:true },
    ideaCategory: { type: String, required:true },
    idea: { type: String, required:true },
    ideator:{type:String,required:true},
    isActive: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    likes:[],
    dislikes:[],
    views:{type:Number,default:0},
    innovative:{type:Number,default:0},
    uniqueness:{type:Number,default:0},
    effectiveness:{type:Number,default:0},
    votedBy:[]
})

const IdeaModel = mongoose.model('ideapost', IdeaSchema)

export default IdeaModel