import React, { useState, useEffect } from "react";
import Cards from "../components/cards/Cards";
import InputGroup from "../components/InputGroup/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { dimension, name } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center">Location: {name}</h1>
        <h5 className="text-center">Dimension: {dimension}</h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h2>Pick Location </h2>
          <InputGroup setId={setId} name={"Location"} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/Location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

