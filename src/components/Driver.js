/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import user from "../images/user.png";
import edit from "../images/edit.png";

const Driver = ({ name, rides, ratings, status }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <img src={user} width={46} height={46} />
        <p className="text-base">{name}</p>
      </div>
      <img src={edit} width={16} height={16} className="-ml-14" />
      <div className="w-[57px] h-[31px] flex justify-center items-center border border-gray-300 text-base -ml-20">
        {rides}
      </div>
      <p className="text-base">{ratings} ⭐</p>
      <div className="w-[70px] h-[28px] bg-[#baf2e1] flex justify-center items-center">
        <p className="text-base">{status}</p>
      </div>
    </div>
  );
};

export default Driver;
