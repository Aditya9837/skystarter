import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((data,index)=>(
        <>
        <h1>{data.first_name}</h1>
        </>
      ))}
    </div>
  );
};

export default Test;
