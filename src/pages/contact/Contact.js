import React from "react";
import ContactLeft from "../../components/contact/ContactLeft";
import ContactRight from "../../components/contact/ContactRight";
import ContactRB from "../../assets/contact_circle.svg";

function Contact() {
  return (
    <div className="ext-bg">
    <img src={ContactRB} alt="" className="contactRB" />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <ContactLeft />
          </div>
        </div>
        <div className="col-md-6">
          <ContactRight />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
