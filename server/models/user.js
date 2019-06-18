const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   username: { type: String, min: [4, 'to short min is 4 characters!!!'], max: [50, 'too long, max length for title is 50 characters!!!']},
   email: { type: String, min: [10, 'to short min is 4 characters!!!'], max: [100, 'too long, max length for title is 50 characters!!!'], 
   unique: true, lowercase: true, required: 'email is required', match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
   password: { type: String, min: [4, 'to short min is 4 characters!!!'], max: [20, 'too long, max length for title is 50 characters!!!'], required: 'password is required!!!'},
   rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}],
   bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

userSchema.methods.hasSamePassword = function(requestedPassword) {
   return bcrypt.compareSync(requestedPassword, this.password);
}

userSchema.pre('save', function(next) {
   const user = this;

   bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
          user.password = hash;
          next();
      });
  });
});

module.exports = mongoose.model('User', userSchema);