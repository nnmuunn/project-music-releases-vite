import { ArtistName } from "./ArtistName"

export const Albums = ({ name, artistName }) => {

  return (
    <div>
      <p>{name}</p>
      {/* Child components from this component */}
      <div>{<ArtistName artistName={artistName} />}</div>
    </div>

  )
}
