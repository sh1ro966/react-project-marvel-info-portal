import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {MainPage, ComicsPage} from '../pages';

import AppHeader from "../appHeader/AppHeader";
import PageUp from '../pageUp/PageUp';

const App = () => {

        return (
            <Router>
                <div id="up">
                    <AppHeader />
                </div>
                <main className="app_container">
                    <Routes>
                    <Route path="/" element={<MainPage />} />
                        <Route path="/comics" element={<ComicsPage />} />
                    </Routes>
                </main>
                <PageUp />
            </Router>
        )
    }


export default App;
