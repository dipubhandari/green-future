import express from 'express'
import IdeaPostController from '../Controller/IdeaPost/IdeaPost.js';
const postRoutes = express.Router()



postRoutes.post('/post-idea', IdeaPostController.IdeaPost)
postRoutes.get('/idea-detail/:id', IdeaPostController.IdeaDetail)
postRoutes.post('/vote-idea', IdeaPostController.VoteIdea)

postRoutes.get('/all-ideas', IdeaPostController.IdeaApi)
postRoutes.get('/delete-idea', IdeaPostController.deleteIdea)


export default postRoutes