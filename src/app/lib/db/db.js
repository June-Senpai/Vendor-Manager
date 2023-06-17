import mongoose from "mongoose";
import Vendor from "./schema";

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const DB = process.env.DB;
export const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DB, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export const db = {
  create: async (data) => {
    await connectDB();
    const vendor = new Vendor(data);
    return await vendor.save();
  },
  read: async (data) => {
    const { page } = data;
    const pageSize = 2;
    const toSkip = (page - 1) * pageSize;
    // console.log({ data });
    await connectDB();
    const result = await Vendor.find().skip(toSkip).limit(pageSize).exec();
    // console.log({ result });
    return result;
  },
  delete: async (data) => {
    await connectDB();
    const result = await Vendor.findByIdAndDelete(data.id);
    return result;
  },
  update: async (data) => {
    await connectDB();
    const result = await Vendor.findByIdAndUpdate(data.id, data);
    console.log({ data });
    return result;
  },
};
