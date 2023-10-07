const { setFailed, getInput, debug } = require( '@actions/core' );
const { MongoClient } = require('mongodb');


async function main() {
	debug( 'Our action is running' );

    const mongodb_url = getInput( 'mongodb_url' );
    const db_name = getInput( 'db_name' );
    const collection_name = getInput( 'collection_name' );
    if (!mongodb_url) {
        setFailed( 'Input `mongodb_url` is required' );
        return;
    } else if (!db_name) {
        setFailed( 'Input `db_name` is required' );
        return;
    } else if (!collection_name) {
        setFailed( 'Input `collection_name` is required' );
        return;
    }

    const time = new Date();
    console.log(`Pulling infomation from db ${db_name} - collection ${collection_name} - time ${time.toLocaleString()} `);

    // const url = 'mongodb://localhost:27017';
    const client = new MongoClient(mongodb_url);
    // const dbName = 'forester';

    try {
        // Use connect method to connect to the server
        await client.connect();
        const connectionTime = new Date();
        console.log(`Connected successfully to server...${(connectionTime - time).toLocaleString()}`);
        const db = client.db(db_name);
        const collection = db.collection(collection_name);
        // 604800 seconds = 7 days
        const deleteResult = await collection.createIndex( { "createdAt ": 1 }, { expireAfterSeconds: 604800 } )
        debug( `Deleted documents => '${ deleteResult }', collection = '${ collection }'` );
        console.log( `Deleted documents => '${ deleteResult }', collection = '${ collection }'` );
        client.close();
        const closeTime = new Date();
        console.log(`Client connection is closed...${(closeTime - time).toLocaleString}`)
        return 'done.';
    } catch (error) {
        setFailed(error.message);
    }
} 

main()
