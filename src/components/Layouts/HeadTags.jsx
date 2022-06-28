import React from "react";
import { Helmet } from "react-helmet";

function HeadTags({ title, description }) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  );
}
export default HeadTags;
