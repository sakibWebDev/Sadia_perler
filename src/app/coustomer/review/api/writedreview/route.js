import { connectDB } from "@/lib/connectDB";


export const POST = async (request) => {
  const newReview = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("reviews");

  try {
    const res = await bookingsCollection.insertOne(newReview);
    return Response.json({ message: "Booked Successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};


export const GET = async () => {
    try {
        const db = await connectDB();
        const bookingReview = db.collection("reviews");

        // Fetch all reviews from the collection
        const reviews = await bookingReview.find().toArray();

        // Respond with the reviews
        return Response.json({ reviews }, { status: 200 });
    } catch (error) {
        console.error("Error fetching reviews:", error);

        // Handle the error and respond with an error message
        return Response.json(
            { message: "Failed to fetch reviews", error: error.message },
            { status: 500 }
        );
    }
};
