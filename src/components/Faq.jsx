import React from "react";
import "../style/Faq.css";
import logo from '../assets/faq.png';

const Faq = () => {
  const faqs = [
    { id: "collapse2", qns: "What are the age criteria at D.S Preschool And Daycare, Bengaluru for admission?", ans: "The age criteria at D.S Preschool And Daycare, Bengaluru for admission is a minimum of 2 to 5 years of age." },
    { id: "collapse3", qns: "Does D.S Preschool And Daycare, Bengaluru provide transportation facilities?", ans: "Yes, the D.S Preschool And Daycare, Bengaluru provides bus facilities to all the students from their homes to school and vice versa." },
    { id: "collapse4", qns: "What are the curricular activities offered by D.S Preschool And Daycare, Bengaluru?", ans: "Dance, music, drama, sports, and arts are curricular activities offered by D.S Preschool And Daycare, Bengaluru." },
    { id: "collapse5", qns: "What documents are required for admission to D.S Preschool And Daycare, Bengaluru?", ans: "The documents required for a child’s admission include the child's birth certificate, past academic records, proof of residence, passport-size photographs, and a medical certificate." },
    { id: "collapse6", qns: "What academic boards are D.S Preschool And Daycare, Bengaluru affiliated with?", ans: "The D.S Preschool And Daycare, Bengaluru is affiliated with CBSE and state boards." },
    { id: "collapse7", qns: "What are the safety and security measures taken by D.S Preschool And Daycare, Bengaluru for the students?", ans: "The school is monitored under CCTV cameras. The teaching staff takes care of the students inside the campus. Additionally, security guards are present at the entrance." }
  ];

  return (
    <section id="Faq" className="w-100 h-100 d-flex flex-column align-items-center">
      <div className="spacer w-100 "></div>
      <div className="w-100 h-50 d-flex align-items-center justify-content-center ">
        <img src={logo} className="faq-img" alt="" />
      </div>
      <div className="accordion d-flex gap-3 flex-column" id="accordionExample">
        <div className="accordion-item border-0">
            <h3 className="accordion-header">
              <button className="accordion-button rounded-3 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                "What is the D.S Preschool And Daycare, Bengaluru fee structure?"
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body rounded-3">
                "Please register yourself on the website or contact and our admissions team would guide you to the D.S Pre-school"
              </div>
            </div>
          </div>
        {faqs.map((faq) => (
          <div className="accordion-item border-0">
            <h3 className=" accordion-header">
              <button className="accordion-button rounded-3 m-0" type="button" data-bs-toggle="collapse" data-bs-target={"#"+faq.id}>
                {faq.qns}
              </button>
            </h3>
            <div id={faq.id} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div className="accordion-body rounded-3">
                {faq.ans}
              </div>
            </div>
          </div>
        ))}
      </div >
      <div className="spacer w-100 "></div>
    </section >
  );
};

export default Faq;
