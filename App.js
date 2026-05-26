import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./src/Components/Header";

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);