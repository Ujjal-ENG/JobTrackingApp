import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    });
};

// const connectDB = async () => {
//   const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };
//   try {
//     mongoose.connect(
//       "mongodb+srv://ujjal:ujjal7862@cluster0.rl7zeeb.mongodb.net/JobTrackingApp?retryWrites=true&w=majority",
//       connectionParams
//     );
//     console.log("db is connected");
//   } catch (error) {
//     console.log("Db is not connnected: ", error);
//   }
// };

export default connectDB;
