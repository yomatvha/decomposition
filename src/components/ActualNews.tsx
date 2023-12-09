import newsList from '../data/newsList.json';
import exchange from '../data/exchange.json'
import ActualNewsItem from './ActualNewsItem';
import ActualNewsExchange from './ActualNewsExchange';

const ActualNews = () => {
  return (
    <div className="actual-news">
      <div className="actual-news-main">
        <ul className="actual-news-header">
          <li className="actual-news-header-item"><a>Сейчас в СМИ</a></li>
          <li className="actual-news-header-item"><a>в России</a></li>
          <li className="actual-news-header-item"><a>Рекомендуем</a></li>
        </ul>
        <ul className="actual-news-list">
          {newsList.map(item => <ActualNewsItem 
            key={item.id}
            news={item}
            />
          )}
        </ul>
        <ul className="actual-news-exchange">
          {exchange.map(item => <ActualNewsExchange 
            key={item.id}
            item={item}
            />
          )}
        </ul>
      </div>
      <div className="actual-news-ad">
        <a><img className="actual-news-ad-img" src="https://i.etsystatic.com/20213817/r/il/dc8b4a/1945244162/il_570xN.1945244162_r7k8.jpg"></img></a>
        <p>Заголовок рекламы</p>
        <p>Текст рекламы</p>
      </div>
    </div>
  )
}

export default ActualNews
