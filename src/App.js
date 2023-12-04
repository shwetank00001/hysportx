import PropTypes from 'prop-types';
import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Routes, Route } from "react-router-dom";
import { layoutTypes } from "./constants/layout";
// Import Routes all
import { publicRoutes, adminRoutes, communityRoutes, participatorRoutes, clientRoutes } from "./routes";

// Import all middleware
import { Adminmiddleware, Communitymiddleware, Participatormiddleware, Clientmiddleware} from "./routes/route";

// layouts Format
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);


const getLayout = (layoutType) => {
    let Layout = VerticalLayout;
    switch (layoutType) {
        case layoutTypes.VERTICAL:
            Layout = VerticalLayout;
            break;
        case layoutTypes.HORIZONTAL:
            Layout = HorizontalLayout;
            break;
        default:
            break;
    }
    return Layout;
};

const App = () => {


    const selectLayoutState = (state) => state.Layout;
    const LayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            layoutType: layout.layoutType,
        })
    );

    const { layoutType } = useSelector(LayoutProperties);

    const Layout = getLayout(layoutType);

    return (
        <React.Fragment>
            <Routes>
                {publicRoutes.map((route, idx) => (
                <Route
                    path={route.path}
                    element={
                    <NonAuthLayout>
                        {route.component}
                    </NonAuthLayout>
                    }
                    key={idx}
                    exact={true}
                />
                ))}

                {adminRoutes.map((route, idx) => (
                    <Route 
                        path={route.path}
                        element={
                            <Adminmiddleware>
                                <Layout>{route.component}</Layout>
                            </Adminmiddleware>}
                        key={idx}
                        exact={true}
                    />
                ))}

                {communityRoutes.map((route, idx) => (
                    <Route 
                        path={route.path}
                        element={
                            <Communitymiddleware>
                                <Layout>{route.component}</Layout>
                            </Communitymiddleware>}
                        key={idx}
                        exact={true}
                    />
                ))}

                {participatorRoutes.map((route, idx) => (
                    <Route 
                        path={route.path}
                        element={
                            <Participatormiddleware>
                                <Layout>{route.component}</Layout>
                            </Participatormiddleware>}
                        key={idx}
                        exact={true}
                    />
                ))}

                {clientRoutes.map((route, idx) => (
                    <Route 
                        path={route.path}
                        element={
                            <Clientmiddleware>
                                <Layout>{route.component}</Layout>
                            </Clientmiddleware>}
                        key={idx}
                        exact={true}
                    />
                ))}


            </Routes>
        </React.Fragment>
    );
};

App.propTypes = {
    layout: PropTypes.any
};

export default App;