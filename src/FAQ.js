import React from "react";
import "./faq.css";

const FAQ = () => {
  return (
    <div className="card-body">
    <div class="container1">
      <div class="wrapper_1">
        <div class="desktop_img">
          <div className="img">
            <img src="/images/illustration-box-desktop.svg" alt="desktop" />
          </div>
        </div>
        <div className="mobile_img">
          <img src="/images/illustration-woman-online-mobile.svg" />
        </div>

        <div className="mobile_img">
          <img
            src="/images/illustration-woman-online-mobile.svg"
            alt="mobile"
          />
        </div>
      </div>
      <div class="wrapper_2">
        <h1>FAQ</h1>
        <ul>
          <li class="heading">
            <div className="question">
              <p>How many team members can I invite?</p>
              <img
                className="arrow-down"
                src="/images/icon-arrow-down.svg"
                alt="down"
              />
            </div>
            <div class="reply sub_heading">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </div>
          </li>
          <li class="heading">
            <div class="question">
              <p>What is the maximum file upload size?</p>
              <img
                className="arrow-down"
                src="/images/icon-arrow-down.svg"
                alt="down"
              />
            </div>
            <div class="reply sub_heading">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </div>
          </li>
          <li class="heading">
            <div class="question">
              <p>How do I reset my password?</p>
              <img
                className="arrow-down"
                src="/images/icon-arrow-down.svg"
                alt="down"
              />
            </div>
            <div class="reply sub_heading">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </div>
          </li>
          <li class="heading">
            <div class="question">
              <p>Can I cancel my subscription?</p>
              <img
                className="arrow-down"
                src="/images/icon-arrow-down.svg"
                alt="down"
              />
            </div>
            <div class="reply sub_heading">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </div>
          </li>
          <li class="heading">
            <div class="question">
              <p>Do you provide additional support?</p>
              <img
                className="arrow-down"
                src="/images/icon-arrow-down.svg"
                alt="down"
              />
            </div>
            <div class="reply sub_heading">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>

  );
};

export default FAQ;
