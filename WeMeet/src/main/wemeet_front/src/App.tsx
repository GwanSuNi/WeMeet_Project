import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import Box from "@mui/material/Box";
import MainLayout from "./layout/MainLayout";

function App() {

    return (
        <>
            <MainLayout>
                <SignUp/>
            </MainLayout>
        </>
    );
}

export default App;
