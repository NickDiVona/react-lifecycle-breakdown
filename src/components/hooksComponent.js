import React, { useEffect, useRef } from 'react';

const HooksComponent = (props) => {
  const { count } = props;
  //componentDidMount
  useEffect(() => {
    console.log('RED MOUNTED');
  }, []);

  //componentDidUpdate
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      console.log('RED UPDATED');
    }
  });

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('RED UNMOUNTED');
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'lightcoral',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      }}
      onClick={props.incrementCount}
    >
      {props.count}
    </div>
  );
};

export default HooksComponent;
