import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  let { name, image, location, origin, gender, species, status } =
    fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-4">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-4">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-4">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">Gender: {gender}</div>
          <div className="">Species: {species}</div>
        <div className="">Location: {location?.name}</div>
          <div className="">Origin: {origin?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;