import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [fnameinp, setFnameinp] = useState("");
  const [lnameinp, setLnameinp] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const filterData = () => {
    const filtered = data.filter((item) => {
      const firstNameMatch =
        fnameinp.trim() === "" ||
        item.first_name.toLowerCase().includes(fnameinp.toLowerCase());
      const lastNameMatch =
        lnameinp.trim() === "" ||
        item.last_name.toLowerCase().includes(lnameinp.toLowerCase());
      return firstNameMatch && lastNameMatch;
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [fnameinp, lnameinp]); // Include fnameinp and lnameinp in the dependency array

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={fnameinp}
          onChange={(e) => setFnameinp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lnameinp}
          onChange={(e) => setLnameinp(e.target.value)}
        />
      </form>
      <div>
        {filteredData.map((item) => (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.first_name}</li>
            <li>{item.last_name}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
