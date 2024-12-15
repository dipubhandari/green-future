import express from 'express'
import UserController from '../Controller/User/UserController.js'
import JobSeekerController from '../Controller/JobSeeker/JobSeeker.js'
import multer from 'multer'

const userRoutes = express.Router()

// company upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/logo')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })
// company upload


// // newuser routes
// userRoutes.post('/newuser', JobSeekerController.UserAccountCreation)
userRoutes.post('/create-new-account', upload.single('logo'), UserController.UserAccountCreation)
userRoutes.post('/login', UserController.Login)
userRoutes.post('/checklogin', UserController.checkLogin)
userRoutes.get('/alluser', UserController.getAllUser)
userRoutes.get('/delete-all-user', UserController.deleteAllUser)

// individual user route

// userRoutes.post('/update-jobseeker-details',JobSeekerController.UpdateJobSeekerDetail)
// userRoutes.get('/jobseeker-details/:id', JobSeekerController.JobSeekerDetails)

// user route
// userRoutes.get('/allemployer', EmployerController.AllEmployer)
// userRoutes.get('/company-details/:id', EmployerController.CompanyDetail)
// userRoutes.post('/update-company-details', upload.single('avatar'), EmployerController.UpdateCompanyDetail)
// // userRoutes.post('/update-jobseeker-details',  JobSeekerController.UpdateJobSeekerDetail)


// userRoutes.post('/change-password', EmployerController.ChangePassword)

export default userRoutes