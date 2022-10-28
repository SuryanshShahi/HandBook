import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Home() {
  const [show, setShow] = useState(true);

  const changeBg = () => {
    if (window.innerWidth <= 990) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  window.addEventListener("resize", changeBg);

  return (
    <div>
      <Offcanvas
        show={show}
        className="text-white"
        style={{
          width: "18%",
          background: "black",
          borderRight: "1px solid #80808061",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title><div className="fa fa-user-circle-o fa-lg align-items-center d-flex"><span className="" style={{fontSize:"20px"}}>&nbsp;&nbsp;xyz</span></div></Offcanvas.Title>
          <div
            onClick={() => setShow(false)}
            style={{ fontSize: "33px", lineHeight: "0" }}
          >
            &times;
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="position-relative align-items-center d-flex">
        <div className="fa fa-search position-absolute" style={{paddingInline:"12px"}}></div>
        <input type="search" className="bg-dark border-0" placeholder="Search" style={{height:"42px",outline:"none", borderRadius:"50px", paddingLeft:"34px"}}/>
        </div>
        <div className="position-relative align-items-center d-flex">
        <div className="fa fa-plus position-absolute" style={{paddingInline:"12px"}}></div>
        <input type="search" className="border-0" placeholder="New" style={{height:"42px",outline:"none", borderRadius:"50px", paddingLeft:"34px",background:"#00a82d"}}/>
        </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="dashboard">
        <div className="contentBg" style={{ height: "70vh" }}>
          <div
            className="btn btn-primary d-lg-none"
            onClick={() => setShow(true)}
          >
            Launch
          </div>

          <div className="content position-relative" style={{ top: "70%" }}>
            <div className="row mx-3">
              <div className="col-lg-8 col-md-8 col-sm-8 col-12 mr-2">
                <div
                  className="bg-dark"
                  style={{ height: "40vh", borderRadius: "15px" }}
                ></div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12 ml-2">
                <div
                  className="bg-dark"
                  style={{ height: "40vh", borderRadius: "15px" }}
                ></div>
              </div>
              <div className="col-12 mt-4 ml-2">
                <div
                  className="bg-dark"
                  style={{ height: "40vh", borderRadius: "15px" }}
                ></div>
              </div>
            </div>
            <div className="mt-4" style={{ borderTop: "1px solid #80808061" }}>
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
    </div>
  );
}

export default Home;
