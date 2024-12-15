// page for ideas on the homepage

// import { post } from './post'
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HomeIdea.css";
import { server } from "../../config";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Ideas from "../../utils/dummyData";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { HiEye } from "react-icons/hi2";

const HomeIdea = () => {
 
  const [latestIdea, setLatestIdea] = useState(Ideas);

  useEffect(() => {
   console.log(Ideas[0]);
    // fetching latest job
    // const latestJob = async () => {
    //   const posts = await axios
    //     .get(`${server}/api/jobpost`)
    //     .then((response) => {
    //       setLatestIdea(Ideas);
    //     //   console.log();
    //     });
    // };
    // latestJob();
  }, []);

  return (
    <>
      <h4 className="idea_title">
        <span>Top Trending Ideas ({latestIdea.length})</span>
      </h4>

      <div className="idea_container">
        <section className="idea_content">
          {latestIdea.map((item, id) => {
            return (
          
              <section className="idea_Card" key={id}>

             <div className="top_idea_card">
             <section className="ideator_logo">
                  {/* <img src={`${server}/uploads/logo/${item.logo}`} alt="" /> */}
                  <img src={item.image} alt="LOADING" />
              
                </section>

                <section className="idea_category">
                  <h6 className="name">Idea Title :{item.ideator}</h6>
                  <span className="ideatitle">Idea Category: {item.topic}</span>
                  <span className="ideaLocation">Posted By: {item.postedBy}</span>
                  <span className="view_more">View Idea...</span>
                  <span className="idea_record">
                 <span> <AiFillLike/> {item.likes}</span>
                  <span> <AiFillDislike/>{item.dislikes}</span>
                  <span className="eye"> <HiEye/>{item.views}</span>
                  </span>
                </section>
             </div>
                <div className="rating_box">
                <NavLink
                  to={`job-post-detail/${item._id}`}
                  className="idea_rating"
                >
                  <span className="rate_on">Innovative</span> 
                  <span className="stars">
                    {item.rating.innovative}
                    </span>
                </NavLink>
                <NavLink
                  to={`job-post-detail/${item._id}`}
                  className="idea_rating"
                >
                <span className="rate_on">Uniqueness</span> 
                <span className="stars">
                  
                    {item.rating.uniqueness}
                  
                </span>
                </NavLink>
                <NavLink
                  to={`job-post-detail/${item._id}`}
                  className="idea_rating"
                >
                 <span className="rate_on">Effectiveness</span> 
                 <span className="stars">                    {item.rating.effectiveness}
                 </span>
                </NavLink>
              </div>
              </section>
               
            
            );
          })}{" "}
        </section>
      </div>

      <h4 className="viewbtn">
        <Link to="/jobs" className="viewbtnlink">
          View All
        </Link>
      </h4>
    </>
  );
};

export default HomeIdea;
