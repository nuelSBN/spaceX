import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Search({ data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const value = e.target.value;
    const newValue = data.filter((searched) => {
      return searched.name.toLowerCase().includes(value.toLowerCase());
    });
    if (value === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newValue);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
  };

  return (
    <form>
      <div className="searchBox">
        <input
          type="search"
          placeholder="search ships name...."
          onChange={handleFilter}
        />
        <span>
          {filteredData.length === 0 ? (
            <FaSearch />
          ) : (
            <FaTimes id="closedBtn" onClick={clearInput} />
          )}
        </span>
      </div>
      {filteredData.length !== 0 && (
        <div className="search_items">
          {filteredData.slice(0, 5).map((data) => {
            return (
              <Link
                key={data.id}
                to={`/ships/${data.id}`}
                className="searchItem"
              >
                {data.name}
              </Link>
            );
          })}
        </div>
      )}
      {/* <Buttons data={data} /> */}
    </form>
  );
}
