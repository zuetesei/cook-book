import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function UserRecipes() {
  return (
    <div className="favRecipes">
      <h1>
        {" "}
        <MenuBookIcon /> My Recipes{" "}
      </h1>
      <ul>
        <li> Recipe 1 </li>
        <li> Recipe 2 </li>
        <li> Recipe 3 </li>
        <li> Recipe 4 </li>
      </ul>
    </div>
  );
}

export default UserRecipes;
