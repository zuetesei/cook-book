import React from "react";
import { useState } from "react";
// import library to use w/ data
// import "../../styles/Upload.css/";

export const FileUploader = ({}) => {
  const [file, setFile] = useState(null);
  const onIpnutChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file);

    // we need to send the data to library
  };

  return (
    <form method="post" action="#" id="#" onSubmit={onSubmit}>
      <div class="form-group files">
        <label>Upload Your File</label>
        <input
          type="file"
          onChange={onIpnutChange}
          class="form-control"
          multiple=""
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
