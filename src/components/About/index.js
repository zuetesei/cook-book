import React from "react";

function About() {
  return (
    <section className="my-5">
      <div class="custom-shape-divider-bottom-1669850492">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <h1 id="about">What is OnlyCooks?</h1>
      {/* <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
      <div className="my-2">
        <p>
          OnlyCooks is a blogging site that helps to connect people who are
          interested in cooking, creating, and sharing recipes! Come dicuss
          anything with your fellow chefs about any types of cuisine, anytime,
          any place, for any reason!
        </p>
      </div>
      <div class="logform">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Email:
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter email address"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Password:
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter password"
          ></input>
        </div>
        <button type="button" class="btn btn-warning">
          Login
        </button>
        <button type="button" class="btn btn-warning">
          Sign up
        </button>
      </div>
    </section>
  );
}

export default About;
