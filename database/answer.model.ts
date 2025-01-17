import { model, models, Schema, Types } from "mongoose";

export interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  content: string;
  upVotes?: number;
  downVotes?: number;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    content: { type: String, required: true },
    upVotes: { type: Number, required: false, default: 0 },
    downVotes: { type: Number, required: false, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Answer = models.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;
