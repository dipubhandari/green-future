import IdeaModel from "../../model/PostIdea.js";
import User_Model from "../../model/User.js";

class IdeaPostController {
  // when user post a idea this runs
  static IdeaPost = async (req, res) => {
    // getting the data from frontend
    const { ideaTitle, idea, ideaCategory, ideator } = req.body;
    console.log("this runs");

    console.log(req.body);
    console.log(req.body.ideator);
    // // validating the data
    if (
      !(
        ideaTitle &&
        idea &&
        ideaCategory &&
         ideator
      )
    ) {
      res.send({ error: "Please enter all the fields..." });
    } else {
      const user = await User_Model.findOne({ _id: ideator });
      console.log(user);
      const post = await IdeaModel.create({
        ideaTitle,
        idea,
        ideaCategory,
        ideator
      });

      if (post) {
        console.log('idea posted');
        res.send({ success: "You Posted a Idea successfully...." });
      }
      else{
        console.log('something is wrong');
      }
    }
  };

  static IdeaApi = async (req, res) => {
    try {
      const AllIdeas = await IdeaModel.find()
      res.send(AllIdeas)
    } catch (error) {}
  };
}

export default IdeaPostController;
