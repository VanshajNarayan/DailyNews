import './NewsUi.css';

function NewsUi({data}) {
  return (
    <>
      <div className='newsCards'>
        <div className="card">
        <div className='img'><img src= {data.urlToImage ? data.urlToImage : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"} alt="" /></div>
        <div><p className='title'> {data.title.slice(0, 50)}... </p></div>
        <div><p className='author'> Author:- {data.author} </p></div>
        <div><p className='publishedAt'> Date&Time:- {data.publishedAt} </p></div>
        <div className='source'>{data.source.name}</div>
        <div className='link'><a href={data.url} target='blank' > <button>Learn More</button> </a></div>
        </div>
      </div>
    </>
  )
};
export default NewsUi;