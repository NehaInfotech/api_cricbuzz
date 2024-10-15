import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Domestic() {
  const [data, setData] = useState(null);

  const getdata = () => {
    axios
      .get("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent", {
        headers: {
          "x-rapidapi-key":
            "9d61ba58e1msh9384af565faa7f0p1bea56jsnc5789c10d7f7",
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  const matches = data.typeMatches || [];

  return (
    <div>
      <div>
        <h2>
          {match.matchType} - {match.series.name}
        </h2>
        <p>{match.dateTime}</p>
        <p>
          Teams: {match.teams[0].name} vs {match.teams[1].name}
        </p>
      </div>
    </div>
  );
}

export default Domestic;
