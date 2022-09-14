const mongoose = require('mongoose')

async function databaseConnection () {
  const URI = 'mongodb+srv://andrew-user:andrewDatabase1@cluster0.3adrkwa.mongodb.net/hmodb'
  try{
    await mongoose.connect(URI)
    console.log('conected to mongoDB')
  } catch (error){
    console.error('Error connecting to MongoDB', error)
    proces.exit(1)
  }
}

databaseConnection();

const UserSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
  },
  userFirstName: {
    type: String,
  },
  userLastName: {
    type: String,
  },
  password:{
    type: String,
    required: true,
  },
  isLogged:{
    type: Boolean,
  },
  hmoPosts:[
    {
      type:String
    }
  ]

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

const User1 = {
  email: 'user1@gmail.com',
  userFirstName: 'user1FirstName',
  userLastName: 'user1LastName',
  password: '1',
  isLogged: false,
  hmoPosts:['firstpost','secondpost']
}

databaseConnection()
  .then ( async ()=>{
    const newUser = User.create(User1)
    console.log(newUser)
  })
