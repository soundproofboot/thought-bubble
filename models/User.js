const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  
  username: {
    type: String,
    unique: true,
    required: 'You must enter a user name',
    trim: true
  },
  email: {
    type: String,
    required: 'You must enter an email address',
    unique: true,
    validate: {
      validator: function(email) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }]
},
{
  toJSON: {
    virtuals: true
  },
  id: false
});

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;