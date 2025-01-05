import { useState } from "react";
import "./Display.css";

const Display = ({ contract }) => {
  const [data, setData] = useState("");

  const getData = async () => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhYTFkMTMxMS1hMmViLTRlM2YtODdkZi0zZDBjYTA4ZmZkMzUiLCJlbWFpbCI6ImV2YS5hc3Byb3U5OUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZGUzNWQzYWU3M2UwZmFlYzZhZTMiLCJzY29wZWRLZXlTZWNyZXQiOiI4NTM2YWVlYTM0MmQ3ZTgwMDI5NjgxNWZiMzcwNTRhMzY5Yjg5NjU4YjE1NDUyZTJlZmQyMmQwNzQ0MDhlMjIwIiwiZXhwIjoxNzU2NzI4NDc5fQ.P8ZYuXD6waHPaurgOLfhdflMGSGRDFbdAmEUZp_Vep4', // Replace with your actual Pinata JWT token
    //   }
    // };
    let dataArray = await contract.getMyFiles();
    try {
      // const response = await fetch('https://api.pinata.cloud/data/pinList', options);
      // const data = await response.json();
      const isEmpty = Object.keys(dataArray).length === 0;

      if (!isEmpty) {
        const Files = dataArray.map((item, i) => (
          <a href={`${item}`} key={i} target="_blank" rel="noopener noreferrer">
            <img
              src={`${item}`}
              alt="Uploaded"
              className="File-list"
            />
          </a>
        ));
        setData(Files);
      } else {
        alert("No Files to display");
      }
    } catch (e) {
      console.error("Error fetching pinned files: ", e);
      alert("Unable to fetch Files from Pinata");
    }
  };

  return (
    <>
      <button className="button2" onClick={getData}>
        Get My Files
      </button>
      <div className="File-list">{data}</div>
    </>
  );
}  

export default Display;

