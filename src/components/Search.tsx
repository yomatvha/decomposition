import searchHeader from '../data/searchHeader.json'

const Search = () => {
  return (
    <div className="search">
      <ul className="search-header">
        {searchHeader.map(item => 
          <li className="search-header-item">
            <a href={item.url}>{item.name}</a>
          </li>
        )}
      </ul>
      <form className="search-string">
        <input className="search-input"></input>
        <button className="search-button">Найти</button>
      </form>
      <div className="search-ad">
        Место для рекламы
        <img></img>
      </div>
    </div>
  )
}

export default Search
