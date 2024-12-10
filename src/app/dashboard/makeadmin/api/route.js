
import { connectDB } from "@/lib/connectDB";

export const PATCH = async (request) => {
  const { email, makeAdmin } = await request.json();
  const db = await connectDB();
  const usersCollection = db.collection("users");

  try {
    const updateResult = await usersCollection.updateOne(
      { email },
      {
        $set: { name: makeAdmin },
      }
    );

    return Response.json({
      message: "User role updated successfully",
      response: updateResult,
    });
  } catch (error) {
    return Response.json({
      message: "Failed to update user role",
      error: error.message,
    });
  }
};


