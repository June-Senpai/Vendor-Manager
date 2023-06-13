import mongoose from "mongoose";

const DB = process.env.DB;
mongoose.connect(DB);
