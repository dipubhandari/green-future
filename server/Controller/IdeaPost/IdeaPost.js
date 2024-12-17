import IdeaModel from "../../model/PostIdea.js";
import User_Model from "../../model/User.js";

class IdeaPostController {
  // when user post a idea this runs
  static IdeaPost = async (req, res) => {
    // getting the data from frontend
    const { ideaTitle, idea, ideaCategory, ideator } = req.body;
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
        ideatorId:ideator,
        ideatorName:user.name
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


static IdeaDetail = async(req,res) =>{
  try {
    const data = await IdeaModel.find({_id:req.params.id})
    console.log(data[0]);
    res.send(data[0])
  } catch (error) {
    console.log(error);
  }
}


  static IdeaApi = async (req, res) => {
    try {
      const AllIdeas = await IdeaModel.find()
        AllIdeas.map(()=>{

        })
      res.send(AllIdeas)
    } catch (error) {}
  };

  static deleteIdea = async(req,res)=>{
    await IdeaModel.deleteMany();
         res.send("deleted")
  }
}

export default IdeaPostController;
