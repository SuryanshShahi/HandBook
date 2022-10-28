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
import { Line, Doughnut } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const drawerWidth = 266;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <div></div>
      <Divider />
      <div className="position-relative justify-content-center align-items-center d-flex p-2">
        <div>
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
        <div className="w-100 px-1">
          <div
            className="fa fa-plus text-white position-absolute"
            style={{ paddingInline: "12px", paddingTop: "13px" }}
          ></div>
          <div
            className="fa fa-angle-down text-white position-absolute"
            style={{ paddingInline: "12px", paddingTop: "13px", left: "80%" }}
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
      <div className="">
        <IconButton
          className="position-absolute"
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" }, color: "white" }}
        >
          <MenuIcon />
        </IconButton>
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
            <div className="content position-relative" style={{ top: "70%" }}>
              <div className="tab-content">
                <div
                  id="home"
                  className="active tab-pane content position-relative"
                >
                  <div className="row mx-3">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-12 mr-2">
                      <div
                        className="p-3"
                        style={{
                          height: "50vh",
                          borderRadius: "15px",
                          background: "#1a1a1a",
                        }}
                      >
                        <div className="text-white">
                          NOTES <span className="fa fa-angle-right"></span>
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
                                className="col-3 text-white px-3 py-2 m-3"
                                style={{
                                  height: "290px",
                                  background: "#262626",
                                  borderRadius: "15px",
                                }}
                              >
                                Untitled
                              </div>
                              <div
                                className="col-3 text-white px-3 py-2 m-3"
                                style={{
                                  height: "290px",
                                  background: "#262626",
                                  borderRadius: "15px",
                                }}
                              >
                                Untitled
                              </div>
                              <div
                                className="col-3 text-white px-3 py-2 m-3"
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
                          <div id="suggested" className="tab-pane">
                            hellp
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 ml-2 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                      <div
                        className="p-3"
                        style={{
                          height: "50vh",
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
                            className="border-0 bg-transparent mt-2"
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
                  </div>
                </div>

                <div id="inbox" className="tab-pane fade p-4"></div>

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
                      height: "90vh",
                      borderRadius: "15px",
                      background: "#1a1a1a",
                    }}
                  >
                    <div className="row">
                      <div className="col-4">
                        <div className="py-4 rounded border-0 text-white" style={{background:"#262626", boxShadow:"0 1px 6px rgba(0,0,0,0.2)"}}>
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
                      <div className="col-4">
                        <div className="py-4 rounded  border-0 text-white"  style={{background:"#262626", boxShadow:"0 1px 6px rgba(0,0,0,0.2)"}}>
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
                      <div className="col-4">
                        <div className="py-4 rounded border-0 text-white"  style={{background:"#262626", boxShadow:"0 1px 6px rgba(0,0,0,0.2)"}}>
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

                      <div className="col-4">
                      <div className="card justify-content-center d-flex align-items-center  border-0 text-white B py-4 lower1">
                        <h5 className="mx-4 mt-5 position-absolute">
                          Open Positions
                        </h5>
                        <div className="container">
                          <h5 className="font-weight-bold">
                            Open Positions By Department
                          </h5>
                          <Doughnut
                            className="doughnut justify-content-center d-flex pb-2 gx-0 my-auto"
                            data={{
                              datasets: [
                                {
                                  label: "My First Dataset",
                                  data: [45, 30, 25],

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
                          With Evernote Personal you can add and remove widgets,
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
