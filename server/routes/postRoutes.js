import express from 'express'
import IdeaPostController from '../Controller/IdeaPost/IdeaPost.js';
const postRoutes = express.Router()



postRoutes.post('/post-idea', IdeaPostController.IdeaPost)
// postRoutes.get('/all-ideas', IdeaPostController.IdeaApi)


export default postRoutes