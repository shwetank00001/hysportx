import React, { useEffect, useRef, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";


// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
    let user = JSON.parse(localStorage.getItem('user'));
    const ref = useRef();
    const activateParentDropdown = useCallback((item) => {
        item.classList.add("active");
        const parent = item.parentElement;
        const parent2El = parent.childNodes[1];

        if (parent2El && parent2El.id !== "side-menu") {
            parent2El.classList.add("mm-show");
        }

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

        if (parent2) {
            parent2.classList.add("mm-show"); // ul tag

            const parent3 = parent2.parentElement; // li tag

            if (parent3) {
                parent3.classList.add("mm-active"); // li
                parent3.childNodes[0].classList.add("mm-active"); //a
                const parent4 = parent3.parentElement; // ul
                if (parent4) {
                    parent4.classList.add("mm-show"); // ul
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("mm-show"); // li
                        parent5.childNodes[0].classList.add("mm-active"); // a tag
                    }
                }
            }
        }
        scrollElement(item);
            return false;
        }
        scrollElement(item);
            return false;
    }, []);

    const removeActivation = (items) => {
        for (var i = 0; i < items.length; ++i) {
            var item = items[i];
            const parent = items[i].parentElement;
            if (item && item.classList.contains("active")) {
                item.classList.remove("active");
            }
            if (parent) {
                const parent2El = parent.childNodes && parent.childNodes.lenght && parent.childNodes[1] ? parent.childNodes[1] : null;
                if (parent2El && parent2El.id !== "side-menu") {
                    parent2El.classList.remove("mm-show");
                }

                parent.classList.remove("mm-active");
                const parent2 = parent.parentElement;

                if (parent2) {
                    parent2.classList.remove("mm-show");

                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove("mm-active"); // li
                        parent3.childNodes[0].classList.remove("mm-active");

                        const parent4 = parent3.parentElement; // ul
                        if (parent4) {
                            parent4.classList.remove("mm-show"); // ul
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.remove("mm-show"); // li
                                parent5.childNodes[0].classList.remove("mm-active"); // a tag
                            }
                        }
                    }
                }
            }
        }
    };

    const path = useLocation();
    const activeMenu = useCallback(() => {
        const pathName = path.pathname;
        let matchingMenuItem = null;
        const ul = document.getElementById("side-menu");
        const items = ul.getElementsByTagName("a");
        removeActivation(items);

        for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
            matchingMenuItem = items[i];
            break;
        }
        }
        if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
        }
    }, [path.pathname, activateParentDropdown]);

    useEffect(() => {
        ref.current.recalculate();
    }, []);

    useEffect(() => {
        new MetisMenu("#side-menu");
        activeMenu();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        activeMenu();
    }, [activeMenu]);
   

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop;
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop = currentPosition - 300;
            }
        }
    }

    return (
        <React.Fragment>
            <SimpleBar className="h-100" ref={ref}>
                <div id="sidebar-menu">
                <ul className="metismenu list-unstyled" id="side-menu">
                    {user?.role?.role_type?.toLowerCase() == 'admin' &&
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li>
                                <Link to="/admin/dashboard">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Dashboard")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/email-inbox">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Email")}</span>
                                </Link>
                            </li>
                          
                            <li>
                                <Link to="/admin/calender">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Calender")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/chat">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Chat")}</span>
                                </Link>
                            </li>
                           
                            <li>
                                <Link to="/admin/email-read">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Email Read")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/HYSPORTX">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("HYSPORTX")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/HYSPORTX category">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("HYSPORTX Category")}</span>
                                </Link>
                            </li>
                           
                            <li>
                                <Link to="/admin/email-read">
                                    <i className="bx bx-calendar"></i>
                                    <span>{props.t("Shortcut Hub")}</span>
                                </Link>
                            </li>
                        </ul>
                    }

                    {user?.role?.role_type?.toLowerCase() == 'community' &&
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li>
                                <Link to="/community/dashboard">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Dashboard")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/community/communitylist">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Communitylist")}</span>
                                </Link>
                            </li>
                        </ul>
                    }

                    {user?.role?.role_type?.toLowerCase() == 'participator' &&
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li>
                                <Link to="/participator/dashboard">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Dashboard")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/participator/productservice">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Product Service")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/participator/participatorsession">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Session")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/participator/participatornotification">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Notification")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/participator/participatoremailhistory">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Email History")}</span>
                                </Link>
                            </li>
                        </ul>
                    }
                    {user?.role?.role_type?.toLowerCase() == 'client' &&
                        <div>
                            <li>
                                <Link to="/client/dashboard">
                                    <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Dashboard")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/#" className="has-arrow">
                                    <i className='bx bxs-cube-alt'></i>
                                    <span>{props.t("KYC")}</span>
                                </Link>
                                <ul className="sub-menu">
                                    <li> <Link to="/client/business-kyc">{props.t("Business KYC")}</Link> </li>
                                    <li>
                                        <Link to="/client/indivisual-kyc">
                                            {props.t("Indivisual KYC")}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </div>
                    }
                        <li>
                            <Link to="/#" className="has-arrow ">
                                <i className="bx bx-share-alt"></i>
                                <span>{props.t("Multi Level")}</span>
                            </Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/#">{props.t("Level 1.1")}</Link>
                                </li>
                                <li>
                                    <Link to="/#" className="has-arrow">
                                        {props.t("Level 1.2")}
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/#">{props.t("Level 2.1")}</Link>
                                        </li>
                                        <li>
                                            <Link to="/#">{props.t("Level 2.2")}</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </SimpleBar>
        </React.Fragment >
    );
}

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent));
