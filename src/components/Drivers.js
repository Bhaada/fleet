import React from "react";
import Driver from "./Driver";

const Drivers = () => {
  return (
    <div className="w-[866px] h-[564px] bg-white mx-auto my-14 rounded-md">
      <p
        style={{
          fontFamily: "Mulish",
          fontWeight: 700,
          padding: 30,
          fontSize: 22,
        }}
      >
        Drivers
        <div className="flex justify-between italic mt-5 px-20">
          <p style={{ fontFamily: "Mulish", fontWeight: 600, fontSize: 16 }}>
            Driver Name
          </p>
          <p style={{ fontFamily: "Mulish", fontWeight: 600, fontSize: 16 }}>
            Rides
          </p>
          <p style={{ fontFamily: "Mulish", fontWeight: 600, fontSize: 16 }}>
            Rating
          </p>
          <p style={{ fontFamily: "Mulish", fontWeight: 600, fontSize: 16 }}>
            Status
          </p>
        </div>
        <div className="px-20 pt-7 gap-y-7 flex flex-col">
          <Driver
            name={"Driver 1"}
            rides={3890}
            ratings={4.3}
            status={"ACTIVE"}
          />
          <Driver
            name={"Driver 2"}
            rides={4785}
            ratings={4.8}
            status={"ACTIVE"}
          />
          <Driver
            name={"Driver 3"}
            rides={9813}
            ratings={3.9}
            status={"ACTIVE"}
          />
          <Driver
            name={"Driver 4"}
            rides={8641}
            ratings={4.3}
            status={"ACTIVE"}
          />
          <Driver
            name={"Driver 5"}
            rides={6289}
            ratings={4.1}
            status={"ACTIVE"}
          />
          <Driver
            name={"Driver 6"}
            rides={7000}
            ratings={2.0}
            status={"ACTIVE"}
          />
        </div>
      </p>
    </div>
  );
};

export default Drivers;
