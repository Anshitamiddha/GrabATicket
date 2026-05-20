import React from "react";
import ReactDOM from "react-dom/client";
import "./src/style.css";
import Header from "./src/Components/Header";

const Applayout=()=>{
    return(
        <div className="app">
            <Header/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Applayout />);