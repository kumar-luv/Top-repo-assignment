import React, { useState, useEffect } from "react";
import RepoCard from "./components/RepoCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addDarkTheme, addLightTheme } from "./utils/themeSlice";

const App = () => {
  const [topRepos, setTopRepos] = useState([]);

  const [page, setPage] = useState(1);

  const themeMode = useSelector((store) => store.theme.themeMode);

  const dispatch = useDispatch();

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 30);
  const todayDate = currentDate.toISOString().split("T")[0];

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:%3E${todayDate}&sort=stars&order=desc&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      setTopRepos((prev) => [...prev, ...data.items]);
    } catch (error) {
      console.error("Error ", error);
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const themeClickHandler = () => {
    if (themeMode === "light") {
      dispatch(addDarkTheme());
    } else {
      dispatch(addLightTheme());
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="w-full dark:bg-gray-950">
      <InfiniteScroll
        dataLength={topRepos.length}
        next={fetchMoreData}
        hasMore={true}
      >
        <div className="text-center mx-auto max-w-screen-md dark:bg-gray-950 dark:text-white">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-6">
              Most Starred GitHub Repositories (Last 30 Days)
            </h1>
            <div
              className="hover:cursor-pointer ml-1 sm:ml-3 mt-3 text-2xl "
              onClick={themeClickHandler}
            >
              {themeMode === "light" ? <MdOutlineLightMode /> : <MdLightMode />}
            </div>
          </div>
          <ul className="flex flex-col items-center">
            {topRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </ul>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
