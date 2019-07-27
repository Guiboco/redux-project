const mongoose = require( 'mongoose' );
const atlasURL=`mongodb+srv://GuiBoCo:Squall_1989@cluster0-upo9l.mongodb.net/test?retryWrites=true&w=majority`;
const devURL = `mongodb://localhost:27017/Register`;
const url = process.env.NODE_ENV === "production" ? atlasURL :devURL;

mongoose.connect( url, { useNewUrlParser: true, useCreateIndex:true } )
.then( () => console.log( 'conectado a mongoDB' ) )
.catch(error=>console.log('Error al conectar a MongoDB: '+error))