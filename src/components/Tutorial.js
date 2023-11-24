// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!searchQuery) return;
//       setIsLoading(true);

//       const apiKey = 'AIzaSyBVdMqKGSgwtMPPPXanTaMn0mIZEK3SNCo'; // Replace with your YouTube API key

//       const options = {
//         method: 'GET',
//         url: 'https://www.googleapis.com/youtube/v3/search',
//         params: {
//           part: 'snippet',
//           type: 'video',
//           q: searchQuery,
//           key: apiKey,
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         setVideos(response.data.items);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [searchQuery]);

//   const handleSearch = () => {
//     setSearchQuery(document.getElementById('searchInput').value);
//   };

//   return (
//     <div style={{ padding: '8rem' }}>
//       <h2>YouTube Videos</h2>
//       <div>
//         <input type="text" id="searchInput" placeholder="Enter search query" />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {videos.map((video) => (
//             <li key={video.id.videoId}>
//               <iframe
//                 title={video.snippet.title}
//                 width="560"
//                 height="315"
//                 src={`https://www.youtube.com/embed/${video.id.videoId}`}
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//               <p>{video.snippet.title}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default VideoList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./video.css"

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) return;
      setIsLoading(true);

      const apiKey = 'AIzaSyBVdMqKGSgwtMPPPXanTaMn0mIZEK3SNCo'; // Replace with your YouTube API key

      // Adjust the search query to include topics related to IT programming
      const itProgrammingTopics = ['web development', 'cybersecurity', 'programming', 'physics', 'Tutorial on Biology'];
      const refinedSearchQuery = `${searchQuery} ${itProgrammingTopics.join(' ')}`;

      const options = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          type: 'video',
          q: refinedSearchQuery,
          key: apiKey,
          maxResults: 3,
        },
      };

      try {
        const response = await axios.request(options);
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(document.getElementById('searchInput').value);
  };

  return (
    <div style={{ padding: '8rem' }} className='conner'>
      <h2 className='tite'>YouTube Videos</h2>
      <div className='sea'>
        <input type="text" id="searchInput" placeholder="Search for any video..." className='seam' />
        <button onClick={handleSearch} className='bn'>Search</button>
      </div>
      <div className="video-list">

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className='videos'>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <iframe
                title={video.snippet.title}
                width="260"
                height="140"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>{video.snippet.title}</p>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default VideoList;
