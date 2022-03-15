import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post/Post';

const accessKey = process.env.REACT_APP_ACCESSKEY;

const Home: React.FC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const {data} = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=10`);

      setImages(data);
    };

    fetchImages();

  }, []);

  return (
    <Layout title={`Personal Blog`}>
      <Post images={images}/> 
    </Layout>
  )
}

export default Home;