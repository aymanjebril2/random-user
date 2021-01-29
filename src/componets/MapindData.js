import React, { useState, useEffect } from "react";
import FatchData from "../service/FatchData";

import Profile from "./Profile";
import Button from "@material-ui/core/Button";

const MapindData = () => {
  const [data, setdata] = useState([]);
  // const FatchData = async () => {
  //   let url = "https://api.randomuser.me/";
  //   let response = await axois.get(url);
  //   setdata(response.data.results);
  // };
  const gettingData = async () => {
    let user = await FatchData();
    setdata(user);
  };

  useEffect(() => {
    gettingData();
  }, []);

  return (
    <>
      <Button
        onClick={gettingData}
        variant="contained"
        color="primary"
        disableElevation
        style={{ marginLeft: 140, marginTop: 40 }}
      >
        {" "}
        Get New User{" "}
      </Button>

      {data.map((item, index) => {
        return (
          <Profile
            name={item.name}
            picture={item.picture.large}
            location={item.location}
            email={item.email}
            phone={item.phone}
            key={index}
          />
        );
      })}
    </>
  );
};

export default MapindData;
