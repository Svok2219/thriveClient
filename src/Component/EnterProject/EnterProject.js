import React, { useRef } from "react";
import HeroFooter from "../Asset/Footer";
import Hero from "../Asset/Hero";

const EnterProject = () => {
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

    fetch("https://thrivers-assignment-server.onrender.com/ProjectRouter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: formEl.current.elements[0].value,
        Email: formEl.current.elements[1].value,
        ContactNumber: formEl.current.elements[2].value,
        ProjectTitle: formEl.current.elements[3].value,
        Description: formEl.current.elements[4].value,
        Deadline: formEl.current.elements[5].value,
        SRS: formEl.current.elements[6].value,
      }),
    })
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
        } else {
          window.alert("Submit Successful");
        }
      });
  };

  return (
    <div>
      <Hero />

      <div className="container h-100 d-md-flex align-items-center my-5 justify-content-center">
        <div className="mb-md-0 mb-3">
          <h2>Upload Your Project Details</h2>
          <span>
            It's our commitment to deliver the desirable product at affordable
            cost : ) Our Email : support@thriverswagmi.com)
          </span>
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
              Organization Name
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
              ProjectTitle
            </label>
            <input
              type="text"
              name="College"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">
              Please provide your ProjectTitle.
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip04" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="Description"
              className="form-control"
              id="validationTooltip04"
              required
            />
            <div className="invalid-tooltip">
              Please provide a Description .
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip05" className="form-label">
              Enter the due Deadline
            </label>
            <input
              type="text"
              name="Deadline"
              className="form-control"
              id="validationTooltip05"
              required
            />
            <div className="invalid-tooltip">Enter the due Deadline</div>
          </div>
          <div className="col-md-6 ">
            <label for="validationTooltip03" className="form-label">
              SRS
            </label>
            <input
              type="text"
              name="SRS"
              placeholder="Provide us a SRS link"
              className="form-control"
              id="validationTooltip03"
              ssssssssssssssssssssssssssssssssssssss
              required
            />
            <div className="invalid-tooltip">Provide us a SRS link</div>
          </div>
          <button className="btns  col-md-12 py-3 font-weight-bolder">
            Contact US
          </button>
        </form>
      </div>
      <div className="text-center mb-5">
        <iframe
          className=""
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233838.0391923059!2d86.981235!3d23.685992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022529%3A0xf888f7e7fd11cefe!2sAsansol%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1671048155922!5m2!1sen!2sus"
          width="1000"
          height="400"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <HeroFooter />
    </div>
  );
};

export default EnterProject;
