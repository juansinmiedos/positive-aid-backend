const Medicine = require('../models/Medicine')

exports.toMedicine = async(req, res) => {
  try{
    let medicines = await Medicine.find()
    res.status(201).json({medicines})
  } catch (err){
      res.status(500).json({err})
  }
}