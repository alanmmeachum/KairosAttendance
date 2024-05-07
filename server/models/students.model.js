import { model, Schema } from "mongoose";

const StudentSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    grade: String,
    present: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Students = model("Students", StudentSchema);
export default Students;
