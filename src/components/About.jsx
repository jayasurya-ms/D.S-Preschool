import React from "react";

function About() {
  return (
    <section id="About" className="contactsection" style={{ backgroundColor: "#f3e5f5" }}>
      <div className="spacer w-100"></div>
      <div style={{ display: "flex", padding: "50px", justifyContent: "space-between", alignItems: 'center' }}>
        <img src="src\Assets\aboutus.png" alt="Why Choose Us" style={{ borderRadius: "50%", width: "600px" }} className="image shadow " />
        <div className="p-4 " style={{ marginLeft: '2%', marginTop: '3%' }}>
          <h1 className="p-2 " style={{ backgroundColor: "pink", width: "320px", borderRadius: "6px" }}>Why Choose Us? </h1>
          <h1>D.S Educational Trust Preschool and Daycare is one of the finest schools in BTM layout.</h1>
          
            <p className="fs-5" >School management takes extra efforts for the care and safety of kids and staffs. </p>
            <p className="fs-5" >Children are taught practically things and they have excercise activities as a everyday schedule, 
                to keep good fit. On the order of priority, caretakers, staffs and management put lot of potential efforts to get kid good foundation. </p>
          
          <button style={buttonStyle}> <a className="form-link" href="https://docs.google.com/forms/d/e/1FAIpQLScf6actMecVBa2hly2ztjmOHBaH9VzQ0Ee4c2-11ayaCgCoog/viewform?usp=sharing" >
            ContactUs
          </a></button>
        </div>
      </div>
    </section>
  );
}
const buttonStyle = {
  padding: "8px 16px",
  backgroundColor: "#8e44ad",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",

};


export default About;
