import Input from "components/ui/Input";
import React from "react";
import magnify from "assets/images/magnify.svg";
import style from "./search.module.css";

const Search = () => {
  return (
    <section className={style.container}>
      <Input imgIcon={magnify} />
    </section>
  );
};

export default Search;
