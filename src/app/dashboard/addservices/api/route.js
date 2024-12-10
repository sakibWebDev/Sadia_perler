import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newAddservice = await request.json();
  const db = await connectDB();
  const addservices = db.collection("services");

  try {
    const res = await addservices.insertOne(newAddservice);
    return Response.json({ message: "Booked Successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};
