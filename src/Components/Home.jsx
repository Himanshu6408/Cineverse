import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { FetchIMDBData } from "../utils/Axios";
import Loading from "./Loading";

function Home() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);

  const nextpage = () => {
    setpage((prev) => prev + 1);
  };

  const previouspage = () => {
    setpage((prev) => (prev - 1, 1));
  };
  const FetchData = async () => {
    try {
      const res = await FetchIMDBData(page);
      setdata(res.data.Search || []);
      console.log(res.data.Search);
    } catch (error) {
      console.log("error");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    FetchData();
  }, [page]);
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="px-[10.3vw] flex flex-wrap space-y-10  gap-x-8 py-10 bg-black">
        {data.map((item, index) => (
          <div className="h-100">
            <Cards key={index} item={item} />
          </div>
        ))}
        {/* pageination on data */}
        <div className="flex justify-between px-[8.5vw] py-5 bg-black">
          <button
            onClick={previouspage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50 cursor-pointer"
          >
            ⬅ Previous
          </button>

          <span className="text-white self-center px-1">Page: {page}</span>

          <button
            onClick={nextpage}
            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          >
            Next ➡
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
