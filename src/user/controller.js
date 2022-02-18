const User = require("./model");
const bcrypt = require('bcryptjs');

exports.addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password })
    res.status(200).send({user: newUser})
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({})
    res.status(200).send({users: allUsers})
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}

exports.login = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.findOne({ email });
    if (newUser) {
      const validPass = await bcrypt.compare(password, newUser.password);
      if (validPass) {
        res.status(200).send({message: "Login is successful"})
      } else {
        res.status(500).send({message: "Incorrect password"})
      }
    } else {
      res.status(500).send({message: "Entered wrong email"})
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({error: error.message})
  }
}