const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const newUser = new User({ name: 'John Doe', email: 'john@example.com', password: 'secret' });
newUser.save()
    .then(() => console.log('User added successfully'))
    .catch(err => console.error(err));

// Finding all users
User.find()
    .then(users => console.log(users))
    .catch(err => console.error(err));

// Updating a user
User.findOneAndUpdate({ name: 'John Doe' }, { name: 'John Updated' }, { new: true })
    .then(user => console.log('User updated successfully', user))
    .catch(err => console.error(err));

// Deleting a user
User.findOneAndDelete({ name: 'John Updated' })
    .then(() => console.log('User deleted successfully'))
    .catch(err => console.error(err));