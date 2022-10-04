import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleGun from "../SingleGun/SingleGun";

const AllGun = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);
  //   console.log(guns);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-center text-4xl font-bold my-5 mx-10 md:mx-0">
        Welcome To Kopa Samsu Store
      </h1>
      <p className="mx-20 text-center text-xl font-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        quisquam quasi aliquid reprehenderit corporis, porro saepe nisi eaque,
        obcaecati, magni distinctio! Animi porro est, exercitationem cumque
        doloremque optio quisquam vel?
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {guns.map((gun) => (
          <SingleGun
            key={gun.id}
            gun={gun}
            countIncrease={countIncrease}
          ></SingleGun>
        ))}
      </div>
    </div>
  );
};

export default AllGun;
