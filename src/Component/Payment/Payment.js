import React, { useRef, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import Hero from "../Asset/Hero";
import HeroFooter from "../Asset/Footer";

const Payment = () => {
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
  const Charge = useRef();

  const navigate = useNavigate();
  const [formValue, setFormvalue] = useState();
  const [openPaymentButton, setopenPaymentButton] = useState(false);
  const [amount, setamount] = useState(49);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormvalue(formEl.current.elements);
    // console.log(formValue);
    setopenPaymentButton(true);

    // console.log(
    //   formEl.current.elements[0].value,
    //   formEl.current.elements[1].value,
    //   formEl.current.elements[2].value,
    //   formEl.current.elements[3].value,
    //   formEl.current.elements[4].value,
    //   formEl.current.elements[5].value,
    //   formEl.current.elements[6].value
    // );
  };

  const handleToken = (token) => {
    fetch("https://thrivers-assignment-server.onrender.com/payment/payout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert(`!Payment Recived!
        ... Sending data to server......`);
        fetch(
          "https://thrivers-assignment-server.onrender.com/MentorshipRouter/postOrder",
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
              FormProvider: formEl.current.elements[6].value,
            }),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result.success);
            if (result.success == false) {
              window.alert("Request couldn't sent to server");
            } else {
              window.alert("Request sent to server");
              navigate("/success");
            }
          });
        // .catch((err) => {
        //   console.log(err);
        // });
      })
      .catch((_) => window.alert("Transaction Failed."));
  };
  // console.log(Charge);
  const handleRefund = () => {
    fetch("https://thrivers-assignment-server.onrender.com/payment/refund", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        charge: Charge.current.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // navigate("/success");
        console.log(result);
        if (result.success == true) {
          window.alert("Refund Successful");
        } else {
          window.alert("Couldn't sent refund request");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.success == false) {
          window.alert(err.content);
        } else {
          window.alert("Refund Successful");
        }
      });
  };
  return (
    <>
      <Hero />

      <div className="container h-100 d-md-flex align-items-center my-5 justify-content-center">
        <div className="mb-md-0 mb-3">
          <h2>Confirm Your Payment to Thrivers Wagmi</h2>
          <span>
            We are a platform that encourages you to be a skilled, financially
            independent student learner and upcoming professional : )
          </span>
          <br />
          <small>Paybale total : $</small>
          <b className="font-weight-bolder">49</b>

          <div className="mx-1 mt-2  ">
            <input
              type="text"
              className="w-100"
              placeholder="Enter Charge Number"
              ref={Charge}
            />
            <br />
            <button
              className="mt-1 w-25 outline-dark btns py-2"
              onClick={handleRefund}
            >
              Refund
            </button>
          </div>
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
              Form provider's name
            </label>
            <input
              type="text"
              name="FormProvider"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">
              Please provide your Form provider's Name.
            </div>
          </div>

          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
            token={handleToken}
            name=""
            panelLabel={`Pay`}
            currency="USD"
            amount={amount * 100}
          >
            <button className="btns col-md-12 text-center py-3">
              Proceed to Checkout
            </button>
          </StripeCheckout>
        </form>
      </div>
      <HeroFooter />
    </>
  );
};

export default Payment;
