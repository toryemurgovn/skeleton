import mongoose from "mongoose";

const recruitSchema = new mongoose.Schema({
  title: String,
  type: String,
  location: String,
  description: String,
  date: Date
}, { timestamps: true });

recruitSchema.methods.test  = () => {
  console.log("title " + this.title);
};

const Recruit = mongoose.model("Recruit", recruitSchema);

export default Recruit;