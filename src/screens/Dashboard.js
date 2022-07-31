/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import overview from "../images/overview.png";
import add from "../images/add.png";
import support from "../images/support.png";
import profile from "../images/profile.png";
import settings from "../images/settings.png";
import mail from "../images/mail.png";
import bell from "../images/bell.png";
import avatar from "../images/avatar.png";
import ti from "../images/ti.png";
import ai from "../images/ai.png";
import td from "../images/td.png";
import tv from "../images/tv.png";
import { Graph } from "../components/Graph";
import Drivers from "../components/Drivers";

const Dashboard = () => {
  return (
    <div className="bg-[#F7F8FA] flex">
      <div className="bg-white w-[350px] border flex  flex-col pt-10 pl-10 gap-y-20">
        <p style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 40 }}>
          Bhada
        </p>
        <div className="flex flex-col gap-y-7">
          <div className="flex gap-x-9">
            <img src={overview} />
            <p
              style={{
                fontFamily: "Mulish",
                fontWeight: 200,
                fontStyle: "italic",
                fontSize: 18,
                color: "#0090FF",
              }}
            >
              Overview
            </p>
          </div>
          <div className="flex gap-x-9">
            <img src={add} />
            <p
              style={{
                fontFamily: "Mulish",
                fontWeight: 200,
                fontStyle: "italic",
                fontSize: 18,
              }}
            >
              Add Driver
            </p>
          </div>
          <div className="flex gap-x-9">
            <img src={support} />
            <p
              style={{
                fontFamily: "Mulish",
                fontWeight: 200,
                fontStyle: "italic",
                fontSize: 18,
              }}
            >
              Support
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-7 absolute bottom-3">
          <div className="flex gap-x-9">
            <img src={profile} />
            <p
              style={{
                fontFamily: "Mulish",
                fontWeight: 200,
                fontStyle: "italic",
                fontSize: 18,
              }}
            >
              Profile
            </p>
          </div>
          <div className="flex gap-x-9">
            <img src={settings} />
            <p
              style={{
                fontFamily: "Mulish",
                fontWeight: 200,
                fontStyle: "italic",
                fontSize: 18,
              }}
            >
              Settings
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center px-10 mt-10 gap-x-[700px]">
          <p style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 20 }}>
            Fleet Management
          </p>
          <div className="flex items-center gap-x-10">
            <img src={mail} />
            <img src={bell} />
            <img src={avatar} />
          </div>
        </div>
        <div className="flex gap-x-5 px-5 pt-10">
          <div className="w-[270px] h-[100px] rounded-md bg-white flex items-center px-10 justify-between">
            <div className="bg-[#ffe0f0] rounded-full p-3">
              <img src={ti} width={26} height={26} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Mulish",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                Total Income
              </p>
              <p
                style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 28 }}
              >
                10,00,000
              </p>
            </div>
          </div>
          <div className="w-[270px] h-[100px] rounded-md bg-white flex items-center px-10 justify-between">
            <div className="bg-[#d8d6f9] rounded-full p-3">
              <img src={ai} width={26} height={26} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Mulish",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                Average Income
              </p>
              <p
                style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 28 }}
              >
                25,000
              </p>
            </div>
          </div>
          <div className="w-[270px] h-[100px] rounded-md bg-white flex items-center px-10 justify-between">
            <div className="bg-[#a2d7fe] rounded-full p-3">
              <img src={td} width={26} height={26} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Mulish",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                Total Drivers
              </p>
              <p
                style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 28 }}
              >
                1024
              </p>
            </div>
          </div>
          <div className="w-[270px] h-[100px] rounded-md bg-white flex items-center px-10 justify-between">
            <div className="bg-[#fff0de] rounded-full p-3">
              <img src={tv} width={26} height={26} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Mulish",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                Total Vehicles
              </p>
              <p
                style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 28 }}
              >
                1050
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1104px] h-[530px] mx-auto mt-9">
          <Graph />
        </div>
        <Drivers />
      </div>
    </div>
  );
};

export default Dashboard;
