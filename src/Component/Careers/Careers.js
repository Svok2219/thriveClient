import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroFooter from "../Asset/Footer";
import Hero from "../Asset/Hero";

const Careers = () => {
  const [Mentorship, setMentorship] = useState([]);
  const fetchDataTMentorship = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/MentorshipRouter/getAllMentorshipProgram`
      )
      .then((response) => setMentorship(response.data.content));
  };
  useEffect(() => {
    fetchDataTMentorship();
  }, []);

  const [InternShipOpenings, setInternShipOpenings] = useState([]);
  const fetchDataTInternShipOpenings = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/InternOpeningsRouter/getAllInternship`
      )
      .then((response) => setInternShipOpenings(response.data.content));
  };
  useEffect(() => {
    fetchDataTInternShipOpenings();
  }, []);

  console.log(Mentorship, InternShipOpenings);
  return (
    <div>
      <Hero />
      <h2 className="text-center my-3">
        {" "}
        Here Are Some Mentorship Support We 0ffer
      </h2>

      <div className="row mx-5">
        {Mentorship.map((x) => (
          <div className="col-md-3 text-center">
            <img src={x.Image} className="img-fluid w-5" />
            <div className="text-center ">
              <button className="btns text-center  w-100 py-3 my-2 ">
                <b> Enter Project Details </b>
              </button>
            </div>
            <small>{x.title}</small>
            <h6>{x.PriceDetail}</h6>
          </div>
        ))}

        <p className="text-center mt-5 mb-3">
          To Apply For Refund,{" "}
          <Link to="/Payment" className="text-decoration-none text-light">
            <a class="pe-none" tabindex="-1" aria-disabled="true">
              Click Here
            </a>
          </Link>{" "}
          : )
        </p>
      </div>

      <div className=" teamHeader my-2">
        <h1 className="py-3 text-center text-light">
          Have Some Project Work For Us ?
        </h1>
        <div
          style={{
            backgroundColor: "white",
            padding: "25px 25px",
          }}
        >
          <div classNamae=" ">
            <ol className="text-left mt-3 mx-5">
              <li> Thrivers Community Acess.</li>
              <li className="my-1"> Live doubt-clearing session.</li>
              <li> Project Ideas</li>
              <li className="my-1"> Insights from experts</li>
              <li className="my-1">
                {" "}
                Peer Programmer, Project Team Building & Freelancing
                Opportunity.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className=" teamHeader mb-5">
        <h1 className="py-3 text-center text-light">InternShip Openings</h1>
        <div
          style={{
            backgroundColor: "white",
          }}
        >
          {InternShipOpenings.map((x) => (
            <div className="mx-5 py-5 row">
              <div className="col-md-4">
                <img src={x.Image} className="img-fluid w-100" />
              </div>
              <div className="col-md-8 ">
                <h2 style={{ color: "rgba(34, 110, 147, 1)" }}>{x.title} </h2>
                <div className="text-center ">
                  <Link
                    to="/Payment"
                    className="text-decoration-none text-light"
                  >
                    {" "}
                    <button className="btns text-center  w-100 py-2 my-2 ">
                      {" "}
                      Apply Now{" "}
                    </button>
                  </Link>
                </div>
                <div className="text-center">
                  <span className="font-weight-bold">Opening Details</span>
                </div>
                <div>
                  <span>{x.OpeningDetails}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HeroFooter />
    </div>
  );
};

export default Careers;
