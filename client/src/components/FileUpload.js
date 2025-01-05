import { useState } from "react";
import "./FileUpload.css";

const FileUpload = ({ contract, account }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No File selected");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("pinataMetadata", JSON.stringify({
          name: fileName,
        }));
        formData.append("pinataOptions", JSON.stringify({
          cidVersion: 1,
        }));

        const options = {
          method: 'POST',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhYTFkMTMxMS1hMmViLTRlM2YtODdkZi0zZDBjYTA4ZmZkMzUiLCJlbWFpbCI6ImV2YS5hc3Byb3U5OUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZGUzNWQzYWU3M2UwZmFlYzZhZTMiLCJzY29wZWRLZXlTZWNyZXQiOiI4NTM2YWVlYTM0MmQ3ZTgwMDI5NjgxNWZiMzcwNTRhMzY5Yjg5NjU4YjE1NDUyZTJlZmQyMmQwNzQ0MDhlMjIwIiwiZXhwIjoxNzU2NzI4NDc5fQ.P8ZYuXD6waHPaurgOLfhdflMGSGRDFbdAmEUZp_Vep4', // Replace with your actual Pinata JWT token
          },
          body: formData,
        };

        const resFile = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', options)
          .then(response => response.json())
          .catch(err => {
            throw new Error("Unable to upload File to Pinata");
          });

        const ImgHash = `https://peach-persistent-goldfish-485.mypinata.cloud/ipfs/${resFile.IpfsHash}`;
        await contract.uploadFile(ImgHash);  // Assuming your contract method is still uploadFile
        alert("Successfully File Uploaded");
        setFileName("No File selected");
        setFile(null);
      } catch (e) {
        alert(e.message);
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    setFile(data);
    setFileName(data.name);
  };

  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose File
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">File: {fileName}</span>
        <button type="submit" className="upload" disabled={!file}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
