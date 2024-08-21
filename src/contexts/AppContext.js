import React, { createContext, useState, useEffect } from "react";
import { fetchNews } from "../services/newsService";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNews();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ newsData, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
