import { Cover } from "./cover/Cover"
// import { ArtistName } from "./Artist/ArtistName"
// import { AlbumLink } from "./Album/AlbumLink"

export const Albums = ({ cover, artistLink, artistName, albumLink, albumName }) => {

  return (
    <div>
      <Cover cover={cover} />
      <div>
        <a href={albumLink} target="_blank">{albumName}</a>
        <a href={artistLink} target="_blank">{artistName}</a>
      </div>
    </div>

  )
}
