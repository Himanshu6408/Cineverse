import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowBackCircleSharp } from "react-icons/io5";
function DetailsPage() {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const DetailsApi = async () => {
    try {
      const res = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "e6383fa1",
          i: id,
          plot: "full",
        },
      });
      setdata(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    DetailsApi();
  }, [id]);
  //   console.log("data", res.data);
  return (
    <>
      <div className="h-screen w-screen bg-black relative text-white">
        <span
          onClick={() => navigate(-1)}
          className="text-white absolute top-10 left-36 cursor-pointer hover:text-orange-400"
        >
          <IoArrowBackCircleSharp size={"2.5vw"} />
        </span>
        <div className="h-[60vh] w-[40vw] flex items-center justify-center p-4 absolute top-28">
          <img
            className="h-[60vh] rounded-xl shadow-lg"
            src={data.Poster}
            alt={data.Title}
          />
          <div className="absolute top-0 left-[34vw]">
            <p>{data.Actors}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
