import React from "react";
import ReactDOM from "react-dom/client";
import "../Style/app.scss"
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () =>{
    return (
        <React.Fragment>
            <HeaderComponent />
            <Body />
            <Footer />
        </React.Fragment>
        
    )
    
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
