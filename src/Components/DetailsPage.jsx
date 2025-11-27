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
        <div className="h-[60vh] w-[22vw] flex items-center justify-center p-4 absolute top-28 left-31">
          <img
            className="h-[60vh] rounded-xl shadow-lg"
            src={data.Poster}
            alt={data.Title}
          />
          <div className="absolute top-0 items-center ml-[75vw] whitespace-nowrap">
            <div className="text-amber-100">
              <span className="flex gap-x-3 mt-1 ">
                Title :<p>{data.Title}</p>
              </span>
              <span className="flex gap-x-3 mt-1 ">
                Acotor :<p>{data.Actors}</p>
              </span>
              <span className="flex gap-x-3 mt-1 ">
                Country :<p>{data.Country}</p>
              </span>
              <span className="flex gap-x-3 mt-1 ">
                Director :<p>{data.Director}</p>
              </span>
              <span className="flex gap-x-3 mt-1 ">
                Language :<p>{data.Language}</p>
              </span>
              <span className="flex gap-x-3 mt-1 ">
                Released :<p>{data.Released}</p>
              </span>
              <span className="flex gap-x-3 mt-1 ">
                Type :<p>{data.Type}</p>
              </span>
              <span className="flex gap-x-3 mt-1 ">
                Ratings :<p>{data.imdbRating}</p>
              </span>
              <div className="h-fit py-5 w-[50vw]">
                <span className="flex gap-x-3 mt-1 ">
                  BIO :
                  <p className="whitespace-normal break-word max-w-[50vw] text-amber-200">
                    {data.Plot}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
