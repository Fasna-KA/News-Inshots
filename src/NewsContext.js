import React, { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-14&sortBy=publishedAt&apiKey=062a468d991343b891a8b850e88e0dc2
      `)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
