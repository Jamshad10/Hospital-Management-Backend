const AdminSchema = require('../models/adminSchema');


const adminSignup = async (req, res) => {
    try {
       console.log(req.body);
       const admin = new AdminSchema({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
       });
       admin.save().then(result => {
        console.log(result);
        res.send('admin added')
       })
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    adminSignup
}