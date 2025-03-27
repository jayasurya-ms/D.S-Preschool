import React from "react";

function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" style={{ display: "flex", padding: "50px", backgroundColor: "", justifyContent:"space-between", alignItems:'center' }} className="contactsection">
      <img src="src\Assets\choose.jpg" alt="Why Choose Us" style={{ borderRadius: "50%" }} className="image shadow"/>
      <div style={{marginLeft:'1%',marginTop:'3%'}}>
        <h2>Why Choose Us? </h2>
        <h2>The best Puppy Breeders in Bangalore</h2>
        <p>We provide the best care and quality puppies. Trust us for your new furry family member! We only offer the best and healthiest quality puppies.</p>
       <button style={buttonStyle}> <a  className="form-link" href="https://docs.google.com/forms/d/e/1FAIpQLScf6actMecVBa2hly2ztjmOHBaH9VzQ0Ee4c2-11ayaCgCoog/viewform?usp=sharing" >
         ContactUs
       </a></button>
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


export default WhyChooseUsSection;
