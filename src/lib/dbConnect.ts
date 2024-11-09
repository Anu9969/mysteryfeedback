import mongoose from 'mongoose';

//jo database ke connection ke baad object m se kya value chahiye vo pta hona chahiye

type ConnectionObject ={
    isConnected?: number;
}

const connection: ConnectionObject = {};


//ab db connection ,db dusre continentm hota h to connection m time lgta h ,fail bhi ho skta h 

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log('Using existing connection');
        return;
    }

    //agar connection nhi h to new connection bnani h
    try {
       const db =  await mongoose.connect(process.env.MONGODB_URI || '', {})
       console.log('DB Connected');
       console.log(db);

       connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        process.exit(1);
        console.log('DB Connection Failed', error);
    }
}

export default dbConnect;