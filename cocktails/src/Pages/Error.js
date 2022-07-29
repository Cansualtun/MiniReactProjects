import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="text-center">
      <h2 style={{ marginTop: 200 }}>Opss! We are confusing..</h2>
      <Link to="/">
        <button type="button" class="btn btn-warning">
          Back To Home
        </button>
      </Link>
    </div>
  );
}

export default Error;
