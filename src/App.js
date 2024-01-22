import React, { useState, useEffect } from "react";
import RepoCard from "./components/RepoCard";
import InfiniteScroll from "react-infinite-scroll-component";

import "./App.css";
const App = () => {
  const [topRepos, setTopRepos] = useState([]);

  const [page, setPage] = useState(1);

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

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={topRepos.length}
      next={fetchMoreData}
      hasMore={true}
    >
      <div className="text-center mx-auto max-w-screen-md">
        <h1 className="text-2xl font-bold mb-6">
          Most Starred GitHub Repositories (Last 30 Days)
        </h1>
        <ul className="flex flex-col items-center">
          {topRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
      </div>
    </InfiniteScroll>
  );
};

export default App;
