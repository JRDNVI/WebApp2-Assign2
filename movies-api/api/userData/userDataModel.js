const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  favouriteIDs: [Number],
  mustWatchIDs: [Number],
});

userDataSchema.statics.findByUsername = function (username) {
  return this.findOne({ username: username });
};

export default mongoose.model('UserData', userDataSchema);


