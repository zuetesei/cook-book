import React from "react";

function About() {
  return (
    <section className="my-5">
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
