import { useState, useEffect } from 'react';
import youtube from '../../apis/youtube';

const useVideo = (defaultSerachTerm) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSerachTerm);
  }, [defaultSerachTerm]);

  const search = async term => {

    console.log(term);
    const videos = await youtube.get('/search', {
      params: {
        q: term
      }
    }
    );
    console.log(videos.data.items);
    setVideos(videos.data.items);

  };

  return [videos, search]

}

export default useVideo;