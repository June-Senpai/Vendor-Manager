import mongoose, { Schema, model, models } from "mongoose";

const vendorSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  name: String,
  accountNo: String,
  bankName: String,
  address1: String,
  address2: String,
  city: String,
  country: String,
  zip: String,
  createdBy: String,
  updatedBy: String,
});

const Vendor = models.Vendor || model("Vendor", vendorSchema);
export default Vendor;
