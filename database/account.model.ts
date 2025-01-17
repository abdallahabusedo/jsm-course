import { Document, Schema, Types, model, models } from "mongoose";

export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
}
export interface IAccountDocument extends IAccount, Document {}
const AccountSchema = new Schema<IAccount>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  image: { type: String, required: false },
  password: { type: String, required: false },
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true },
});

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
