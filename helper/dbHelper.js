const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:admin@cluster0.srmns.mongodb.net/flightBooking?retryWrites=true&w=majority"

module.exports = {
    insert: async (collectionName, documents) => {
        let client = new MongoClient(url, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        try {
            await client.connect();
        
            let db = await client.db('flightBooking');
            let col = await db.collection(collectionName);

            await col.insertMany(documents);
         
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    },
    delete: async (collectionName, query = {}) => {
        let client = new MongoClient(url, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        try {
            await client.connect();
        
            let db = await client.db('flightBooking');
            let col = await db.collection(collectionName);

            await col.deleteMany(query);
         
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    },
    update: async (collectionName, document, query = {}) => {
        let client = new MongoClient(url, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        try {
            await client.connect();
        
            let db = await client.db('flightBooking');
            let col = await db.collection(collectionName);

            await col.updateMany(query, {$set: document}, {multi: true });
         
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    },
    find: async (collectionName, query = {}) => {
        let client = new MongoClient(url, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        try {
            await client.connect();
        
            let db = await client.db('flightBooking');
            let col = await db.collection(collectionName);
            let cursor = col.find(query);

            let retVal = [];
            for (let doc = await cursor.next(); doc; doc = await cursor.next()) {
                retVal.push(doc);
            }

            return retVal;
         
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
}