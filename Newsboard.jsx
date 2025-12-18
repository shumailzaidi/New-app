import React, { useEffect } from 'react'
import { useState } from 'react';
import Newsitem from './Newsitem';
const Newsboard = ({category}) => {

const [articles, setArticles] =useState([]);

useEffect(()=>{
 let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

fetch(url).then((response)=>response.json()).then((data)=>
  setArticles(data.articles));

},[category]);


  return (
    <>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((News,index)=>{

        return<Newsitem key={index} title={News.title}  description={News.description} src={News.urlToImage} url={News.url}/>;
      })}
      </>
  )
}

export default Newsboard;