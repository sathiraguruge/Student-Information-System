const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    Username : String,
    Password: String,
    Email: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;