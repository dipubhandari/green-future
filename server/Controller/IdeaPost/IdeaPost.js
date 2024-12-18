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
      const post = await IdeaModel.create({
        ideaTitle,
        idea,
        ideaCategory,
        ideatorId:ideator,
        ideatorName:user.name
           });

      if (post) {
        res.send({ success: "You Posted a Idea successfully...." });
      }
      else{
      }
    }
  };


static IdeaDetail = async(req,res) =>{
  try {
    const data = await IdeaModel.find({_id:req.params.id})
    res.send(data[0])
  } catch (error) {
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
  static VoteIdea = async(req,res)=>{
  try {
    console.log(req.body);
    const {voter,idea,innovative,effectiveness,uniqueness} = req.body
    // const increase
    // const update = await IdeaModel.updateOne({ _id: idea }, { 
    //   innovative,effectiveness,uniqueness,
    
    //  })
    if (update) {
        res.send({ success_msg: "Password is changed" })
    }
    res.send("hello")
  } catch (error) {
    console.log(error);
  }
  }


}

export default IdeaPostController;
