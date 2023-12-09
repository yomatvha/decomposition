import { ReactNode } from "react"

const PopularItem: React.FC<Item> = ({ children, name }) => {
  return (
    <div className="popular-item">
      <h5 className="popular-item-name"><a>{name}</a></h5>
      {children}
    </div>
  )
}

type Item = {
  children: ReactNode,
  name: string,
}

export default PopularItem
