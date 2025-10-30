import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("career_guidance");
    const fields = await db.collection("fields").find({}).toArray();

    return Response.json(fields);
  } catch (error) {
    console.error("❌ Error fetching fields:", error);
    return Response.json({ error: "Failed to fetch fields" }, { status: 500 });
  }
}
