import React, { useEffect, useState } from "react";
import HeroFooter from "../Asset/Footer";
import Hero from "../Asset/Hero";
import axios from "axios";
import { Link } from "react-router-dom";
import { TeamContext } from "../../App";

import { StickyNav } from "react-js-stickynav";
import "react-js-stickynav/dist/index.css";

const HomePage = () => {
  // console.log(process.env.BACKEND_SERVER);

  const [Partners, setPartners] = useState([]);
  const fetchDataPartners = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/PartnersRouter/getAllPartners`
      )
      .then((response) => setPartners(response.data.content));
  };
  useEffect(() => {
    fetchDataPartners();
  }, []);

  const [Recognized, setRecognized] = useState([]);
  const fetchDataRecognized = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/RecognizedRouter/getAllRecognizers`
      )
      .then((response) => setRecognized(response.data.content));
  };
  useEffect(() => {
    fetchDataRecognized();
  }, []);

  const [Latest, setLatest] = useState([]);
  const fetchDataLatest = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/EventsRouter/getAllEvents`
      )
      .then((response) => setLatest(response.data.content));
  };
  useEffect(() => {
    fetchDataLatest();
  }, []);

  const [Team, setTeam] = useState([]);
  const fetchDataTeam = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/TeamRouter/getAllTeam`
      )
      .then((response) => setTeam(response.data));
  };
  useEffect(() => {
    fetchDataTeam();
  }, []);
  console.log(Partners, Recognized, Latest, Team);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="Project ">
        <h1 className="projectWorkHeading text-center">
          Have Some Project Work For Us ?
        </h1>

        <div
          style={{
            backgroundColor: "rgba(242,242,242,1)",
            padding: "25px 25px",
          }}
        >
          <div classNamae=" ">
            <h6 className="text-secondary text-center ">
              We are also on to paid projects and we do it efficiently and at a
              competitive cost and here are some reasons why you should be
              considering our services :
            </h6>
            <ol className="text-left mt-3 mx-5">
              <li> Completion of project by given deadline.</li>
              <li className="my-1"> Good product and reliable service.</li>
              <li> Customer support even after submission of the project.</li>
              <li className="my-1">
                {" "}
                Any future update would be done completely for FREE.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/EnterProject" classNamae="text-light text-decoration-none">
          <button className="btns text-center  w-25 py-3 my-5 ">
            <b> Enter Project Details </b>
          </button>
        </Link>
      </div>
      <div className="col-md-12 text-center py-3 my-3 teamHeader text-center">
        <h3 className="text-white teamHeaderText ">Thrivers Team Members</h3>
      </div>

      <div className="row mx-5">
        {Team.TeamMentor ? (
          Team.TeamPresident.map((x) => (
            <div className="row">
              <div className="col-md-6 text-center mb-5">
                <img src={x.Image} className="img-fluid w-50" />
              </div>
              <div className="col-md-6 text-center mb-5">
                <h1 className="TeamTitle" style={{ fontSize: "70px" }}>
                  {x.Position}
                </h1>
                <br />
                <h5>
                  <a href={x.LinkedIN} className="TeamTitle">
                    <u>{x.Name}</u>
                  </a>
                </h5>
              </div>
            </div>
          ))
        ) : (
          <span>.....loading.......</span>
        )}

        {Team.TeamMentor ? (
          Team.TeamMentor.map((x) => (
            <div className="col-md-6 mt-1 text-center d-flex justify-content-between align-items-center">
              <img src={x.Image} className="img-fluid w-25" />
              <div className="text-center">
                <h3 className=""> {x.Position}</h3>
                <br />
                <h5>
                  <a href={x.LinkedIN} className="TeamTitle">
                    <u>{x.Name}</u>
                  </a>
                </h5>
              </div>
            </div>
          ))
        ) : (
          <span>.....Loading.....</span>
        )}

        {Team.TeamMentor ? (
          Team.TeamMentor.map((x) => (
            <div className="col-md-3 my-3 text-center justify-content-center px-3 py-2 align-items-center">
              <img src={x.Image} className="img-fluid w-50" />
              <div className="text-center">
                <h3 className="">{x.Position}</h3>
                <h5>
                  <a href={x.LinkedIN} className="TeamTitle">
                    <u>{x.Name}</u>
                  </a>
                </h5>
              </div>
            </div>
          ))
        ) : (
          <span>.....Loading.....</span>
        )}
      </div>

      <div className="col-md-12 text-center py-3 my-3 teamHeader text-center">
        <h3 className="text-white teamHeaderText ">OUR PARTNERS</h3>
      </div>

      <div className="row mx-5">
        {Partners.map((x) => (
          <div className="col-md-4 my-3 text-center justify-content-center px-3 py-2 align-items-center">
            <img src={x.Image} className="img-fluid w-100" />
            <div className="text-center">
              <h3 className="">{x.Title}</h3>
              <h5 className="">
                <u>{x.Name}</u>
              </h5>
            </div>
          </div>
        ))}
        {/* <div className="col-md-4 my-3 text-center justify-content-center px-3 py-2 align-items-center">
          <img
            src="https://lh6.googleusercontent.com/7Q0YdwD7qqvK0fdSPMsmDSm3tG0u3LZkRaQn-0Z3_7uUACPiUgC58U7lVtC8FC542oBHqoKVVaj8YHWRsh4b959XRVbnQepG_Fs7c9xKYtkJUgQcHBJn9HE-PQm5wArYUWFwfUpgj36H5E2pRgv_3Y1WSG0lhbzwVe4gy9DkU9CbGvbM1NOl8Q=w1280"
            className="img-fluid w-100"
          />
          <div className="text-center">
            <h3 className="">Chapter Lead AEC</h3>
            <h5 className="">
              <u>Abhijit Shaw</u>
            </h5>
          </div>
        </div>
        <div className="col-md-4 my-3 text-center justify-content-center px-3 py-2 align-items-center">
          <img
            src="https://lh6.googleusercontent.com/7Q0YdwD7qqvK0fdSPMsmDSm3tG0u3LZkRaQn-0Z3_7uUACPiUgC58U7lVtC8FC542oBHqoKVVaj8YHWRsh4b959XRVbnQepG_Fs7c9xKYtkJUgQcHBJn9HE-PQm5wArYUWFwfUpgj36H5E2pRgv_3Y1WSG0lhbzwVe4gy9DkU9CbGvbM1NOl8Q=w1280"
            className="img-fluid w-100"
          />
          <div className="text-center">
            <h3 className="">Chapter Lead AEC</h3>
            <h5 className="">
              <u>Abhijit Shaw</u>
            </h5>
          </div>
        </div> */}
        {/* <div className="col-md-3 my-3 text-center justify-content-center px-3 py-2 align-items-center">
          <img
            src="https://lh6.googleusercontent.com/7Q0YdwD7qqvK0fdSPMsmDSm3tG0u3LZkRaQn-0Z3_7uUACPiUgC58U7lVtC8FC542oBHqoKVVaj8YHWRsh4b959XRVbnQepG_Fs7c9xKYtkJUgQcHBJn9HE-PQm5wArYUWFwfUpgj36H5E2pRgv_3Y1WSG0lhbzwVe4gy9DkU9CbGvbM1NOl8Q=w1280"
            className="img-fluid w-100"
          />
          <div className="text-center">
            <h3 className="">Chapter Lead AEC</h3>
            <h5 className="">
              <u>Abhijit Shaw</u>
            </h5>
          </div>
        </div> */}
      </div>

      <div className="col-md-12 text-center py-3 my-3 teamHeader text-center">
        <h3 className="text-white teamHeaderText ">RECOGNIZED BY</h3>
      </div>

      <div className="row mx-5">
        {Recognized.map((x) => (
          <div className="col-md-3 my-3 text-center justify-content-center px-3 py-2 align-items-center">
            <img src={x.Image} className="img-fluid w-100" />
            <div className="text-center">
              <h3 className="">{x.Title}</h3>
              <h5 className="">
                <u>{x.Name}</u>
              </h5>
            </div>
          </div>
        ))}
      </div>

      <div className="col-md-12 text-center py-3 my-3 teamHeader text-center">
        <h3 className="text-white teamHeaderText ">Latest Updates</h3>
      </div>
      {Latest.map((x) =>
        x.Images.length >= 2 ? (
          <div className="row mb-5">
            <div class=" col-md-4">
              <div class=" col-md-12 p-2">
                <img
                  src={x.Images[0]}
                  alt="no picture"
                  className="img-fluid w-100"
                />
              </div>
              <div class=" col-md-12 p-2">
                <img
                  src={x.Images[2]}
                  alt="no picture"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div class=" col-md-8 ">
              <img
                src={x.Images[1]}
                alt="no picture"
                className="img-fluid w-100"
              />
            </div>
          </div>
        ) : null
      )}

      <HeroFooter />
    </main>
  );
};

export default HomePage;
