import { useState, useEffect } from "react";
import Searchbar from './Searchbar/Searchbar'
import { searchPhoto } from '../api/apiServices'
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from './Loader/Loader'
import Button from './Button/Button'


const App = () => {
  const [search, setSearch] = useState('');
  const [gallery, setGallery] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  
  const addSearch = (query) => {
    if (search === query) {
      return alert(`Ви вже дивитесь запит ${query}`)
    }
    setSearch(query);
    setPage(1);
    setGallery([])
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);

  }

  useEffect(() => {
    if (!search) return;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await searchPhoto(search, page);
        if (data.hits?.length) {
          setGallery((prevGallery) => [...prevGallery, ...data.hits]);
        }
        setTotalHits(data.totalHits || totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page, totalHits]);




    return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: 16,
        paddingBottom: 24,
      }}
    >
        <Searchbar onSubmit={addSearch}></Searchbar>
        <ImageGallery items={gallery} />
        {loading&&<Loader/>}
        {Boolean(gallery.length) && page < Math.ceil(totalHits / 12) && <Button onClick={loadMore } />}
    </div>
  );
  };

export default App;