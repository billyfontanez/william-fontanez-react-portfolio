import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h2>We couldn't find that page</h2>
      <iframe src="https://giphy.com/embed/H54feNXf6i4eAQubud" width="480" height="405" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/chicken-bro-H54feNXf6i4eAQubud">via GIPHY</a></p>
      <Link to="/">Return to homepage</Link>
    </div>
  );
}