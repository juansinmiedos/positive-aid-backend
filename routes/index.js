const express = require('express');
const router  = express.Router();
const passport = require('../config/passport')
const isAuth = require('../middlewares/isAuth')
// REQUIRE CONTROLLERS
const { toSignup, toLogin, toConfirm, toProfile, toLogout, toUpdate } = require('../controllers/user')
const { toAddLabResult, toGetLabResult, toUpdateLabResult, toDeleteLabResult } = require('../controllers/labResults')
const { toAddMedication, toGetMedication, toUpdateMedication, toPatchMedication, toDeleteMedication } = require('../controllers/medication')
const { toAddAppointment, toGetAppointment, toUpdateAppointment, toDeleteAppointment } = require('../controllers/appointments')
const { toMedicine } = require('../controllers/medicines')
const { toCapacits } = require('../controllers/capacits')

// AUTHENTICATION ROUTES
router.post('/signup', toSignup)
router.post('/login', toLogin, passport.authenticate('local'))
router.get('/confirm/:id', toConfirm)
router.get('/profile', isAuth, toProfile)
router.get('/logout', toLogout)
router.put('/update', toUpdate)

// LABRESULT ROUTES
router.post('/lab-result', toAddLabResult)
router.get('/lab-result', toGetLabResult)
router.put('/lab-result', toUpdateLabResult)
router.delete('/lab-result', toDeleteLabResult)

// MEDICATION ROUTES
router.post('/medication', toAddMedication)
router.get('/medication', toGetMedication)
router.put('/medication', toUpdateMedication)
router.patch('/medication', toPatchMedication)
router.delete('/medication', toDeleteMedication)

// APPOINTMENT ROUTES
router.post('/appointment', toAddAppointment)
router.get('/appointment', toGetAppointment)
router.put('/appointment', toUpdateAppointment)
router.delete('/appointment', toDeleteAppointment)

// MEDICINE ROUTES
router.get('/medicine', toMedicine)

// CAPACITS ROUTES
router.get('/capacits', toCapacits)

// BLOG ROUTES ... PENDING
// MEDICINEREPORT ROUTES ... PENDING

module.exports = router;
