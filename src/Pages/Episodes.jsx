import React, { useState, useEffect } from "react";
import Cards from "../components/cards/Cards";
import InputGroup from "../components/InputGroup/InputGroup";

const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center">Episode: {name}</h1>
        <h5 className="text-center">Air Date: {air_date}</h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h2>Pick Episodes </h2>
          <InputGroup setId={setId} name={"Episode"} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/Episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
