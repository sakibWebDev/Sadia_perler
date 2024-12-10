import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db = await connectDB();
    const servicescollection = db.collection('services')
    try {
       const services =await servicescollection.find().toArray();
       return Response.json({services})
    } catch (error) {
        console.log(error, "error here");
        
    }
}