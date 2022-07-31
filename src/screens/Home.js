import React from "react";
import truck from "../images/truck.png";
import cargo from "../images/cargo.png";
import cargo1 from "../images/cargo1.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#B2BEFF] h-[100vh] flex justify-center items-center w-[100vw] flex-col gap-y-9">
      <div className="absolute top-5 left-5">
        <img src={truck} alt="truck" width={60} height={60} />
        <p
          style={{
            fontFamily: "Mulish",
            fontSize: 30,
            fontWeight: 700,
            lineHeight: "28px",
            marginTop: 15,
          }}
        >
          BHADA CARGO
        </p>
      </div>
      <p
        style={{
          fontFamily: "Mulish",
          fontSize: 30,
          fontWeight: 700,
          lineHeight: "28px",
        }}
        className="absolute right-5 top-5"
      >
        FLEET MANAGEMENT SYSTEM
      </p>
      <div className="w-[800px] h-[500px] border rounded-[69px] -skew-x-12 bg-[#9bb7ff] flex flex-col items-center py-10 gap-y-10">
        <p style={{ fontFamily: "Inter", fontWeight: 300, fontSize: 35 }}>
          WELCOME BACK !
        </p>
        <input
          placeholder="User Name"
          className="h-[90px] rounded-[29px] w-[500px] pl-52"
          style={{ fontSize: 20 }}
        />
        <input
          placeholder="Password"
          className="h-[90px] rounded-[29px] w-[500px] pl-52"
          style={{ fontSize: 20 }}
        />
        <button
          className="h-[140px] bg-[#98FFD4] w-[150px] rounded-[20px]"
          onClick={() => navigate("/dash")}
          style={{
            fontFamily: "Mulish",
            fontWeight: 700,
            color: "#3E4958",
            fontSize: 24,
          }}
        >
          LOGIN
        </button>
      </div>
      <button className="w-[500px] h-[100px] rounded-[20px] bg-[#B688FF] -ml-14 flex items-center justify-between px-5">
        <p
          className="text-white"
          style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 24 }}
        >
          DON’T HAVE AN ACCOUNT ?
        </p>
        <p
          className="text-[#3E4958]"
          style={{ fontFamily: "Mulish", fontWeight: 700, fontSize: 24 }}
        >
          SIGN UP
        </p>
      </button>
      <img src={cargo} alt="cargo" className="absolute bottom-0 -left-7" />
      <img src={cargo1} alt="cargo" className="absolute bottom-0  right-0" />
    </div>
  );
};

export default Home;
