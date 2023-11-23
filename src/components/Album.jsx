import { Cover } from "./cover/Cover"
import { ArtistName } from "./Artist/ArtistName"
import { AlbumLink } from "./Album/AlbumLink"

export const Albums = ({ cover, artistLink, artistName, albumLink, albumName }) => {

  return (
    <div>
      <Cover cover={cover} />
      <ArtistName artistName={artistName} />
      <AlbumLink albumLink={albumLink} artistLink={artistLink} artistName={artistName} albumName={albumName} />
      {/* Child components from this component */}

    </div>

  )
}
