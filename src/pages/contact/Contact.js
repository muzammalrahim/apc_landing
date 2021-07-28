import React from "react";
import ContactLeft from "../../components/contact/ContactLeft";
import ContactRight from "../../components/contact/ContactRight";

function Contact() {
  return (
    <div className="container-fluid">
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
  );
}

export default Contact;
