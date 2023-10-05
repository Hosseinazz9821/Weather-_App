import "./Weather.css";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import locationweather from "../Image-icon/location-icon-png-transparent-3.png";
import deafult from "../Image-icon/nvuiGe.jpg";
import { SdCard } from "@mui/icons-material";
import { json } from "stream/consumers";
import day from "../Image-icon/beeach-day.png.webp";
import night from "../Image-icon/wp9395053.jpg";
import { url } from "inspector";
export default function Weather() {
  const [State, setState] = React.useState("");
  const [pp, setPp] = React.useState<any>();
  const [image, setImage] = React.useState<any>(1);
  const [country, setCountry] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  // const [State2, setState2] = React.useState("");

  async function getdata() {
    try {
       setLoading(true)
        let data = await fetch(
          // `http://api.weatherapi.com/v1/current.json?key=190b6f2462dd458387e211312230208&q=${State}
          `http://api.weatherapi.com/v1/current.json?key=e04c2c30d6064988b4b55757230808&q=${State}&aqi=no`
        )
          .then((res) => res.json())
          .then((data) => setPp(data))
setLoading(false)
        return data;
      
    }catch (error) {
     
    }
  }
  // async function getCountry(){
  //   let city = await fetch (
  //     `https://flagsapi.com/${State2}/shiny/64.png`
  //   ).then((res)=>res.json())
  //   .then((data)=>setCountry(data))
  //   return city
  // }
  // console.log(country);

  // console.log(pp);

  React.useEffect(() => {
    if (pp == undefined) {
      setImage(deafult);
    } else {
      if (pp.current.is_day == 1) {
        setImage(day);
      } else {
        if (pp.current.is_day == 0) {
          setImage(night);
        }
      }
    }
  });

  return (
    <div
      className="Weather_content_container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="leftsidbar">
        {/* <div className="flag_container"> */}
        {/* <img src={`https://flagcdn.com/48x36/${country}.png`}  /> */}
        {/* <img src={`https://flagsapi.com/${country}/shiny/64.png`}/> */}

        {/* </div> */}
        <div className="tempDateIcon_Weather_Container">
          <div className="icontemp_container">
            <div
              style={
                pp == undefined
                  ? { display: "none" }
                  : {
                      height: "100%",
                      width: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  position: "absolute",
                  bottom: "300px",
                  left: "580px",
                  fontSize: 20,
                  color: "white",
                }}
              >
                OC
              </div>
              <div
                style={{ fontSize: 100, fontWeight: "bolder", color: "white" }}
              >
                {pp && pp.current.temp_c}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={pp && pp.current.condition.icon}
                style={
                  pp == undefined
                    ? { display: "none" }
                    : { height: 100, width: 100 }
                }
              ></img>
            </div>
          </div>

          <div className="date_container">
            <div style={{ fontWeight: "bolder", fontSize: 50, color: "white" }}>
              {pp && pp.location.localtime}
            </div>
          </div>
        </div>
      </div>
      <div className="rightsidebar">
        <div className="informatinWeather_content_container">
          <div className="place_inpute_button">
            <TextField
              id="filled-basic"
              label="Enter Your Location"
              variant="filled"
              value={State}
              sx={{
                "& .MuiInputBase-root": {
                  width: "320px",
                  fontSize: "15px",
                  borderBottom: "4px solid blue",
                },
                "&  .MuiInputBase-root:before": {
                  borderBottom: "4px solid blue",
                },
              }}
              aria-readonly
              type="search"
              onChange={(e) => {
                setState(e.target.value);
                // setState2(e.target.value)
                setCountry(e.target.value);
              }}
            />
            {loading ? <div className="loader">
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    <div className="bar4"></div>
    <div className="bar5"></div>
    <div className="bar6"></div>
    <div className="bar7"></div>
    <div className="bar8"></div>
    <div className="bar9"></div>
    <div className="bar10"></div>
    <div className="bar11"></div>
    <div className="bar12"></div>
</div>:  <img
              className="iconLocation_weather"
              src={locationweather}
              alt="filter applied"
              onClick={() => {
                getdata();
                // getCountry()
                // console.log(Getdata)
                setState("");
              }}
            ></img>}
          
          </div>
          <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white   ",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 150,
                      }
                }
              >
                country
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.location.country}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 10,
                      }
                }
              >
                region
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.location.region}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 150,
                      }
                }
              >
                tz_id
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.location.tz_id}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 240,
                      }
                }
              >
                lat
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.location.lat}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 240,
                      }
                }
              >
                lon
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.location.lon}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                feelslike_c
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.feelslike_c}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                feelslike_f
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.feelslike_f}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                gust_kph
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.gust_kph}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                humidity
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.humidity}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                temp_c
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.temp_c}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                temp_f
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.temp_f}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                wind_degree
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.wind_degree}
              </div>
            </div>
            <div
              className="fildCountery_Weather"
              style={
                pp == undefined
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid rgb(21,36,65)" }
              }
            >
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                wind_dir
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.wind_dir}
              </div>
            </div>
            <div className="fildCountery_Weather">
              <p
                style={
                  pp == undefined
                    ? { display: "none" }
                    : {
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: 18,
                        marginRight: 190,
                      }
                }
              >
                wind_kph
              </p>
              <div
                style={{ fontSize: 18, fontWeight: "bolder", color: "black" }}
              >
                {pp && pp.current.wind_kph}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
