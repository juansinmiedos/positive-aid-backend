const { model, Schema } = require('mongoose')

const appointmentSchema = new Schema(
  {
    place: String,
    typeOfAppointment: {
        type: String,
        enum: ['Revisión', 'Análisis', 'Recolección de medicamentos']
    },
    withWhom: String,
    date: Date,
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

// In the future we will be adding a property to check if the appointment was completed, was re-scheluded or canceled in a PATCH request.

module.exports = model('Appointment', appointmentSchema)