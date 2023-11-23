export const AlbumLink = ({ albumLink, artistLink, artistName, albumName }) => {

  return (
    <div>
      <a href={albumLink} target="_blank">{albumName}</a>
      <a href={artistLink} target="_blank">{artistName}</a>
    </div>
  )
}


