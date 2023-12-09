const ActualNewsExchange: React.FC<ItemProps> = ({ item }) => {
  return (
    <li className="exchange-item"><a className="exchange-item-a">{item.name} {item.rate}</a></li>
  )
}

type ItemProps = {
  item: Item,
}

type Item = {
  id: number,
  name: string,
  rate: string,
}

export default ActualNewsExchange
