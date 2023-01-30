import React from 'react';
import Child2 from './Child2';

function Child(props) {
  return (
    <div>
      <Child2 name={props.name} />
      {props.name}
      <Child3 />
    </div>
  );
}
function Child3() {
  return <div>Welcome to child three.</div>;
}

export default Child;
