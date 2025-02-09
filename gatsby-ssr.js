import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
    <link
      key="adobe-fonts"
      rel="stylesheet"
      href="https://use.typekit.net/qxh8qkc.css?subset=latin-ext"
    />,
  ]);
};
