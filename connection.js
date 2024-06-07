const mongoose = require('mongoose')
const Item = require('./models/item.js')

async function connectDB () {

  const uri = process.env.CLUSTER0_URI;
  try{
    await mongoose.connect(uri);
  }
  catch(err){
    console.error('Connection error:', err);
  }
  const db = mongoose.connection;

  let newId = await Item.findOne().sort({_id: -1}).limit(1);
  try{
    newId = newId.itemId;
    newId = newId + 1;
  }
  // Collection is empty
  catch{
    newId = 1;
  }
  // Create a new item object
  const item = new Item({
    itemId: newId,
    name: `item${newId}`,
    type: "1",
    price: 100
  });

  // Insert the item in our MongoDB database
  await item.save();
  console.log(`Item ${item.name} successfully added to the database`);
  db.close();
}

connectDB();
