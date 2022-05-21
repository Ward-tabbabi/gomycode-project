import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import QuizList from "./QuizList";

const Home = ({ setSearsh, searsh }) => {
  const Cat = [
    "IT",
    "Mathematics",
    "History Geography",
    "Physical",
    "Sport",
    "Countries and capitals",
    "Wild world",
    "Cinema and series",
    "Astronomy",
    "Languages",
    "Cars and bikes",
  ];
  const [catSearch, setCatSearch] = useState("");

  return (
    <div className="linding">
      <div className="list-categories">
        <ul>
          {Cat.map((el) => (
            <li
              onClick={() => {
                setCatSearch(el);
              }}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="map-list">
          <h1>
            Test your general culture and enrich your information background
          </h1>
        </div>
        <QuizList
          setSearsh={setSearsh}
          searsh={searsh}
          catSearch={catSearch}
          setCatSearch={setCatSearch}
        />
      </div>
    </div>
  );
};

export default Home;
