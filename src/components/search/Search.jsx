import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch, setpageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setpageNumber(1);
          setSearch(e.target.value);
        }}
        className={styles.input}
        placeholder="Search for Characters!"
        type="text"
        name=""
        id=""
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
