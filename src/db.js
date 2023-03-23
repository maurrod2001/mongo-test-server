import mongoose from "mongoose";

try {
    const db = await mongoose.connect("mongodb://0.0.0.0:27017/taskdb");
    console.log(`DB is connected:${db.connection.name}`);
} catch (error) {
    console.error(error);
}

//$ rewrk -c 1 -d 1s -t 1 -m POST -H "Content-Type: application/json; charset=utf-8" -b '{"title": "first task","description": "in mongodb"}' -h http://192.168.224.1:3000/api/tasks