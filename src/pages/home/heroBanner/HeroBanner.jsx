import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./style.scss";
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
//costome hook for fetch data->
import { useFetch } from "../../../hooks/useFetch";


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {url} = useSelector((state => state.home));

  const {data, loading} = useFetch("/movie/upcoming");



  useEffect(()=>{
    const bg = url.backdrop+  data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg);
  },[data]);

  const searchQueryHandler = (e)=> {
    if(e.key === 'Enter' && query.length > 0)
    {
      navigate(`/search/${query}`);
    }
  }


  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <img src={background}  />
      </div>}
<div className="opacity-layer">
    
</div>
      <ContentWrapper >

      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Wellcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now
          </span>
          <div className="searchInput">
            <input 
              type="text" 
              placeholder="Search for a movie or tv show..."
              onKeyUp={searchQueryHandler}
              onChange={(e)=> setQuery(e.target.value)}
               />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
