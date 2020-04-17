import React from 'react';
import Card from "./Card";
import * as Information from "./Information";

const classCard = ({ title, when="", where="", margin }) => {
  return (
      <Card margin={margin}>
        <div>
          <Information.title>{title}</Information.title>
          <Information.description>{when}</Information.description>
          <Information.description>{where}</Information.description>
        </div>
      </Card>
  );
};

export default classCard;
