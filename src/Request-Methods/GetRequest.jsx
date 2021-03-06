import React, { useState } from 'react';
import axios from 'axios';

const GetRequest = ({ getData }) => {
  const [data, setData] = useState({});

  const clickHandler = (e) => {
    const fetchData = new Promise((resolve, reject) => {
      resolve(axios.get('https://jsonplaceholder.typicode.com/posts'));
      reject('API Failing');
    });

    fetchData
      .then((res) => {
        setData(res.data[Math.floor(Math.random() * 100)]);
      })
      .catch((err) => console.log('failed to call API :', err));

    getData = data.title;
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        onClick={clickHandler}
        getData={getData}
      >
        GET
      </button>
    </>
  );
};

export default GetRequest;
