// 

import React from "react";
import { motion } from "framer-motion";
import "../style/Faq.css";

const Faq = () => {
  return (
    <section id="Faq" className="">
      <div className=" spacer w-100 "></div>
      <div className="w-100 h-50 d-flex align-items-center justify-content-center">
        <img src="src\assets\faq.png" className="w-25 faq-img" alt="" />
      </div>
      <div class="p-2 container mt-5">
        <div class=" accordion " id="accordionExample">
          {/* <!-- Accordion Item 1 --> */}
          <div class=" accordion-item">
            <h2 class=" accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                What is the D.S Preschool And Daycare, Bengaluru fee structure?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The D.S Preschool And Daycare, Bengaluru fee generally ranges from Rs. 6,000 per month for Nursery and can go up to Rs. 10,000 for grade 10 on a monthly basis.
              </div>
            </div>
          </div>

          {/* <!-- Accordion Item 2 --> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="acc accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                What are the age criteria at D.S Preschool And Daycare, Bengaluru for admission?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The age criteria at D.S Preschool And Daycare, Bengaluru for admission is a minimum of 4 years of age for KG 1 and 6 years of age for class 1.
              </div>
            </div>
          </div>

          {/* <!-- Accordion Item 3 --> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Does D.S Preschool And Daycare, Bengaluru provide transportation facilities?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes, the D.S Preschool And Daycare, Bengaluru provides bus facilities to all the students from their homes to school and vice versa.
              </div>
            </div>
          </div>

          {/* <!-- Accordion Item 4 --> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                What are the curricular activities offered by D.S Preschool And Daycare, Bengaluru?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Dance, music, drama, sports, and arts are curricular activities offered by D.S Preschool And Daycare, Bengaluru.
              </div>
            </div>
          </div>

          {/* <!-- Accordion Item 5 --> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                Are admissions open at D.S Preschool And Daycare, Bengaluru?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes, the admissions are open at D.S Preschool And Daycare, Bengaluru.
              </div>
            </div>
          </div>

          {/* <!-- Accordion Item 6 --> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                What documents are required for admission to D.S Preschool And Daycare, Bengaluru?
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The documents required for a child’s admission include the child's birth certificate, past academic records, proof of residence, passport-size photographs, and a medical certificate.
              </div>
            </div>
          </div>
          {/* <!-- Accordion Item 7 --> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                What academic boards are D.S Preschool And Daycare, Bengaluru affiliated with?
              </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The D.S Preschool And Daycare, Bengaluru is affiliated with CBSE and state boards.

              </div>
            </div>
          </div>
          {/* <!-- Accordion Item 8 --> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                What are the safety and security measures taken by D.S Preschool And Daycare, Bengaluru for the students?
              </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The school is monitored under CCTV cameras. The teaching staff takes care of the students inside the campus. Additionally, security guards are present at the entrance.
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Faq;
