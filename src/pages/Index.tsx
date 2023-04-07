import React from "react";
import { Link } from "react-router-dom";

export default function Index<ReactNode>() {
  return (
    <React.Fragment>
      <div>
        INDEX
        <Link to="/balance">Balance</Link>
      </div>
    </React.Fragment>
  )
}