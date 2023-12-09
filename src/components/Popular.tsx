import PopularItem from "./PopularItem"

const Popular = () => {
  return (
    <div className="popular">
      <PopularItem name={"Погода"}>
        <div>-7°</div>
      </PopularItem>
      <PopularItem name={"Карта России"}>
        <div>Расписания</div>
      </PopularItem>
      <PopularItem name={"Эфир"}>
        <ul>
          <li>Управление как искусство</li>
          <li>Ночь. Мир в это время</li>
          <li>Андрей</li>
        </ul>
      </PopularItem>
      <PopularItem name={"Посещаемое"}>
        <ul>
          <li>Недвижимость</li>
          <li>Маркет</li>
          <li>Авто.ру</li>
        </ul>
      </PopularItem>
      <PopularItem name={"Телепрограмма"}>
        <ul>
          <li>02:00 ТНТ.Best</li>
          <li>02:15 Джинглики</li>
          <li>02:25 Наедине со всеми</li>
        </ul>
      </PopularItem>
    </div>
  )
}

export default Popular
