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
    let countInnovative = 0
    let countEffectiveness = 0
    let countUniqueness = 0
    const {voter,idea,innovative,effectiveness,uniqueness} = req.body
  //  assigning value for counting votes
   if(innovative){ countInnovative = 1 } else{ countInnovative=0 }
   if(effectiveness){ countEffectiveness = 1} else{ countEffectiveness =0}
   if(uniqueness){ countUniqueness = 1 }else{ countUniqueness=0}
   const ideaDetail = await IdeaModel.findOne({_id:idea})
   var isExist = false
    ideaDetail.votedBy.map((item)=>{
      if(item == voter){
        console.log("voter gareko xa aba hunna");
        res.send({ err_msg: "You has already voted this idea" })
      }
    })
      const update = await IdeaModel.updateOne({ _id: idea }, { 
        innovative:ideaDetail.innovative+countInnovative,effectiveness:ideaDetail.effectiveness+countEffectiveness,uniqueness:ideaDetail.uniqueness+countUniqueness,
        votedBy:[...ideaDetail.votedBy,voter]
       })
      if (update) {
        console.log("voter vayo");
          res.send({ success_msg: "You voted successfully" })
      }
    
   
  } catch (error) {
  }
  }


}

export default IdeaPostController;
