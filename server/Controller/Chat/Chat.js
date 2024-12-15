import Chat_Model from '../../model/chats.js'
import Friend_Model from '../../model/friend.js'
import Employer_Model from '../../model/employer.js';
import User_Model from '../../model/User.js';
import { findUser } from '../../utils/findUser.js';

class ChatController {

    // fetch the message of the user in chat section
    static Messages = async (req, res) => {
        try {
            let { sender, receiver, account } = req.params
            // find sender email 
            const user = await ((account == 'employer') ? Employer_Model : JobSeeker_Model).findOne({ _id: sender })
            sender = user.email
            const messages = await Chat_Model.find({
                "$or": [
                    { "sender": sender, "receiver": receiver },
                    { "receiver": sender, "sender": receiver },
                ]
            })
            const receiverInfo = await ((account == 'employer') ? JobSeeker_Model : Employer_Model).findOne({ email: receiver })
            console.log(receiverInfo)
            receiverInfo.password = null
            user.password = null
            res.send({ messages, sender: user, receiver: receiverInfo })
        } catch (error) {
            console.log(error)
        }
    }

    // send message to particular user and saved to model db
    static SendMessage = async (req, res) => {
        try {
            let { receiver, message, account } = req.body
            console.log(req.body.sender)
            let sender = await Employer_Model.findOne({ _id: req.body.sender }) || await JobSeeker_Model.findOne({ _id: req.body.sender })
            const senderEmail = sender.email
            // console.logsenderEmail
            // saving the message to chat model
            const sendMessage = await Chat_Model.create({ sender: senderEmail, receiver, message })
            res.send(sendMessage)
        } catch (error) {
            console.log(error)
        }
    }
    // get all friends list
    static AllFriend = async (req, res) => {
        try {

            // find the user is employer or job seeker
            const userDetail = await JobSeeker_Model.findOne({ _id: req.params.token }) || await Employer_Model.findOne({ _id: req.params.token })
            // if account is jobseeker
            if (userDetail.account == 'jobseeker') {
                // find user from friend model to fetch friends from employer
                const friends = await Friend_Model.findOne({ user: req.params.token })
                // find friend from employer model from array in friend
                const friendDetail = await Employer_Model.find({
                    email: { $in: friends.friend }
                })
                // send friend details as reponse
                res.send(friendDetail)
            }

            // if account is employer find
            else {
                // get friend of user to from friend model that has this employer friend
                const whoaddedme = await Friend_Model.find({
                    friend: { $in: userDetail.email }
                })
                // convert id of the all added friends in array
                const allfriends = whoaddedme.map((item, id) => {
                    return item.user
                })
                //    find all the user from jobseeker model
                const friendDetail = await JobSeeker_Model.find({ _id: { $in: allfriends } })

                res.send(friendDetail)

            }


        } catch (error) {
            console.log(error)
            res.send({ error_msg: "Something went Wrong" })
        }
    }

    // adding the user to the friend list
    static AddToChat = async (req, res) => {
        try {
            //   get id of the user
            const { token, chatWith } = req.body
            // check if the user is exist in the friend model
            const user = await Friend_Model.findOne({ user: token })
            // friend list is not created of adding user then created and add to chat
            if (!user) {
                const addList = await Friend_Model.create({ user: token, friend: [chatWith] })
                res.send({ message: "Successfully Add to chat" })
            }
            //if list is already created then check and add to chat
            else {
                const checkIfExist = await Friend_Model.findOne({
                    user: token,
                    friend: { $in: chatWith }
                })
                if (!checkIfExist) {
                    const addList = await Friend_Model.updateOne({ user: token }, { friend: [...user.friend, chatWith] })
                    res.send({ message: "Successfully Add to chat" })
                }
                else {
                    res.send({ message: "Adready Exist" })
                }

            }

        } catch (error) {
            console.log('error', error)
            res.send({ message: "Something went wrong" })
        }
    }

}

export default ChatController