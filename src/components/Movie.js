import React from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";

const GET_MOVIE = gql``;

export default ({ id }) => (
  <div>
    <Link to={`/${id}`}>{id}</Link>
  </div>
);
