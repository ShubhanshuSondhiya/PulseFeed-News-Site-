/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import Articles from "./Articles";
import Pagination from "./Pagination";
import Footer from "./Footer";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const perPage = 12;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://saurav.tech/NewsAPI/everything/cnn.json"
      );
      console.log(result);
      setArticles(result.data.articles);
      setTotalResults(result.data.totalResults);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let offset = page == 1 ? 0 : (page - 1) * perPage;
    setDisplayedArticles(articles.slice(offset, offset + perPage));
  }, [articles, page]);

  console.log(displayedArticles);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [page])

  return (
    <div className="bg-[#011627] w-full flex flex-col place-items-center ml-auto mr-auto">
      <div className="mt-8 mb-4 w-5/6 flex justify-between sm:justify-start items-center gap-2">
        <button
          className="disabled:opacity-70 mb-4 w-6 h-6 text-sm sm:w-8 sm:h-8 sm:text-xl rounded-lg bg-blue-800 text-white flex justify-center items-center"
          disabled={page == 1}
          onClick={()=>setPage(page-1)}
        >
          &lt;
        </button>
        <p className="mb-4 w-auto h-8 p-2 flex justify-center items-center text-white text-base sm:text-2xl">
          Today's Top Headlines
        </p>
        <button
          className="disabled:opacity-70 mb-4 w-6 h-6 text-sm sm:w-8 sm:h-8 sm:text-xl rounded-lg bg-blue-800 text-white flex justify-center items-center"
          disabled={page >= Math.ceil(totalResults / perPage)}
          onClick={()=>setPage(page+1)}
        >
          &gt;
        </button>
      </div>
      <Articles displayedArticles={displayedArticles}/>
      <Pagination page={page} setPage={setPage} totalResults={totalResults} perPage={perPage}/>
      <Footer/>
    </div>
  );
};

export default Home;
