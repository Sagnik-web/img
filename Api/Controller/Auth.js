const User = require("../Model/User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// outer.post("/register", 
exports.register = async (req, res) => {
    try {
      const userExists = await User.findOne({ email: req.body.email });
      if (userExists) {
        return res
          .status(200)
          .send({ message: "User already exists", success: false });
      }
      
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newuser = new User(req.body);
      newuser.save()
      
      res
        .status(200)
        .send({ message: "User created successfully", success: true });
      // console.log(req.body);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Error creating user", success: false, error });
    }
  };
  

  
//   router.post("/login",
  exports.login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "User does not exist", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Password is incorrect", success: false });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res
          .status(200)
          .json({ message: "Login successful", success: true, data: token , name:user.name, isAdmin:user.isAdmin, isContributor:user.isContributor});
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Error logging in", success: false, error });
    }
  };



