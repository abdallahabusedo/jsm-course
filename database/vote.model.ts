import { Document, model, models, Schema, Types } from "mongoose";

export interface IVote {
  author: Types.ObjectId;
  actionId: Types.ObjectId;
  type: "question" | "answer";
  voteType: "upVote" | "downVote";
}

export interface IVoteDocument extends IVote, Document {}
const VoteSchema = new Schema<IVote>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    actionId: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, required: true, enum: ["question", "answer"] },
    voteType: { type: String, required: true, enum: ["upVote", "downVote"] },
  },
  {
    timestamps: true,
  }
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
