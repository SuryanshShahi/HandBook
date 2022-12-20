import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Image from "../Images/image.png";
import Audio from "../Images/audio.png";
import Doc from "../Images/document.png";
import Email from "../Images/emails.png";
import calendar from "../Images/calendar.png";
import gmail from "../Images/gmail.png";
import { Line, Doughnut } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@mui/material";
import axios from "axios";
import { Data } from "../Data/Data";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import ssss from "../Images/New Doc 2019-08-11 09.05.05.pdf";

function ResponsiveDrawer() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1000);
    console.log(docItem);
  }, []);

  const [drawerWidth, setdrawerWidth] = useState(266);
  const [isExpanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isActive, setActive] = useState(false);
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
              <span style={{ color: "#5082ff" }}>Hand</span>Book
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
              background: "#5082ff",
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
              data-toggle="tab"
              href="#home1"
            >
              <span className="fa fa-home" style={{ paddingRight: "20px" }} />
              Home
            </div>
          </li>
          <li className="py-2" style={{ width: "100%" }}>
            <div
              className="p-3 tab align-items-center d-flex text-white"
              type="button"
              data-toggle="tab"
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
              data-toggle="tab"
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
              data-toggle="tab"
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
              data-toggle="tab"
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

  // ------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Calendar-------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------
  const locales = {
    "en-US": enUS,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const [addEvent, setAddEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(Data);

  const handleEvent = () => {
    setAllEvents([...allEvents, addEvent]);
  };

  // ------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Editor---------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  const resizeEditor = () => {
    setdrawerWidth(0);
    setExpanded(true);
  };
  const compressEditior = () => {
    setdrawerWidth(266);
    setExpanded(false);
  };
  const closeEditor = () => {
    setdrawerWidth(266);
    document.body.style.background = "black";
    setActive(false);
  };
  const showEditor = () => {
    setActive(true);
    document.getElementById("navbar").style.display = "none";
    document.body.style.background = "rgb(38, 38, 38)";
  };

  const [userInfo, setuserInfo] = useState({
    title: "",
    description: "",
  });
  const onChangeValue = (e) => {
    document.getElementById("save").style.display = "block";
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  let editorState = EditorState.createEmpty();
  const [text, setText] = useState([]);
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  const submit = (e) => {
    e.preventDefault();
    var content = userInfo.description.value.replace(/<[^>]*>?/gm, "");
    setText([
      {
        id: new Date().getTime(),
        title: userInfo.title,
        description: content.replace(/\n/g, ""),
      },
      ...text,
    ]);
    toast.success("Saved !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toast-message",
    });
    document.body.style.background = "black";
    setActive(false);
    console.log(text);
  };
  const removeItem = (id) => {
    const updatedItems = text.filter((e) => {
      return e.id !== id;
    });
    setText(updatedItems);
    toast.success("Deleted !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toast-message",
    });
  };

  // ------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------File Upload-------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  const [file, setFile] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.files);
    const selectedFiles = Array.from(e.target.files);
    const images = selectedFiles.map((e) => {
      return URL.createObjectURL(e);
    });
    // setFile([...file, images]);
    setFile((prev) => prev.concat(images));
    console.log(images);
  };

  // ------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Doc Upload-------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const [doc, setDoc] = useState([]);
  const [docItem, setDocItem] = useState(doc);
  function docUpload(e) {
    console.log(e.target.files);
    const selectedFiles = Array.from(e.target.files);
    const document = selectedFiles.map((e) => {
      return URL.createObjectURL(e);
    });
    setDoc((prev) => prev.concat(document));
    // console.log(doc);
  }

  const filterDoc = (id) => {
    // const updatedDoc = doc.filter((e) => {
    //   if (e === id) {
    //     return e;
    //     // console.log(true);
    //   }
    // });
    // console.log(updatedDoc);
    setDocItem(() => doc.filter((e) => (e === id ? e : 0)));
    // setDocItem((prev) => prev.concat(updatedDoc));
    console.log(docItem);
  };

  // ------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------Recorder-------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  // ------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------
  return (
    <div id="home">
      <ToastContainer />
      <div id="loader">
        <div
          className="justify-content-center align-items-center d-flex"
          style={{ height: "100vh" }}
        >
          <div id="spinner" className="text-center"></div>
          <span
            className="fa fa-book fa-4x position-absolute"
            style={{ color: "#5082ff" }}
          ></span>
        </div>
      </div>
      <div id="content" style={{ display: "none" }} className="animate-bottom">
        <div className="" id="navbar">
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
              className="d-lg-flex align-items-center text-lg-block text-center p-4 mt-lg-0 mt-md-0 mt-5"
              style={{
                textShadow: "1px 1px 2px rgb(0 0 0 / 40%)",
              }}
            >
              <div className=" mb-lg-0 mb-3" style={{ fontSize: "25px" }}>
                Good Morning, abc!
              </div>
              <div
                className="px-lg-5 px-md-5 px-3 mb-lg-0 mb-2"
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
                color: "black",
              }}
            ></IconButton>
          </AppBar>
        </div>

        <Box sx={{ display: "flex" }}>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  background: "black",
                  transition: "none",
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
            {!isActive ? (
              <div className="contentBg" style={{ height: "70vh" }}>
                <div
                  className="content position-relative"
                  style={{ top: "60%" }}
                >
                  <div className="tab-content">
                    <div
                      id="home1"
                      className="active tab-pane content position-relative"
                    >
                      <div className="row mx-3">
                        <div className="col-lg-8 col-12 pr-2">
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
                                  data-toggle="tab"
                                  href="#recent"
                                >
                                  Recent
                                </div>
                              </li>
                              <li className="py-2">
                                <div
                                  className="mx-3 tab"
                                  type="button"
                                  data-toggle="tab"
                                  href="#suggested"
                                >
                                  Suggested
                                </div>
                              </li>
                            </ul>
                            <div className="tab-content">
                              <div
                                id="recent"
                                className="active tab-pane overflow-auto"
                              >
                                <div className="d-flex">
                                  {text.map((e) => {
                                    return (
                                      <div
                                        className="p-3 mt-2 mr-3 itemsCard position-relative"
                                        key={e.id}
                                        style={{
                                          transition: "0.5s",
                                          minWidth: "172px",
                                          height: "290px",
                                          background: "#262626",
                                          borderRadius: "15px",
                                        }}
                                      >
                                        <div
                                          className="openEditor position-absolute py-3 px-3 shadow text-white"
                                          style={{
                                            left: "32%",
                                            top: "43%",
                                            border: "2px solid white",
                                            transition: "0.5s",
                                            borderRadius: "50px",
                                            lineHeight: "0",
                                            cursor: "pointer",
                                          }}
                                          onClick={() => showEditor(e.id)}
                                        >
                                          Visit
                                        </div>
                                        <div className="justify-content-center d-flex align-items-center">
                                          <div
                                            className="hideText"
                                            style={{
                                              wordBreak: "break-all",
                                              fontWeight: "500",
                                              color: "white",
                                            }}
                                          >
                                            {e.title || "Untitled"}
                                          </div>
                                          <div
                                            className="ml-auto text-white removeBtn"
                                            style={{
                                              fontSize: "30px",
                                              lineHeight: "0",
                                              marginBottom: "7px",
                                              cursor: "pointer",
                                            }}
                                            onClick={() => removeItem(e.id)}
                                          >
                                            &times;
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            wordBreak: "break-all",
                                            color: "#ffffff99",
                                            fontSize: "14px",
                                          }}
                                          className="mt-2 hideText"
                                        >
                                          {e.description}
                                        </div>
                                      </div>
                                    );
                                  })}
                                  <div
                                    className="p-3 mt-2 justify-content-center align-items-center d-flex addItems"
                                    style={{
                                      minWidth: "172px",
                                      transition: "0.4s",
                                      height: "290px",
                                      background: "#262626",
                                      borderRadius: "15px",
                                      cursor: "pointer",
                                    }}
                                    onClick={showEditor}
                                  >
                                    <div>
                                      <div
                                        className="justify-content-center d-flex align-items-center position-relative"
                                        style={{
                                          height: "60px",
                                          width: "60px",
                                          background: "#5082ff",
                                          borderRadius: "50%",
                                          left: "25%",
                                        }}
                                      >
                                        <div
                                          className="fa fa-sticky-note fa-2x"
                                          style={{ color: "black" }}
                                        ></div>
                                        <div
                                          className="d-flex justify-content-center align-items-center position-absolute"
                                          style={{
                                            height: "13px",
                                            width: "13px",
                                            top: "33px",
                                            left: "33px",
                                            boxShadow:
                                              "0 1px 6px rgba(0,0,0,0.2)",
                                            background: "#5082ff",
                                            borderRadius: "100%",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "20px",
                                              fontWeight: 900,
                                              lineHeight: 0,
                                              marginBottom: "5px",
                                            }}
                                          >
                                            +
                                          </span>
                                        </div>
                                      </div>
                                      <div className="text-white mt-3">
                                        Create new note
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="suggested" className="tab-pane">
                                <div
                                  className="p-3 mt-2 justify-content-center align-items-center d-flex addItems"
                                  style={{
                                    minWidth: "172px",
                                    transition: "0.4s",
                                    height: "290px",
                                    background: "#262626",
                                    borderRadius: "15px",
                                    cursor: "pointer",
                                  }}
                                  onClick={showEditor}
                                >
                                  <div>
                                    <div
                                      className="justify-content-center d-flex align-items-center position-relative"
                                      style={{
                                        height: "60px",
                                        width: "60px",
                                        background: "#5082ff",
                                        borderRadius: "50%",
                                        left: "25%",
                                      }}
                                    >
                                      <div
                                        className="fa fa-sticky-note fa-2x"
                                        style={{ color: "black" }}
                                      ></div>
                                      <div
                                        className="d-flex justify-content-center align-items-center position-absolute"
                                        style={{
                                          height: "13px",
                                          width: "13px",
                                          top: "33px",
                                          left: "33px",
                                          boxShadow:
                                            "0 1px 6px rgba(0,0,0,0.2)",
                                          background: "#5082ff",
                                          borderRadius: "100%",
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: "20px",
                                            fontWeight: 900,
                                            lineHeight: 0,
                                            marginBottom: "5px",
                                          }}
                                        >
                                          +
                                        </span>
                                      </div>
                                    </div>
                                    <div className="text-white mt-3">
                                      Create new note
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-12 pl-2 mt-lg-0 mt-4">
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

                        <div className="col-12 mt-4">
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
                                  className="active mr-3 tab"
                                  type="button"
                                  data-toggle="tab"
                                  href="#images"
                                >
                                  Images
                                </div>
                              </li>
                              <li className="py-2">
                                <div
                                  className="mx-3 tab"
                                  type="button"
                                  data-toggle="tab"
                                  href="#documents"
                                >
                                  Documents
                                </div>
                              </li>
                              <li className="py-2">
                                <div
                                  className="mx-3 tab"
                                  type="button"
                                  data-toggle="tab"
                                  href="#audio"
                                >
                                  Audio
                                </div>
                              </li>
                              <li className="py-2">
                                <div
                                  className="mx-3 tab"
                                  type="button"
                                  data-toggle="tab"
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
                                id="images"
                                className="active tab-pane"
                                style={{ height: "100%" }}
                              >
                                <div
                                  className="justify-content-center d-flex align-items-center"
                                  style={{ height: "100%" }}
                                >
                                  <div className="text-center">
                                    <img
                                      src={Image}
                                      className="img-fluid"
                                      style={{ width: "7vw" }}
                                    />
                                    <div
                                      className="text-center my-3"
                                      style={{
                                        color: "#a6a6a6",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Keep images, receipts, and records in one
                                      place.
                                    </div>
                                    <div
                                      className="btn btn-dark bg-transparent px-4 mt-4 text-primary imageBtn"
                                      style={{
                                        fontWeight: "500",
                                        border: "1px solid #737373",
                                      }}
                                    >
                                      Take a photo
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="documents"
                                className="tab-pane"
                                style={{ height: "100%" }}
                              >
                                <div
                                  className="justify-content-center d-flex align-items-center"
                                  style={{ height: "100%" }}
                                >
                                  <div className="text-center">
                                    <img
                                      src={Doc}
                                      className="img-fluid"
                                      style={{ width: "7vw" }}
                                    />
                                    <div
                                      className="text-center my-3"
                                      style={{
                                        color: "#a6a6a6",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Store PDFs, documents, and presentations
                                      for safe keeping.
                                    </div>
                                    <div
                                      className="btn btn-dark bg-transparent px-4 text-primary imageBtn mt-4"
                                      style={{
                                        fontWeight: "500",
                                        border: "1px solid #737373",
                                      }}
                                    >
                                      Save documents
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="audio"
                                className="tab-pane"
                                style={{ height: "100%" }}
                              >
                                <div
                                  className="justify-content-center d-flex align-items-center"
                                  style={{ height: "100%" }}
                                >
                                  <div className="text-center">
                                    <img
                                      src={Audio}
                                      className="img-fluid"
                                      style={{ width: "7vw" }}
                                    />
                                    <div
                                      className="text-center my-3"
                                      style={{
                                        color: "#a6a6a6",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Record meetings, lectures, and interviews.
                                    </div>
                                    <div
                                      className="btn btn-dark bg-transparent px-4 text-primary imageBtn mt-4"
                                      style={{
                                        fontWeight: "500",
                                        border: "1px solid #737373",
                                      }}
                                    >
                                      Record Audio
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="emails"
                                className="tab-pane"
                                style={{ height: "100%" }}
                              >
                                <div
                                  className="justify-content-center d-flex align-items-center"
                                  style={{ height: "100%" }}
                                >
                                  <div className="text-center">
                                    <img
                                      src={Email}
                                      className="img-fluid"
                                      style={{ width: "7vw" }}
                                    />
                                    <div
                                      className="text-center my-3"
                                      style={{
                                        color: "#a6a6a6",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Upgrade to save important emails by
                                      forwarding them to your notebooks.
                                    </div>
                                    <div
                                      className="btn btn-warning bg-transparent px-4 mt-4"
                                      style={{
                                        fontWeight: "500",
                                        color: "#f0a00d",
                                        border: "1px solid #f0a00d",
                                      }}
                                    >
                                      <span
                                        className="fa fa-bolt mr-2"
                                        style={{
                                          width: "17px",
                                          color: "black",
                                          height: "17px",
                                          background: "#f0a00d",
                                          borderRadius: "50%",
                                        }}
                                      ></span>
                                      Upgrade
                                    </div>
                                  </div>
                                </div>
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
                          height: "70vh",
                          borderRadius: "15px",
                          background: "#1a1a1a",
                        }}
                      >
                        <div
                          className="text-white"
                          style={{ fontWeight: "500" }}
                        >
                          INBOX
                        </div>
                      </div>
                    </div>

                    <div id="dropbox" className="tab-pane fade p-4">
                      <div
                        className="p-3"
                        style={{
                          // height: "90vh",
                          borderRadius: "15px",
                          background: "#1a1a1a",
                        }}
                      >
                        <div className="text-white">RECENTLY CAPTURED</div>
                        <div className="d-flex align-items-center">
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
                                className="active mr-3 tab"
                                type="button"
                                data-toggle="tab"
                                href="#images1"
                              >
                                Images
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="mx-3 tab"
                                type="button"
                                data-toggle="tab"
                                href="#documents1"
                              >
                                Documents
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="mx-3 tab"
                                type="button"
                                data-toggle="tab"
                                href="#audio1"
                              >
                                Audio
                              </div>
                            </li>
                            <li className="py-2">
                              <div
                                className="mx-3 tab"
                                type="button"
                                data-toggle="tab"
                                href="#emails1"
                              >
                                Emails
                              </div>
                            </li>
                          </ul>
                          <div className="ml-auto position-relative">
                            <div
                              className="btn btn-dark position-absolute bg-transparent px-4 text-primary imageBtn"
                              style={{
                                fontWeight: "500",
                                width: "144px",
                                right: "4px",
                                bottom: "-4px",
                                border: "1px solid #737373",
                              }}
                            >
                              Take a photo
                            </div>
                            <input
                              type="file"
                              style={{
                                width: "147px",
                                opacity: "0",
                                cursor: "pointer",
                              }}
                              onChange={handleChange}
                              multiple
                            />
                          </div>
                        </div>
                        <div className="tab-content mt-4">
                          <div
                            id="images1"
                            className="active tab-pane"
                            style={{ height: "75vh" }}
                          >
                            <div
                              className="justify-content-center d-flex align-items-center"
                              style={{ height: "100%" }}
                            >
                              <div className="w-100">
                                {file.length === 0 ? (
                                  <div className="text-center">
                                    <img
                                      src={Image}
                                      className="img-fluid"
                                      style={{ width: "7vw" }}
                                    />
                                    <div
                                      className="text-center my-3"
                                      style={{
                                        color: "#a6a6a6",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Keep images, receipts, and records in one
                                      place.
                                    </div>
                                    <div
                                      className="btn btn-dark bg-transparent px-4 mt-4 text-primary imageBtn"
                                      style={{
                                        fontWeight: "500",
                                        border: "1px solid #737373",
                                      }}
                                    >
                                      Take a photo
                                    </div>
                                  </div>
                                ) : (
                                  <div style={{ height: "74vh" }}>
                                    <div
                                      className="d-flex flex-wrap"
                                      style={{
                                        height: "100%",
                                        overflow: "scroll",
                                        alignContent: "flex-start",
                                      }}
                                    >
                                      {file.map((image) => {
                                        return (
                                          <div
                                            className="mr-3 mb-3 position-relative"
                                            style={{
                                              width: "150px",
                                              height: "200px",
                                            }}
                                            key={image}
                                            onClick={() => console.log(image)}
                                          >
                                            <img
                                              className="uploadedImg"
                                              src={image}
                                              style={{
                                                cursor: "pointer",
                                                width: "150px",
                                                height: "200px",
                                              }}
                                            />
                                            <div
                                              id={image}
                                              className="position-absolute py-3 px-3 shadow text-dark"
                                              onMouseOver={() =>
                                                (document.getElementById(
                                                  `${image}`
                                                ).style.opacity = "1")
                                              }
                                              onMouseLeave={() =>
                                                (document.getElementById(
                                                  `${image}`
                                                ).style.opacity = "0")
                                              }
                                              style={{
                                                transition: "0.5s",
                                                background:
                                                  "rgba(0, 0, 0, 0.95)",
                                                top: 0,
                                                height: "200px",
                                                opacity: 0,
                                                width: "100%",
                                              }}
                                            >
                                              <div
                                                className="position-absolute fa fa-trash-o p-3 deleteImg text-white"
                                                style={{
                                                  color: "white",
                                                  left: "35%",
                                                  top: "40%",
                                                  border: "2px solid white",
                                                  transition: "0.5s",
                                                  borderRadius: "50px",
                                                  lineHeight: "0",
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  setFile(
                                                    file.filter(
                                                      (e) => e !== image
                                                    )
                                                  )
                                                }
                                              ></div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            id="documents1"
                            className="tab-pane"
                            style={{ height: "75vh" }}
                          >
                            <div
                              className="justify-content-center d-flex align-items-center"
                              style={{ height: "100%" }}
                            >
                              {" "}
                              {doc.length === 0 ? (
                                <div className="text-center">
                                  <img
                                    src={Doc}
                                    className="img-fluid"
                                    style={{ width: "7vw" }}
                                  />
                                  <div
                                    className="text-center my-3"
                                    style={{
                                      color: "#a6a6a6",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Store PDFs, documents, and presentations for
                                    safe keeping.
                                  </div>
                                  <div
                                    className="btn btn-dark bg-transparent px-4 text-primary imageBtn mt-4"
                                    style={{
                                      fontWeight: "500",
                                      border: "1px solid #737373",
                                    }}
                                  >
                                    Save documents
                                  </div>
                                  <input type="file" onChange={docUpload} />
                                </div>
                              ) : (
                                <div>
                                  {docItem.map((e) => {
                                    return (
                                      <div key={e}>
                                        <div
                                          className="modal fade"
                                          id="mymodal3"
                                          style={{ top: "25%" }}
                                        >
                                          <div className="modal-dialog">
                                            <div
                                              className="modal-content p-5"
                                              style={{ background: "#1a1a1a" }}
                                            >
                                              <div
                                                className="position-absolute text-white"
                                                style={{
                                                  fontSize: "40px",
                                                  zIndex: 1,
                                                }}
                                              >
                                                Document
                                              </div>
                                              <Document
                                                file={e}
                                                onLoadSuccess={
                                                  onDocumentLoadSuccess
                                                }
                                              >
                                                <Page pageNumber={pageNumber} />
                                              </Document>
                                              <div className="d-flex position-absolute">
                                                <div
                                                  className="btn btn-primary"
                                                  onClick={() =>
                                                    setPageNumber((e) =>
                                                      e <= 1 ? e : e - 1
                                                    )
                                                  }
                                                >
                                                  back
                                                </div>
                                                <p className="text-white">
                                                  Page {pageNumber} of{" "}
                                                  {numPages}
                                                </p>
                                                <div
                                                  className="btn btn-primary"
                                                  onClick={() =>
                                                    setPageNumber((e) =>
                                                      e === numPages ? e : e + 1
                                                    )
                                                  }
                                                >
                                                  next
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                  <input type="file" onChange={docUpload} />
                                  <div
                                    className="btn btn-primary"
                                    data-target="#mymodal3"
                                    data-toggle="modal"
                                  >
                                    open modal
                                  </div>
                                  {doc.map((e) => {
                                    return (
                                      <div key={e}>
                                        <div
                                          data-target="#mymodal3"
                                          data-toggle="modal"
                                          onClick={() => filterDoc(e)}
                                        >
                                          {e}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>

                          <div
                            id="audio1"
                            className="tab-pane"
                            style={{ height: "100%" }}
                          >
                            <div
                              className="justify-content-center d-flex align-items-center"
                              style={{ height: "100%" }}
                            >
                              <div className="text-center">
                                <img
                                  src={Audio}
                                  className="img-fluid"
                                  style={{ width: "7vw" }}
                                />
                                <div
                                  className="text-center my-3"
                                  style={{
                                    color: "#a6a6a6",
                                    fontWeight: "500",
                                  }}
                                >
                                  Record meetings, lectures, and interviews.
                                </div>

                                <div
                                  className="btn btn-dark bg-transparent px-4 text-primary imageBtn mt-4"
                                  style={{
                                    fontWeight: "500",
                                    border: "1px solid #737373",
                                  }}
                                  data-target="#mymodal2"
                                  data-toggle="modal"
                                >
                                  Record Audio
                                </div>
                              </div>

                              <div
                                className="modal fade"
                                id="mymodal2"
                                style={{ top: "25%" }}
                              >
                                <div className="modal-dialog">
                                  <div
                                    className="modal-content p-5"
                                    style={{ background: "#1a1a1a" }}
                                  >
                                    <div className="position-relative ml-5">
                                      <AudioRecorder
                                        onRecordingComplete={(e) =>
                                          addAudioElement(e)
                                        }
                                        recorderControls={recorderControls}
                                      />
                                    </div>
                                    <div className="d-flex">
                                      <button
                                        onClick={
                                          recorderControls.startRecording
                                        }
                                      >
                                        Start recording
                                      </button>
                                      <button
                                        onClick={recorderControls.stopRecording}
                                      >
                                        Stop recording
                                      </button>
                                      {recorderControls.recordingTime}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="emails1"
                            className="tab-pane"
                            style={{ height: "100%" }}
                          >
                            <div
                              className="justify-content-center d-flex align-items-center"
                              style={{ height: "100%" }}
                            >
                              <div className="text-center">
                                <img
                                  src={Email}
                                  className="img-fluid"
                                  style={{ width: "7vw" }}
                                />
                                <div
                                  className="text-center my-3"
                                  style={{
                                    color: "#a6a6a6",
                                    fontWeight: "500",
                                  }}
                                >
                                  Upgrade to save important emails by forwarding
                                  them to your notebooks.
                                </div>
                                <div
                                  className="btn btn-warning bg-transparent px-4 mt-4"
                                  style={{
                                    fontWeight: "500",
                                    color: "#f0a00d",
                                    border: "1px solid #f0a00d",
                                  }}
                                >
                                  <span
                                    className="fa fa-bolt mr-2"
                                    style={{
                                      width: "17px",
                                      color: "black",
                                      height: "17px",
                                      background: "#f0a00d",
                                      borderRadius: "50%",
                                    }}
                                  ></span>
                                  Upgrade
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="calendar" className="tab-pane fade p-4">
                      <div
                        className="p-3"
                        style={{
                          borderRadius: "15px",
                          background: "#1a1a1a",
                        }}
                      >
                        <div
                          className="p-2"
                          style={{
                            background: "#fbfbfb",
                            borderRadius: "15px",
                          }}
                        >
                          <div
                            className="btn btn-success border-0 mb-4 mt-2"
                            data-target="#mymodal"
                            data-toggle="modal"
                            style={{
                              background: "#5082ff",
                              boxShadow:
                                "1px 1px 13px #e7e7e7, -1px -1px 13px #fff",
                            }}
                          >
                            Add Event
                          </div>

                          <div
                            className="modal fade"
                            id="mymodal"
                            style={{ top: "25%" }}
                          >
                            <div className="modal-dialog">
                              <div
                                className="modal-content"
                                style={{ background: "#1a1a1a" }}
                              >
                                <div className="px-4 py-3">
                                  <div className="d-flex pb-4">
                                    <div
                                      className=""
                                      style={{
                                        color: "#fbfbfb",
                                        fontWeight: "500",
                                        fontSize: "20px",
                                      }}
                                    >
                                      Create New Event
                                    </div>
                                    <div
                                      className="ml-auto"
                                      style={{
                                        fontSize: "40px",
                                        lineHeight: "0",
                                        marginTop: "11px",
                                        cursor: "pointer",
                                        color: "#fbfbfb",
                                      }}
                                      data-dismiss="modal"
                                    >
                                      &times;
                                    </div>
                                  </div>
                                  <div>
                                    <Box
                                      component="form"
                                      sx={{
                                        "& > :not(style)": { width: "100%" },
                                      }}
                                    >
                                      <div className="pb-4">
                                        <TextField
                                          type="text"
                                          label="Add Title"
                                          onChange={(e) =>
                                            setAddEvent({
                                              ...addEvent,
                                              title: e.target.value,
                                            })
                                          }
                                          value={addEvent.title}
                                          variant="filled"
                                          sx={{
                                            width: "100%",
                                            color: "white",
                                            input: { color: "white" },
                                          }}
                                          InputLabelProps={{
                                            style: {
                                              color: "#ffffff47",
                                              fontWeight: "400",
                                            },
                                          }}
                                          color="primary"
                                        />
                                      </div>
                                    </Box>
                                    <DatePicker
                                      className="w-100 mb-3 text-white datepicker"
                                      style={{ height: "45px" }}
                                      placeholderText="Start Date"
                                      selected={addEvent.start}
                                      onChange={(start) =>
                                        setAddEvent({ ...addEvent, start })
                                      }
                                    />
                                    <DatePicker
                                      className="w-100 mb-3 text-white datepicker"
                                      style={{ height: "45px" }}
                                      placeholderText="End Date"
                                      selected={addEvent.end}
                                      onChange={(end) =>
                                        setAddEvent({ ...addEvent, end })
                                      }
                                    />
                                    <div className="mt-3">
                                      <button
                                        className="btn btn-primary border-0"
                                        onClick={handleEvent}
                                        data-dismiss="modal"
                                        style={{
                                          background: "rgb(53 102 223)",
                                        }}
                                      >
                                        Add Event
                                      </button>
                                      <button
                                        className="btn btn-primary border-0 ml-3"
                                        data-dismiss="modal"
                                        style={{
                                          background: "rgb(53 102 223)",
                                        }}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Calendar
                            localizer={localizer}
                            events={allEvents}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: "80vh" }}
                          />
                        </div>
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
                                minHeight: "196px",
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
                              className="py-4 rounded border-0 text-white"
                              style={{
                                background: "#262626",
                                boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
                                minHeight: "196px",
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
                                minHeight: "196px",
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
                                height: "100%",
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
                                      <a
                                        className="nav-link text-white"
                                        href="#"
                                      >
                                        This Week
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link text-white"
                                        href="#"
                                      >
                                        Today
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </nav>
                              <div className="container">
                                <Line
                                  className="chart w-100"
                                  style={{ height: "100%" }}
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
                                        borderColor: [
                                          "rgba(194, 44, 44, 0.87)",
                                        ],
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
                            className="fa fa-user fa-3x d-flex align-items-center justify-content-center"
                            style={{
                              borderRadius: "50px",
                              width: "60px",
                              height: "60px",
                              background: "rgb(80, 130, 255)",
                            }}
                          ></div>
                          <div className="mx-3">
                            <div className="" style={{ fontWeight: "500" }}>
                              CUSTOMIZE YOUR HOME
                            </div>
                            <div>
                              With Hand Book you can add and remove widgets,
                              reorder and resize them, or change your
                              background.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <div className="d-flex align-items-center p-2 px-3">
                  {!isExpanded ? (
                    <div
                      className="fa fa-expand mr-3 fa-md"
                      style={{
                        background: "#737373",
                        padding: "5px",
                        color: "black",
                        cursor: "pointer",
                        borderRadius: "2px",
                      }}
                      onClick={resizeEditor}
                    ></div>
                  ) : (
                    <div
                      className="fa fa-compress mr-3 fa-md"
                      style={{
                        background: "#737373",
                        padding: "5px",
                        color: "black",
                        cursor: "pointer",
                        borderRadius: "2px",
                      }}
                      onClick={compressEditior}
                    ></div>
                  )}
                  <div style={{ color: "#737373" }}>|</div>
                  <div
                    className="btn btn-success border-0 px-4 ml-3"
                    onClick={closeEditor}
                  >
                    Exit
                  </div>
                  <div className="ml-auto d-flex align-items-center">
                    <div className="mr-4" style={{ color: "#737373" }}>
                      Only you
                    </div>
                    <div
                      id="save"
                      className="btn btn-primary border-0 px-4 mr-4"
                      style={{ background: "#5082ff", display: "none" }}
                      onClick={submit}
                    >
                      Save
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "45px",
                        // lineHeight: "0",
                        marginTop: "-30%",
                        color: "#737373",
                      }}
                    >
                      ...
                    </div>
                  </div>
                </div>
                <form onSubmit={submit}>
                  <div
                    className="editor position-relative"
                    style={{
                      background: "#262626",
                      // height: "100vh",
                      width: "100%",
                    }}
                  >
                    <Editor
                      id="editor"
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      editorState={description}
                      onEditorStateChange={onEditorStateChange}
                      placeholder="Start Writing..."
                      spellCheck={true}
                    />
                    <input
                      required
                      type="text"
                      name="title"
                      style={{ top: "60px", fontSize: "48px", outline: "none" }}
                      value={userInfo.title || ""}
                      onChange={onChangeValue}
                      className="position-absolute text-white bg-transparent titleInput shadow-none form-control border-0"
                      placeholder="Title"
                    />
                    <textarea
                      style={{ display: "none" }}
                      disabled
                      ref={(val) => (userInfo.description = val)}
                      value={draftToHtml(
                        convertToRaw(description.getCurrentContent())
                      )}
                    />
                  </div>
                  <div
                    className="p-4 w-100"
                    style={{
                      background: "rgb(38, 38, 38)",
                      bottom: "0",
                      position: "fixed",
                      boxShadow: "0px -1px 2px -1px #c0c0c099",
                    }}
                  ></div>
                </form>
              </div>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
//API= https://calendarific.com/account
