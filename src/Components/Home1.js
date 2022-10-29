import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import clips from "../Images/clips.png";
import calendar from "../Images/calendar.png";
import gmail from "../Images/gmail.png";
import { Line, Doughnut } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const drawerWidth = 266;

function ResponsiveDrawer(props) {
  document.body.onload = function () {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1000);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  setInterval(() => {
    document.getElementById("dateandtime").innerHTML = refreshDate(new Date());
  }, 1000);

  const refreshDate = (date) => {
    return date.toLocaleString([], {
      weekday: "long",
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const drawer = (
    <div>
      <Toolbar />
      <div></div>
      <Divider />
      <div className="position-relative justify-content-center align-items-center d-flex py-2">
        <div>
          <div className="text-center py-4 pb-5">
            <span className="fa fa-book fa-4x text-white text-center"></span>
            <div
              className="text-white"
              style={{ fontWeight: "700", fontSize: "25px" }}
            >
              <span style={{ color: "#00a82d" }}>Hand</span>Book
            </div>
          </div>
          <div
            className="fa fa-search text-white position-absolute"
            style={{ paddingInline: "12px", paddingTop: "13px" }}
          ></div>
          <input
            type="search"
            className="bg-dark border-0"
            placeholder="Search"
            style={{
              height: "42px",
              outline: "none",
              borderRadius: "50px",
              paddingLeft: "34px",
            }}
          />
        </div>
      </div>
      <div className="position-relative justify-content-center align-items-center d-flex px-2">
        <div className="w-100 px-3">
          <div
            className="fa fa-plus text-white position-absolute"
            style={{ paddingInline: "12px", paddingTop: "13px" }}
          ></div>
          <div
            className="fa fa-angle-down text-white position-absolute"
            style={{ paddingInline: "12px", paddingTop: "13px", left: "78%" }}
          ></div>
          <div
            className="border-0"
            style={{
              height: "42px",
              background: "#00a82d",
              outline: "none",
              borderRadius: "50px",
              paddingLeft: "34px",
            }}
          ></div>
        </div>
      </div>
      <Divider />
      <div>
        <ul
          className="nav nav-tabs list-unstyled px-3 my-5 DashTabs"
          style={{
            color: "black",
            fontWeight: "500",
            borderBottom: "none",
            fontSize: "20px",
          }}
        >
          <li className="active py-2" style={{ width: "100%" }}>
            <div
              className="active p-3 tab align-items-center text-white d-flex"
              type="button"
              data-bs-toggle="tab"
              href="#home"
            >
              <span className="fa fa-home" style={{ paddingRight: "20px" }} />
              Home
            </div>
          </li>
          <li className="py-2" style={{ width: "100%" }}>
            <div
              className="p-3 tab align-items-center d-flex text-white"
              type="button"
              data-bs-toggle="tab"
              href="#inbox"
            >
              <span
                className="fa fa-envelope-o"
                style={{ paddingRight: "20px" }}
              />
              Inbox
            </div>
          </li>
          <li className="py-2" style={{ width: "100%" }}>
            <div
              className="p-3 tab align-items-center d-flex text-white"
              type="button"
              data-bs-toggle="tab"
              href="#dropbox"
            >
              <span
                className="fa fa-dropbox"
                style={{ paddingRight: "20px" }}
              />
              DropBox
            </div>
          </li>
          <li className="py-2" style={{ width: "100%" }}>
            <div
              className="p-3 tab align-items-center d-flex text-white"
              type="button"
              data-bs-toggle="tab"
              href="#calendar"
            >
              <span
                className="fa fa-calendar"
                style={{ paddingRight: "20px" }}
              />
              Calendar
            </div>
          </li>
          <li className="py-2" style={{ width: "100%" }}>
            <div
              className="p-3 tab align-items-center d-flex text-white"
              type="button"
              data-bs-toggle="tab"
              href="#transactions"
            >
              <span
                className="fa fa-credit-card"
                style={{ paddingRight: "20px" }}
              />
              Transactions
            </div>
          </li>
        </ul>
      </div>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;


  return (
    <div>
      <div id="loader">
        <div
          className="justify-content-center align-items-center d-flex"
          style={{ height: "100vh" }}
        >
          <div id="spinner" className="text-center"></div>
          <span
            className="fa fa-book fa-4x position-absolute"
            style={{ color: "#00a82d" }}
          ></span>
        </div>
      </div>
      <div id="content" style={{ display: "none" }} className="animate-bottom">
        <div className="">
          <AppBar
            className="p-2"
            sx={{
              background: "transparent",
              boxShadow: "none",
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
           
            <div
              className="d-lg-flex d-md-flex d-sm-flex align-items-center navbar justify-content-center p-4 mt-lg-0 mt-md-0 mt-5"
              style={{
                textShadow: "1px 1px 2px rgb(0 0 0 / 40%)",
              }}
            >
              <div
                className=" mb-lg-0 mb-md-0 md-sm-0 mb-2"
                style={{ fontSize: "25px" }}
              >
                Good Morning, abc!
              </div>
              <div
                className="px-lg-5 px-md-5 px-3 mb-lg-0 mb-md-0 md-sm-0 mb-2"
                id="dateandtime"
                style={{ marginLeft: "auto", fontSize: "17px" }}
              ></div>
              <div className="btn btn-dark">
                <span className="fa fa-edit"></span>&nbsp;Customize
              </div>
            </div>
            <IconButton
            className="position-absolute p-4 fa fa-bars"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: "black"
            }}
          >
            
          </IconButton>
          </AppBar>
        </div>

        <Box sx={{ display: "flex" }}>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  background: "black",
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  background: "black",
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            className="p-0"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <div className="contentBg" style={{ height: "70vh" }}>
              <div className="content position-relative" style={{ top: "60%" }}>
                <div className="tab-content">
                  <div
                    id="home"
                    className="active tab-pane content position-relative"
                  >
                    <div className="row mx-3">
                      <div className="col-lg-8 col-12 mr-2">
                        <div
                          className="p-3"
                          style={{
                            minHeight: "50vh",
                            borderRadius: "15px",
                            background: "#1a1a1a",
                          }}
                        >
                          <div className="text-white">
                            NOTES{" "}
                            <span
                              className="fa fa-angle-right"
                              style={{ color: "#00a82d" }}
                            ></span>
                          </div>
                          <ul
                            className="nav nav-tabs list-unstyled"
                            style={{
                              color: "black",
                              borderBottom: "none",
                              fontSize: "17px",
                            }}
                          >
                            <li className="active py-2">
                              <div
                                className="active tab"
                                type="button"
                                data-bs-toggle="tab"
                                href="#recent"
                              >
                                Recent
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="px-3 tab text-white"
                                type="button"
                                data-bs-toggle="tab"
                                href="#suggested"
                              >
                                Suggested
                              </div>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div id="recent" className="active tab-pane">
                              <div className="row">
                                <div
                                  className="col-lg-4 col-md-6 col-12 mb-lg-0 text-white px-3 py-2">
                                  <div
                                  className="p-3"
                                  style={{
                                    height: "290px",
                                    background: "#262626",
                                    borderRadius: "15px",
                                  }}
                                >
                                  Untitled
                                </div>
                                </div>
                                <div
                                  className="col-lg-4 col-md-6 col-12 mb-lg-0 text-white px-3 py-2">
                                  <div
                                  className="p-3"
                                  style={{
                                    height: "290px",
                                    background: "#262626",
                                    borderRadius: "15px",
                                  }}
                                >
                                  Untitled
                                </div>
                                </div>
                                <div
                                  className="col-lg-4 col-md-6 col-12 text-white px-3 py-2">
                                  <div
                                  className="p-3"
                                  style={{
                                    height: "290px",
                                    background: "#262626",
                                    borderRadius: "15px",
                                  }}
                                >
                                  Untitled
                                </div>
                                </div>
                              </div>
                            </div>
                            <div id="suggested" className="tab-pane">
                              hellp
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-12 ml-2 mt-lg-0 mt-4">
                        <div
                          className="p-3"
                          style={{
                            minHeight: "50vh",
                            borderRadius: "15px",
                            background: "rgb(38, 37, 28)",
                            border: "1px solid rgb(111, 108, 82)",
                          }}
                        >
                          <div className="text-white">
                            SCRATCH PAD<br></br>
                            <textarea
                              rows={14}
                              type="text"
                              placeholder="Start Writing..."
                              className="border-0 bg-transparent mt-2 text-white"
                              style={{
                                outline: "none",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4 ml-2">
                        <div
                          className="p-3"
                          style={{
                            height: "50vh",
                            borderRadius: "15px",
                            background: "#1a1a1a",
                          }}
                        >
                          <div className="text-white">RECENTLY CAPTURED</div>
                          <ul
                            className="nav nav-tabs list-unstyled"
                            style={{
                              color: "black",
                              borderBottom: "none",
                              fontSize: "17px",
                            }}
                          >
                            <li className="active py-2">
                              <div
                                className="active tab"
                                type="button"
                                data-bs-toggle="tab"
                                href="#clips"
                              >
                                Web Clips
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="px-3 tab text-white"
                                type="button"
                                data-bs-toggle="tab"
                                href="#images"
                              >
                                Images
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="px-3 tab text-white"
                                type="button"
                                data-bs-toggle="tab"
                                href="#documents"
                              >
                                Documents
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="px-3 tab text-white"
                                type="button"
                                data-bs-toggle="tab"
                                href="#audio"
                              >
                                Audio
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="px-3 tab text-white"
                                type="button"
                                data-bs-toggle="tab"
                                href="#emails"
                              >
                                Emails
                              </div>
                            </li>
                          </ul>
                          <div
                            className="tab-content"
                            style={{ height: "83%" }}
                          >
                            <div
                              id="clips"
                              className="active tab-pane"
                              style={{ height: "100%" }}
                            >
                              <div
                                className="justify-content-center d-flex align-items-center"
                                style={{ height: "100%" }}
                              >
                                <div className="text-center">
                                  <img
                                    src={clips}
                                    className="img-fluid"
                                    style={{ width: "7vw" }}
                                  />
                                  <div className="text-center text-white mt-3">
                                    Save useful information from the web.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="images" className="tab-pane">
                              hellp1
                            </div>
                            <div id="documents" className="tab-pane">
                              hellp2
                            </div>
                            <div id="audio" className="tab-pane">
                              hellp3
                            </div>
                            <div id="emails" className="tab-pane">
                              hellp4
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="inbox" className="tab-pane fade p-4">
                    <div
                      className="p-3"
                      style={{
                        borderRadius: "15px",
                        background: "#1a1a1a",
                      }}
                    >
                      <div className="text-white" style={{ fontWeight: "500" }}>
                        INBOX
                      </div>
                      <img
                        src={gmail}
                        className="img-fluid mt-3"
                        style={{ borderRadius: "15px", height: "85vh" }}
                      />
                    </div>
                  </div>

                  <div id="dropbox" className="tab-pane fade p-4">
                    <div
                      className="p-3"
                      style={{
                        height: "90vh",
                        borderRadius: "15px",
                        background: "#1a1a1a",
                      }}
                    >
                      <div className="text-white">RECENTLY CAPTURED</div>
                      <ul
                        className="nav nav-tabs list-unstyled"
                        style={{
                          color: "black",
                          borderBottom: "none",
                          fontSize: "17px",
                        }}
                      >
                        <li className="active py-2">
                          <div
                            className="active tab"
                            type="button"
                            data-bs-toggle="tab"
                            href="#clips"
                          >
                            Web Clips
                          </div>
                        </li>
                        <li className="py-2">
                          <div
                            className="px-3 tab text-white"
                            type="button"
                            data-bs-toggle="tab"
                            href="#images"
                          >
                            Images
                          </div>
                        </li>
                        <li className="py-2">
                          <div
                            className="px-3 tab text-white"
                            type="button"
                            data-bs-toggle="tab"
                            href="#documents"
                          >
                            Documents
                          </div>
                        </li>
                        <li className="py-2">
                          <div
                            className="px-3 tab text-white"
                            type="button"
                            data-bs-toggle="tab"
                            href="#audio"
                          >
                            Audio
                          </div>
                        </li>
                        <li className="py-2">
                          <div
                            className="px-3 tab text-white"
                            type="button"
                            data-bs-toggle="tab"
                            href="#emails"
                          >
                            Emails
                          </div>
                        </li>
                      </ul>
                      <div className="tab-content" style={{ height: "83%" }}>
                        <div
                          id="clips"
                          className="active tab-pane"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="justify-content-center d-flex align-items-center"
                            style={{ height: "100%" }}
                          >
                            <div className="text-center">
                              <img
                                src={clips}
                                className="img-fluid"
                                style={{ width: "7vw" }}
                              />
                              <div className="text-center text-white mt-3">
                                Save useful information from the web.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="images" className="tab-pane">
                          hellp1
                        </div>
                        <div id="documents" className="tab-pane">
                          hellp2
                        </div>
                        <div id="audio" className="tab-pane">
                          hellp3
                        </div>
                        <div id="emails" className="tab-pane">
                          hellp4
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="calendar" className="tab-pane fade p-4">
                    <div
                      className="p-3"
                      style={{
                        height: "90vh",
                        borderRadius: "15px",
                        background: "#1a1a1a",
                      }}
                    >
                      <div className="text-white" style={{ fontWeight: "500" }}>
                        CALENDAR
                      </div>
                      <img
                        src={calendar}
                        className="img-fluid mt-3"
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                  </div>

                  <div id="transactions" className="tab-pane fade p-4">
                    <div
                      className="p-3"
                      style={{
                        // height: "90vh",
                        borderRadius: "15px",
                        background: "#1a1a1a",
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-lg-0 mb-md-0 mb-4">
                          <div
                            className="py-4 rounded border-0 text-white"
                            style={{
                              background: "#262626",
                              boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                            }}
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                  <h5>Successful Transactions</h5>
                                  <h4 className="font-weight-bold">7956</h4>
                                  <div className="color">
                                    <div className="fa fa-arrow-up fa-rotate-45 fa-lg font-weight-lighter pt-1"></div>
                                    <h6 className="px-4 pt-1">+0.6%</h6>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-end">
                                  <div style={{ width: "120px" }}>
                                    <CircularProgressbar
                                      value={72}
                                      text={`${72}%`}
                                      styles={buildStyles({
                                        pathColor: "#4343cb",
                                        textColor: "#4343cb",
                                        trailColor: "grey",
                                      })}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-lg-0 mb-md-0 mb-4">
                          <div
                            className="py-4 rounded  border-0 text-white"
                            style={{
                              background: "#262626",
                              boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                            }}
                          >
                            <div className="container">
                              <div className="row ">
                                <div className="col-lg-6 col-md-12 col-12 ">
                                  <h5>Pending Transactions</h5>
                                  <h4 className="font-weight-bold">4658</h4>
                                  <div className="">
                                    <div className="fa fa-arrow-up fa-rotate-45 fa-lg font-weight-lighter text-white pt-1"></div>
                                    <h6 className="px-4 pt-1">+0.6%</h6>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-end">
                                  <div style={{ width: "120px" }}>
                                    <CircularProgressbar
                                      value={8}
                                      text={`${8}%`}
                                      styles={buildStyles({
                                        pathColor: "#ff9800",
                                        textColor: "#ff9800",
                                        trailColor: "grey",
                                      })}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-lg-0 mb-md-0 mb-4">
                          <div
                            className="py-4 rounded border-0 text-white"
                            style={{
                              background: "#262626",
                              boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                            }}
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                  <h5>Failed Transactions</h5>
                                  <h4 className="font-weight-bold">1501</h4>
                                  <div className="color1">
                                    <div className="fa fa-arrow-up fa-rotate-45 fa-lg  font-weight-lighter pt-1"></div>
                                    <h6 className="px-4 pt-1">+0.6%</h6>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-end">
                                  <div style={{ width: "120px" }}>
                                    <CircularProgressbar
                                      value={20}
                                      text={`${20}%`}
                                      styles={buildStyles({
                                        pathColor: "#c02d2d",
                                        textColor: "#c02d2d",
                                        trailColor: "grey",
                                      })}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-8 col-12 mt-lg-4 mt-md-4 mb-lg-0 mb-4">
                          <div
                            className="rounded border-0 text-white"
                            style={{
                              background: "#262626",
                              boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                            }}
                          >
                            <nav className="navbar rounded navbar-expand-lg navbar-light">
                              <div className="container-fluid">
                                <a className="navbar-brand text-white">
                                  Transactions
                                </a>

                                <ul className="navbar-nav">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active text-white"
                                      aria-current="page"
                                      href="#"
                                    >
                                      This Year
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                      This Week
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link text-white" href="#">
                                      Today
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </nav>
                            <div className="container">
                              <Line
                                className="chart"
                                data={{
                                  labels: [
                                    "jan",
                                    "feb",
                                    "mar",
                                    "apr",
                                    "may",
                                    "jun",
                                    "jul",
                                    "aug",
                                    "sept",
                                    "oct",
                                    "nov",
                                    "dec",
                                  ],
                                  datasets: [
                                    {
                                      label: "Applications 2019",
                                      data: [
                                        1.5, 3, 3.2, 2.3, 4, 4.5, 3, 3.5, 5,
                                        5.5, 4, 6,
                                      ],
                                      borderColor: ["rgba(194, 44, 44, 0.87)"],
                                      backgroundColor: [
                                        "rgba(197, 60, 60, 0.596)",
                                      ],
                                      // pointBackgroundColor: [
                                      //   "rgba(194, 44, 44, 0.87)",
                                      //   "rgba(194, 44, 44, 0.87)",
                                      //   "rgba(194, 44, 44, 0.87)",
                                      //   "rgba(194, 44, 44, 0.87)",
                                      //   "white",
                                      // ],

                                      fontColor: ["White"],
                                      fill: {
                                        target: "origin",
                                        above: "rgba(197, 60, 60, 0.596)",
                                      },
                                    },
                                    {
                                      label: "Applications 2020",

                                      data: [
                                        3, 2.2, 2.7, 3.4, 2.5, 3.5, 4, 3.5, 5,
                                        4.5, 4, 5,
                                      ],
                                      borderColor: [
                                        "rgba(161, 223, 17, 0.568)",
                                      ],
                                      backgroundColor: [
                                        "rgba(161, 223, 17, 0.568)",
                                      ],
                                      pointBackgroundColor: [
                                        "rgba(161, 223, 17, 0.568)",
                                        "rgba(161, 223, 17, 0.568)",
                                        "rgba(161, 223, 17, 0.568)",
                                        "rgba(161, 223, 17, 0.568)",
                                        "white",
                                      ],
                                    },
                                  ],
                                  fontColor: "white",
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-12 mt-lg-4">
                          <div
                            className="justify-content-center d-flex align-items-center border-0 text-white py-4"
                            style={{
                              background: "#262626",
                              boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                            }}
                          >
                            <h5 className="mx-4 mt-5 position-absolute">
                              Transactions
                            </h5>
                            <div className="container">
                              <h5 className="font-weight-bold">
                                All Transactions
                              </h5>
                              <Doughnut
                                className="doughnut justify-content-center d-flex pb-2 gx-0 my-auto"
                                data={{
                                  datasets: [
                                    {
                                      label: "My First Dataset",
                                      data: [72, 8, 20],

                                      backgroundColor: [
                                        "purple",
                                        "#dc3545",
                                        "rgba(13, 124, 228, 0.808)",
                                      ],
                                      hoverOffset: 4,
                                    },
                                  ],
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-4"
                    style={{ borderTop: "1px solid #80808061" }}
                  >
                    <div className="text-white mx-4 py-4">
                      <div className="d-flex align-items-center mx-1">
                        <div
                          className="fa fa-user fa-3x bg-success d-flex align-items-center justify-content-center"
                          style={{
                            borderRadius: "50px",
                            width: "60px",
                            height: "60px",
                          }}
                        ></div>
                        <div className="mx-3">
                          <div className="" style={{ fontWeight: "500" }}>
                            CUSTOMIZE YOUR HOME
                          </div>
                          <div>
                            With Hand Book you can add and remove widgets,
                            reorder and resize them, or change your background.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
