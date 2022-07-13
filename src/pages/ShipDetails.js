// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpaceMisson from "../graphql";

export default function ShipDetails({ data }) {
  const [isPending, setIsPending] = useState();

  const { id } = useParams();
  const [ship, setShip] = useState(data);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadSpaceMission = async () => {
    let spaceMission = await SpaceMisson.getSpaceMission(20);
    setIsPending(false);
    spaceMission = spaceMission.find((sp) => sp["id"] === id);
    setShip(spaceMission);
  };

  useEffect(() => {
    loadSpaceMission();
  }, [data, loadSpaceMission]);

  return (
    <section className="shipDetailsPage">
      {isPending && (
        <div>
          <p>loading.....</p>
        </div>
      )}
      {ship && (
        <div className="shipDetailsPage_card">
          <img
            className="shipDetailsPage_card_img"
            src={
              ship.image
                ? ship.image
                : "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt={ship.name}
          />
          <div className="shipDetailsPage_card_items">
            <h4>
              name:<span>{ship.name}</span>
            </h4>
            <p>
              model:<span>{ship.model ? ship.model : "model not found"}</span>
            </p>
            <p>
              type:<span>{ship.type ? ship.type : "model not found"}</span>
            </p>
            <p>
              year built:
              <span>
                {ship.year_built ? ship.year_built : "year not found"}
              </span>
            </p>
            <p>
              status:<span>{ship.status ? ship.status : "not active"}</span>
            </p>
            <p>
              sucessful landings:
              <span>
                {ship.successful_landings
                  ? ship.successful_landings
                  : "no landing was successful"}
              </span>
            </p>
            <p>
              speed:
              <span>
                {ship.speed_kn ? ship.speed_kn : "currently not available"}
              </span>
            </p>
            <p>
              weight in kg:
              <span>
                {ship.weight_kg ? ship.weight_kg : "currently not available"}
              </span>
            </p>
            <p>
              mmsi:
              <span>{ship.mmsi ? ship.mmsi : "currently not available"}</span>
            </p>
            <p>
              course deg:
              <span>
                {ship.course_deg ? ship.course_deg : "currently not available"}
              </span>
            </p>
            <p>
              url:
              <span>
                <a href={ship.url} target={"_blank"} rel="noreferrer">
                  click here
                </a>
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
