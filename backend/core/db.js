import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/twitter', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

export {db, mongoose};
