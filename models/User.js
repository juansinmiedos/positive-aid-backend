const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: String,
      enum: ['Detectable', 'Indetectable', 'SIDA'],
      default: 'Detectable'
    },
    confirmationStatus: {
      type: String,
      enum: ['Pending confirmation', 'Active'],
      default: 'Pending confirmation'
    },
    confirmationCode: {
      type: String,
      unique: Boolean
    },
    profilePhoto: {
      type: String,
      default: 'https://images.assetsdelivery.com/compings_v2/tverdohlib/tverdohlib1604/tverdohlib160400157.jpg'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM)
module.exports = model('User', userSchema)