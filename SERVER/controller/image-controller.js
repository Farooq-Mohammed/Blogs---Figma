import grid from 'gridfs-stream';
import mongoose from 'mongoose';

import dotenv from "dotenv";
dotenv.config();

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "fs",
      });
      gfs = grid(conn.db, mongoose.mongo);
      gfs.collection("fs");
})

export const uploadImage = (req, res) => {
  try {
    if (!req.file) return res.status(404).json({ msg: "file not found" });

    const imageUrl = `${process.env.BASE_URL}/file/${req.file.filename}`;
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.log("Err", error);
  }
};

export const getImage = (req, res) => {

}