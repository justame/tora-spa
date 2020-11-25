import React, { useState } from "react";
import "./styles.css";
import { Button, CardContent, Container } from "@material-ui/core";
import SearchBar from "./SearchBar";
import ComboBox from "./Autocomplete";
import Stage from "./Stage";
export default function App() {
  const [parasha, setParasha] = useState("");
  const onChange = (e, value) => {
    setParasha(value);
  };
  return (
    <div className="App">
      <Container maxWidth="sm" dir="rtl">
        <SearchBar />
        <h1>!ברוך אתה וברוך טעמך</h1>
        <h2>
          ברכותינו על החלטתך ללמוד/לשפר את קריאתך בתורה ובהפטרה בנוסח יהודי תימן
        </h2>
        <div>
          <ComboBox onChange={onChange} />
        </div>
        <div dir="rtl">
          <Stage parasha={parasha} />
        </div>
      </Container>
    </div>
  );
}
