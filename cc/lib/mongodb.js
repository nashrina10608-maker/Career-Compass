import { MongoClient } from 'mongodb'
import 'dotenv'

const uri = "mongodb://localhost:27017/"
let client
let clientPromise


if (!uri) {
throw new Error('Please add your MONGODB_URI to .env.local')
}


if (process.env.NODE_ENV === 'development') {
// In dev, use a global variable so the client is reused between HMR reloads
if (!global._mongoClientPromise) {
client = new MongoClient(uri)
global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise
} else {
client = new MongoClient(uri)
clientPromise = client.connect()
}


export default clientPromise