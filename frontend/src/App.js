import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/features")
      .then(res => setFeatures(res.data));
  }, []);

  return (
    <div>
      <h1>Feature Flags</h1>
      {features.map(f => (
        <div key={f._id}>
          {f.name} - {f.enabled ? "ON" : "OFF"}
        </div>
      ))}
    </div>
  );
}

export default App;
