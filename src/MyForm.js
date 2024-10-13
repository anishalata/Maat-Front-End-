import React, { useState } from "react";

const MyForm = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      alert("Please upload a CSV file.");
      return;
    }

    // Create FormData to send file in the POST request
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://maaat-api-app-anishalata.replit.app/api/data", {
        method: "POST",
        body: formData,
      });
      const resultData = await response.json();
      setResult(resultData.analysis); // Display only the analysis
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept=".csv"
          onChange={handleFileChange}
        />
        <button type="submit">Submit</button>
      </form>

      {result && <div>Analysis: {result}</div>}
    </div>
  );
};

export default MyForm;
