interface IMarkerDescription {
  name: string
  address_line: string
  distance: number
}

export const MarkerDescription = ({ name, address_line, distance }: IMarkerDescription) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{address_line}</p>
        <p>Distance: {distance}</p>
      </div>
    </div>
  )
}
