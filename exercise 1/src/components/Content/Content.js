import React from "react";
import ContentCard from "./ContentCard/ContentCard";
const data = [
  {
    id: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];
const Content = () => {
  return (
    <main className="mx-auto py-5 px-0 row justify-content-center px-sm-5">
      {data.map((el) => {
        return <ContentCard text={el.text} key={el.id} />;
      })}
    </main>
  );
};

export default Content;
