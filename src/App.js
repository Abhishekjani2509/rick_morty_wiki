import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/filters/Filters";
import Cards from "./components/cards/Cards";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from"./components/cards/CardDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/Episodes/:id" element={<CardDetails />} />
        <Route path="/Location" element={<Location />} />
        <Route path="Location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

function Home() {
  let [pageNumber, setpageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [status, setStatus] = useState([""]);
  let [gender, setGender] = useState([""]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="Home">
      <h1 className="text-center">Characters</h1>
      <Search setpageNumber={setpageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setpageNumber={setpageNumber}
            setGender={setGender}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setpageNumber={setpageNumber}
      />
    </div>
  );
}

export default App;
