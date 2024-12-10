import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/serrvices"
export const GET = async () => {
    const db = await connectDB();
    const servicescollection = db.collection('services')
    try {
        await servicescollection.deleteMany();
        const response = await servicescollection.insertMany(services)
        return Response.json({message : "Seeded Succesfully"})
    } catch (error) {
        console.log(error, "error here");
        
    }
}