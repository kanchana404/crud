import mongoose, { Schema } from "mongoose";
import { title } from "process";

const topicSchema = new Schema(
{
    title: String,
    description: String
},
{ timestamps: true }
)


const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic