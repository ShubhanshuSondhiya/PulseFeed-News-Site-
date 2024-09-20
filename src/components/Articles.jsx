/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import image from "../assets/noimg.webp";

const Articles = ({ displayedArticles }) => {
  return (
    <div className="w-5/6 grid grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
        {displayedArticles.map((article, index) => {
          if(article.title != '[Removed]'){
          return (
            <div
              className="shadow-md shadow-slate-950 text-white duration-300 bg-transparent hover:bg-[#001d3d] p-3 rounded-md flex flex-col place-items-start"
              key={index}
            >
              <Link to={article.url}>
              {article.urlToImage !== null ? (
                <img
                  className="w-80 h-48 mb-2 object-cover rounded-md"
                  src={article.urlToImage}
                  alt={article.title}
                />
              ) : (
                <img
                  className="w-80 h-48 object-contain rounded-md"
                  src={image}
                  alt="Not Found"
                />
              )}
                <h3>{article.title}</h3> 
              </Link>
            </div>
          );
        }
        })}
      </div>
  )
}

export default Articles
