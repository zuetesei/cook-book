import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const categories = [
    // {
    //   name: "commercial",
    //   description:
    //     "Photos of grocery stores, food trucks, and other commercial projects",
    // },
    // { name: "portraits", description: "Portraits of people in my life" },
    // { name: "food", description: "Delicious delicacies" },
    // {
    //   name: "landscape",
    //   description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    // },
  ];

  // const handleClick = () => {
  //   console.log("click handled");
  // };

  return (
    <nav class="navbar navbar-expand-lg bg-light nav1">
      <div class="nav2 container-fluid">
        <a class="navbar-brand" href="#">
          OnlyCooks
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                *My Cookbook*
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
