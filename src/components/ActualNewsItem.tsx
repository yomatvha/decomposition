const ActualNewsItem: React.FC<NewsProps> = ({ news }) => {
  return (
    <li>
      <img src={news.icon}></img>
      <a className="actual-news-item" href={news.url}>{news.name}</a>
    </li>
  )
}

type NewsProps = {
  news: News,
}

type News = {
  id: number,
  name: string,
  icon: string,
  url: string,
}

export default ActualNewsItem
