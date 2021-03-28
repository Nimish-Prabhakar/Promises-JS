import React from 'react';
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
  return (
    <>
      <h2 class="display-3">Promises Using Axios</h2>
      <div
        class="d-flex flex-row justify-content-between"
        style={{ margin: '5%' }}
      >
        <GetRequest />
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
