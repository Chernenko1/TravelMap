import styles from './PlacesOfInterest.module.css'

interface IPlacesOfInterest {
  places: Properties[]
}

export const PlacesOfInterest = ({ places }: IPlacesOfInterest) => {
  console.log(places)
  return (
    <article className={styles.placeOfInterest}>
      <header className={styles.mainHeader}>
        <p>Интересные места</p>
      </header>
      {places.map((place) => (
        <section key={place.osm_id}>
          <header>{place.name}</header>
          <section>
            <p>ул.: {place.street}</p>
            <p>дом: {place.housenumber}</p>
            <p>растояние: {place.distance}м</p>
          </section>
        </section>
      ))}
    </article>
  )
}
