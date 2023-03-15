import react, { useEffect, useState } from "react";
import $ from "jquery";


const YTvideoss = () => {
  var searchTerm = "bicep exercise";
  const [allVideos, setAllVideos] = useState([]);

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://simple-youtube-search.p.rapidapi.com/search",
    params: { query: searchTerm, safesearch: "false" },
    headers: {
      "X-RapidAPI-Key": "f7b94b1a54msh3c3038557e37090p1526ecjsna94e501ae6dc",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        let result = [];
        response.data.results.slice(0,3).map((doc) => {
          console.log(doc.thumbnail.id);
          result.push({
            ...doc,
            Videolink: "https://www.youtube.com/embed/" + doc.thumbnail.id,
          });
        });
        setAllVideos(result);
      })
      .catch(function (error) {});
  }, []);
  console.log(allVideos);
  return (
    <div>
      {allVideos.map((item) => {
        return (
          <div>
            <iframe
              width="560"
              height="315"
              src={item.Videolink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default YTvideoss;