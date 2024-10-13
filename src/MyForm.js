import React, { useState } from "react";

const MyForm = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    
=======

>>>>>>> b788b29 ( commit)
    if (!file) {
      alert("Please upload a CSV file.");
      return;
    }

    // Create FormData to send file in the POST request
    const formData = new FormData();
    formData.append("file", file);

    try {
<<<<<<< HEAD
      const response = await fetch("https://maaat-api-app-anishalata.replit.app/api/data", {
=======
      const response = await fetch("https://c2c04219-6197-44a9-b6e1-d7fb982de977-00-bn9y8e4l844n.kirk.replit.dev/api/data", {
>>>>>>> b788b29 ( commit)
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
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-blue-50 flex flex-col justify-between">
      {/* Header Section */}
      <header className="bg-blue-200 py-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">AidFlow</h1>
          <p className="text-xl font-light text-gray-700 mt-2">
            Relief Assistance - Made Possible By AI
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Content */}
            <div className="text-center md:text-left max-w-lg">
              <p className="text-xl text-gray-700">
                After disaster strikes, people are in need of resources, including water,
                shelter, food, clothing, and so much more. AidFlow helps allocate resources 
                optimally to every county which has been affected based upon risk analysis 
                parameters.
              </p>
            </div>

            {/* Right Image */}
            <div className="mt-8 md:mt-0">
              <img
                src="/path-to-your-image.png" // Replace with your actual image path
                alt="AidFlow"
                className="w-full max-w-xs mx-auto md:mx-0"
              />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input 
                type="file" 
                accept=".csv"
                onChange={handleFileChange}
                className="mb-4 border border-gray-300 rounded-lg p-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>

            {/* Display result if available */}
            {result && (
              <div className="mt-6 bg-white shadow-md rounded-lg p-4 text-gray-700">
                <h3 className="font-semibold text-lg">Analysis Result:</h3>
                <p>{result}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-200 py-4 text-center">
        <p className="text-gray-600">© 2024 AidFlow. All rights reserved.</p>
      </footer>
>>>>>>> b788b29 ( commit)
    </div>
  );
};

export default MyForm;
