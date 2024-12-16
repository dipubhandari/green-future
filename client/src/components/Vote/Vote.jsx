import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/Hero";
import "./Vote.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { server } from "../../config";
import Footer from "../Footer/Footer";
import { apply } from "../../redux/applySlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Vote = () => {
  //
  const dispatch = useDispatch();

  // post detail state
  const [ideaDetail, setDetail] = useState({});

  // getting id from url
  const path = useLocation().pathname;
  // useEffect(() => {
  //     const paths = path.split('/')
  //     const token = paths[paths.length - 1]
  //     console.log(token)
  //     async function getDetails() {
  //         await axios.get(`${server}/idea-post-detail/${token}`).then((response) => {
  //             // console.log(first)
  //             const data = { ...response.data.companydetail, ...response.data.ideadetail }
  //             setDetail(data)
  //             console.log(data)
  //         }).catch(() => {

  //         })
  //     }
  //     getDetails()

  //     console.log(ideaDetail)

  // }, [])

  return (
    <div>
      <ToastContainer />

      <div className="apply_page_container">
        <section className="company">
          <section className="company_detail_nav">
            <img src={`${server}/uploads/logo/${ideaDetail.logo}`} alt="" />
            <h2>{ideaDetail.companyname}</h2>
          </section>
          <section className="company_detail">
            <p>{ideaDetail.description}</p>
          </section>
        </section>

        <section className="idea_details">
          <section className="idea_position_apply"></section>{" "}
          <h4 className="idea_summary_title">Vote This Idea</h4>
          {/* detail here */}
          <div class="ideacontainer">
            <h1 className="ideaDetailTitleVote">Title of the idea</h1>
            <p className="ideaDetailPara">Here is the idea of the user </p>

            <div class="ideaCard">
              <div class="ideaCard-itemVote">
                <h3>Innovativeness</h3>
                <p style={{ display: "flex", margin:"auto", padding: "10px" }}>
                  <b  style={{margin:"10px"}}>NO</b>
                  <div className="toggle" style={{margin:"10px"}}>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <b  style={{margin:"10px"}}>Yes</b>
                </p>
              </div>
              <div class="ideaCard-itemVote">
                <h3>Effectiveness</h3>
                <p style={{ display: "flex", margin:"auto", padding: "10px" }}>
                  <b  style={{margin:"10px"}}>NO</b>
                  <div className="toggle" style={{margin:"10px"}}>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <b  style={{margin:"10px"}}>Yes</b>
                </p>
              </div>
              <div class="ideaCard-itemVote">
                <h3>Uniqueness</h3>
                <p style={{ display: "flex", margin:"auto", padding: "10px" }}>
                  <b  style={{margin:"10px"}}>NO</b>
                  <div className="toggle" style={{margin:"10px"}}>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <b  style={{margin:"10px"}}>Yes</b>
                </p>
              </div>
            </div>
            <br />

            <br />
            <Link to={`/vote-idea/1`} class="ideabutton">
              Confirm Vote
            </Link>
          </div>
        </section>

        <section className="other_ideas"></section>
      </div>
    </div>
  );
};

export default Vote;
