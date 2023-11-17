import { Header } from "./assets/components/Header";
import data from "./data.json";
import { Albums } from "./assets/components/Album";
import { Cover } from "./assets/components/Cover";

export const App = () => {
  const alben = data.albums.items;
  console.log(alben)

  //function map()
  const renderAlbums = () => {
    return alben.map((albuums) => (
      <Albums
        key={albuums.id}
        name={albuums.name}
        artistName={albuums.external_urls.spotify}
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
