import React, { useState } from 'react';
import GetRequest from './Request-Methods/GetRequest';
import PostRequest from './Request-Methods/PostRequest';
import PutRequest from './Request-Methods/PutRequest';
import DeleteRequest from './Request-Methods/DeleteRequest';
import SimultaneousRequest from './Request-Methods/SimultaneousRequest';
import CustomHeaders from './Request-Methods/CustomHeaders';
import TransformResponse from './Request-Methods/TransformResponse';
import ErrorHandling from './Request-Methods/ErrorHandling';
import Cancel from './Request-Methods/Cancel';

function App() {
  const [data, setData] = useState({});
  return (
    <>
      <h2
        class="display-3 text-center"
        style={{ color: '#969331', marginTop: '2%' }}
      >
        Promises Using Axios
      </h2>
      <div
        class="d-flex flex-row justify-content-between"
        style={{ margin: '5%' }}
      >
        <GetRequest getData={data}>{console.log(data)}</GetRequest>
        <PostRequest />
        <PutRequest />
        <DeleteRequest />
        <SimultaneousRequest />
        <CustomHeaders />
        <TransformResponse />
        <ErrorHandling />
        <Cancel />
      </div>
    </>
  );
}

export default App;
