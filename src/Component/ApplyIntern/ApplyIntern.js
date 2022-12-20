import React, { useRef } from "react";
import HeroFooter from "../Asset/Footer";
import Hero from "../Asset/Hero";

const ApplyInterns = () => {
  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  const formEl = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://thrivers-assignment-server.onrender.com/InternOpeningsRouter/Apply",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formEl.current.elements[0].value,
          Email: formEl.current.elements[1].value,
          ContactNumber: formEl.current.elements[2].value,
          College: formEl.current.elements[3].value,
          Branch: formEl.current.elements[4].value,
          PassoutYear: formEl.current.elements[5].value,
          OpeningTitle: formEl.current.elements[6].value,
          Resume: formEl.current.elements[7].value,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        // navigate("/success");
        console.log(result);
        if (result.success == true) {
          window.alert("Submit Successful");
        } else {
          window.alert("Couldn't sent Submit request");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.success == false) {
          window.alert(err.content);
        }
      });
  };

  return (
    <div>
      <Hero />

      <div className="container h-100 d-md-flex align-items-center my-5 justify-content-center">
        <div className="mb-md-0 mb-3">
          <h2>Apply For Internships : </h2>
          <span>List of things to keep in mind : </span>
          <ol className="mx-1 mt-4 font-weight-bold">
            <li>We expect only serious candidates to fill this.</li>
            <li>
              We expect every intern to be respectful of time and be punctual.
            </li>
            <li>
              {" "}
              Unprofessional behavior may lead to termination of internship or
              temporary or even permanent ban from Thrivers Wagmi.
            </li>
          </ol>
          <br />
        </div>
        <form
          ref={formEl}
          onSubmit={handleSubmit}
          className="row g-3 needs-validation "
          novalidate
        >
          <div className="col-md-4 position-relative">
            <label for="validationTooltip01" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="Name"
              className="form-control"
              id="validationTooltip01"
              placeholder="Mark Watney"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip02" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="Email"
              className="form-control"
              id="validationTooltip02"
              placeholder="watney@mars.com"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip2" className="form-label">
              ContactNumber
            </label>
            <input
              type="number"
              name="ContactNumber"
              className="form-control"
              id="validationTooltip02"
              placeholder="0123654789"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-6 position-relative">
            <label for="validationTooltip3" className="form-label">
              College
            </label>
            <input
              type="text"
              name="College"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">
              Please provide your College Name.
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip04" className="form-label">
              Branch
            </label>
            <input
              type="text"
              name="Branch"
              className="form-control"
              id="validationTooltip04"
              required
            />
            <div className="invalid-tooltip">
              Please provide your College;s branch Name.
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip05" className="form-label">
              Year of Pass out
            </label>
            <input
              type="number"
              name="PassOutYear"
              className="form-control"
              id="validationTooltip05"
              required
            />
            <div className="invalid-tooltip">
              Please provide your Passout year
            </div>
          </div>
          <div className="col-md-6 ">
            <label for="validationTooltip03" className="form-label">
              Applying for ? Opening Title
            </label>
            <input
              type="text"
              name="FormProvider"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">
              What is the Titleyou are applying for?
            </div>
          </div>
          <div className="col-md-6 ">
            <label for="validationTooltip03" className="form-label">
              Upload Your resume
            </label>
            <input
              type="text"
              name="FormProvider"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">input url of your resume?</div>
          </div>
          <button className="btns  col-md-12 py-3 font-weight-bolder">
            Apply Now
          </button>
        </form>
      </div>

      <HeroFooter />
    </div>
  );
};

export default ApplyInterns;
