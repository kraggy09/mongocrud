import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.Topic) {
  delete mongoose.models.Topic;
}

const Topic = mongoose.model("Topic", topicSchema); // Fixed this line

export default Topic;
