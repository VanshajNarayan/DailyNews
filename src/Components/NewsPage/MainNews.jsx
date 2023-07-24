import { useEffect, useState } from 'react';
import './MainNews.css';
import axios from 'axios';
import NewsUi from '../NewsUi/NewsUi';
import { useData, useDispatch } from '../CustomHook/CustomHook';

function MainNews() {

  const category = useData();
  // const {pageSize} = useData();
  // console.log(pageSize);

  // const dispatch = useDispatch();

  const [data, setData] = useState([]);

  // const addNews = () => {
  //   dispatch({ type: 'ADDNEWS' })
  // };

  // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=50ee585bf1364c1db2d0b89b0b504a7b`;

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=20&apiKey=50ee585bf1364c1db2d0b89b0b504a7b`;

  useEffect(() => {
    const apiCalling = async () => {
      const {data} = await axios.get(url);
      const {articles} = data;
      setData(articles);
    };
    apiCalling();
  }, [category]);

  return (
    <>
      <div className='HeadingNews'><h1> Top-Headlines of :- <span>{category}</span> </h1></div>
      <div className='newsui'>
        {data.map((data, index) => <NewsUi key={index} data = {data} />)}
      </div>
      {/* <div className='MoreNews'>
        <button className='readNews' onClick={addNews} >Read More News!</button>
      </div> */}
    </>
  )
}
export default MainNews;