import * as mongoose from 'mongoose';
export const UserSchema  = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim:true,
    maxlength: [50, 'Name cannot be longer than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email address'],
    match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email']
  },

  roleType: {
    type: String,
    required: true,
    enum : [
      'Admin',
      'Customer Executive'

    ]
  },
  contactNumber: {
    type: String,
  },
 status: {
    type: String,
    required:true,
    enum : [
      'Active',
      'Inactive',
      'Pending'

    ]
  }

});