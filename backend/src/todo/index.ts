import mongoose, { Model } from "mongoose";

interface ITodo {
  name: String;
  isDone: boolean;
}

export default class {
  public model: Model<ITodo>;
  constructor() {
    mongoose.connect(process.env["MONGOURL"]!);
    this.model = mongoose.model<ITodo>("Todo", this.schema());
  }

  all() {
    return this.model.find().exec();
  }

  find(name: String) {
    return this.model.findOne({ name }).exec();
  }

  new(args: { name: String; isDone: Boolean }) {
    return new this.model(args);
  }

  destroy(name: String) {
    return this.model.deleteOne({ name });
  }

  private schema() {
    return new mongoose.Schema<ITodo>(
      {
        name: { type: String, required: true, unique: true },
        isDone: { type: Boolean, required: true },
      },
      { _id: false }
    );
  }
}
