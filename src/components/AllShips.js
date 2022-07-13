import React from "react";
import { Link } from "react-router-dom";

export default function AllShips({ data }) {
  return (
    <section className="allShips">
      <h1 className="allShips_title">all ships</h1>
      <div className="allShips_row">
        {data.map((dataSet) => (
          <div className="allShips_card" key={dataSet.id}>
            <img
              className="allShips_card_img"
              src={
                dataSet.image
                  ? dataSet.image
                  : "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt={dataSet.name}
            />
            <div className="allShip_card_btm">
              <h3 className="allShips_card_text">
                year built:
                <span>
                  {dataSet.year_built ? dataSet.year_built : "year not found"}
                </span>
              </h3>
              <h3 className="allShips_card_text">
                ship name: <span>{dataSet.name}</span>
              </h3>
              <p className="allShips_card_text">
                model:
                <span>
                  {dataSet.model ? dataSet.model : "currently not available"}
                </span>
              </p>
              <p className="allShips_card_btn">
                <Link to={`/ships/${dataSet.id}`}>view more</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
