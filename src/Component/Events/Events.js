import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroFooter from "../Asset/Footer";
import Hero from "../Asset/Hero";

const Events = () => {
  const [Events, setEvents] = useState([]);
  const fetchDataEvents = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/EventsRouter/getAllEvents`
      )
      .then((response) => setEvents(response.data.content));
  };
  useEffect(() => {
    fetchDataEvents();
  }, []);
  console.log(Events);
  return (
    <div>
      <Hero />

      {/* <p
        style={{
          color: "rgba(34, 110, 147, 1)",
          fontSize: "40px",
          fontFamily: "Lato, sans-serif",
          textAlign: "center",
        }}
      >
        Induction Session batch of'26 | CSE - IT - ECE ~ AEC
      </p> */}

      {/* <div className="col-md-12 text-center py-3 my-3 teamHeader text-center">
        <h3 className="text-white teamHeaderText ">Events Updates</h3>
      </div> */}
      {/* <div class="row mx-5 my-2 text-center">
        <div class=" col-md-4">
          <div class=" col-md-12 p-2">
            <img
              src="https://lh3.googleusercontent.com/Bf5CAZN4kvOO-WSQqWnZHCBlgnnVx08_RFcTf-qvticV7QdW0o5oqzmysmjLRwo5SPaq27cxsGFmTwHLHWAabUAJFjdlcbabv427eXWeGIcHgHGWpeLgfoF9xvxtUm9THk8bG2hQ0h-Zl5mBVhcxC3_HkCvLC0hiMjgcH5ZmNW-smSd5EOs3Xw=w1280"
              className="img-fluid w-100"
            />
          </div>
          <div class=" col-md-12 p-2">
            <img
              src="https://lh3.googleusercontent.com/A_blxKlz3gTuD2vZxq0aluedNGZk2Ffh9dFvwZlIqVGEmQsYnvXgvu-C0-3rfKgXRsjscHnGPzTvzwtIg4LU8XQ_hnQvM_EmBiRo36n3SqMHIW-6CCXIgOEkwyQ0pCLN31u1ia9pV2gWttGdfQ2-_GTG-MR6MJrFDf4c-jHhQ9wsxSooqt9lmA=w1280"
              className="img-fluid w-100"
            />
          </div>
        </div>
        <div class=" col-md-8 ">
          <img
            src="https://lh3.googleusercontent.com/r3E4PjwRZ6D6zwtqbVCOBqlR7UKCvd6-w3pEpqRhFlLoHrDf2wqXoCs-RVHCNi4OzYB9eZaiZANNJwCci8d2LlrEI58kxykLU1OE1uLooTe_FvwVD1aYbvbtdKTZ34Ch87nohXzDFaCMcGIxtI2HL64ueuOg1QMUdkapW4F4VWLSXyF4BrWnng=w1280"
            className="img-fluid w-100"
          />
        </div>
        <small className="my-5 font-weight-bold">Date : 19/10/2022</small>
      </div> */}

      {Events.map((x) => (
        <div>
          <div className="col-md-12 text-center py-3 my-3 teamHeader text-center">
            <h3 className="text-white teamHeaderText ">{x.title} </h3>
          </div>

          <div class="row mx-5 my-2 text-center">
            {x.Images.length % 2 == 0 ? (
              x.Images.map((y) => (
                <div class=" col-md-6 p-5">
                  <img src={y} className="img-fluid w-100" />
                  <h5
                    style={{
                      color: "rgba(34, 110, 147, 1)",
                      fontSize: "20px",
                      fontFamily: "Lato, sans-serif",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  >
                    {x.title}
                  </h5>
                </div>
              ))
            ) : (
              <div className="row">
                <div class=" col-md-4">
                  <div class=" col-md-12 p-2">
                    <img src={x.Images[0]} className="img-fluid w-100" />
                  </div>
                  <div class=" col-md-12 p-2">
                    <img src={x.Images[2]} className="img-fluid w-100" />
                  </div>
                </div>
                <div class=" col-md-8 ">
                  <img src={x.Images[1]} className="img-fluid w-100" />
                </div>
              </div>
            )}
            <small className="my-5 font-weight-bold">Date : {x.Date}</small>

            {/* <div class=" col-md-6 p-5">
              <img
                src="https://lh3.googleusercontent.com/r3E4PjwRZ6D6zwtqbVCOBqlR7UKCvd6-w3pEpqRhFlLoHrDf2wqXoCs-RVHCNi4OzYB9eZaiZANNJwCci8d2LlrEI58kxykLU1OE1uLooTe_FvwVD1aYbvbtdKTZ34Ch87nohXzDFaCMcGIxtI2HL64ueuOg1QMUdkapW4F4VWLSXyF4BrWnng=w1280"
                className="img-fluid w-100"
              />
              <h5
                style={{
                  color: "rgba(34, 110, 147, 1)",
                  fontSize: "20px",
                  fontFamily: "Lato, sans-serif",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {x.title}
              </h5>
            </div> */}
          </div>
        </div>
      ))}

      <HeroFooter />
    </div>
  );
};

export default Events;
