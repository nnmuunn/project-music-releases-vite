import { Header } from "./components/Header";
import data from "./data.json";
import { Albums } from "./components/Album";


export const App = () => {
  const alben = data.albums.items;
  console.log(alben[0])

  //function map()
  const renderAlbums = () => {
    return alben.map((albuums) => (
      <Albums
        key={albuums.id}
        cover={albuums.images[0].url}
        artistName={albuums.artists[0].name}
        albumName={albuums.name}
        artistLink={albuums.artists[0].external_urls.spotify}
        albumLink={albuums.external_urls.spotify}
    

      />
    ));
  };


  return (
    <>

      <h1>New Albums && Singles // ouon.min</h1>
      <section className="albums">
        {renderAlbums()}
      </section>

    </>
  );
};
