import { model, models, Schema, Types } from "mongoose";

export interface IQuestion {
  title: string;
  content: string;
  tags: Types.ObjectId[];
  views?: number;
  answers?: number;
  upVotes?: number;
  downVotes?: number;
  author: Types.ObjectId;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Types.ObjectId, required: true }],
    views: { type: Number, required: false, default: 0 },
    upVotes: { type: Number, required: false, default: 0 },
    downVotes: { type: Number, required: false, default: 0 },
    answers: { type: Number, required: false, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Question =
  models?.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
