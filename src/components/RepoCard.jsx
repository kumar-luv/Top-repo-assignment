import React from "react";
import { formatDistanceToNow } from "date-fns";

const RepoCard = ({ repo }) => {
    console.log("component rendered");
  return (
    <div className="flex w-full m-3 p-3 border border-gray-300 rounded-md shadow-md hover:shadow-2xl transition duration-500">
      <img
        className="w-52 h-52 rounded-full object-cover"
        src={repo?.owner?.avatar_url}
        alt={`${repo?.owner?.login}'s avatar`}
      />
      <div className="flex flex-col ml-4">
        <h2 className="text-left font-bold text-3xl mt-4">{repo?.name}</h2>
        <p className="text-left font-medium text-2xl mt-2">
          {repo?.description}
        </p>
        <div className="flex mt-8 gap-8">
          <a
            href={repo?.owner?.html_url}
            target="_blank"
            className="ml-4 bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300 hover:cursor-pointer"
          >
            Read More
          </a>
          <p className="mt-2 text-yellow-500">
            Stars: {repo?.stargazers_count}
          </p>
          <p className="mt-2 text-yellow-500">
            Issues: {repo?.open_issues_count}
          </p>
        </div>
        <p className="text-left text-xl text-yellow-300 mt-2">
          Submitted{" "}
          <span>{formatDistanceToNow(new Date(repo?.created_at))}</span> ago by{" "}
          <span>{repo?.owner?.login}</span>
        </p>
      </div>
    </div>
  );
};

export default RepoCard;
