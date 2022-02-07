import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import axios from "axios";

import {lightTheme, darkTheme, GlobalStyles} from "../styles/theme";

import Header from "../components/Header/Header";
import Post from "../components/Post/Post";

import usePersistedState from "../utils/usePersistedState";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState('theme', lightTheme);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme: lightTheme);
  }

  const [images, setImages] = useState([]);
  const accessKey = process.env.REACT_AAP_ACCESSKEY;

  useEffect(() => {
    const fetchImages = async () => {
      const {data} = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=8`);

      setImages(data);
    };

    fetchImages();

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Header toggleTheme={toggleTheme} />
      <Post images={images}/> 
    </ThemeProvider>
  )
}

export default MyApp
