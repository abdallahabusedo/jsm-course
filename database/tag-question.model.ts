import { Document, model, models, Schema, Types } from "mongoose";

export interface ITagQuestion {
  question: Types.ObjectId;
  tag: Types.ObjectId;
}

export interface ITagQuestionDocument extends ITagQuestion, Document {}
const TagQuestionSchema = new Schema<ITagQuestion>({
  question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
});

const TagQuestion =
  models.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
