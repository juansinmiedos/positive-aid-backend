const { Schema, model } = require('mongoose')

const medicationSchema = new Schema(
  {
    med: String,
    frequency: Number,
    startHour: Date,
    startDate: Date,
    endDate: Date,
    currentlyBeingTaken: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Medication', medicationSchema)