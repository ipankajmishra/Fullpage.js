import React, { Component } from "react";
import "./App.css";
import UncontrolledLottie from "./components/UncontrolledLottie";
import UncontrolledLottie2 from "./components/UncontrolledLottie copy";
import UncontrolledLottie3 from "./components/UncontrolledLottie copy 2";
import UncontrolledLottie4 from "./components/UncontrolledLottie copy 3";
import UncontrolledLottie5 from "./components/UncontrolledLottie copy 4";
import UncontrolledLottie6 from "./components/UncontrolledLottie copy 5";
import UncontrolledLottie7 from "./components/UncontrolledLottie copy 6";
import UncontrolledLottie8 from "./components/UncontrolledLottie copy 7";
import UncontrolledLottie9 from "./components/UncontrolledLottie copy 8";
import UncontrolledLottie10 from "./components/UncontrolledLottie copy 9";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import { annotate } from 'rough-notation';
// import $ from "jquery";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageCount,
} from "@ap.cx/react-fullpage";
class App extends Component {
  render() {
    return (
      <div className="app-div">
        {/* <UncontrolledLottie />
          <UncontrolledLottie2 />
          <UncontrolledLottie3 />
          <UncontrolledLottie4 />
          <UncontrolledLottie5 />
          <UncontrolledLottie6 />
          <UncontrolledLottie7 />
          <UncontrolledLottie8 />
          <UncontrolledLottie9 />
          <UncontrolledLottie10 /> */}
        <Fullpage>
          <FullPageSections>
            <FullpageSection
              style={{
                backgroundColor: "#FF5F45",
                // "background-color": "#DFDBE5",
                // "background-image": `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                padding: "1em",
              }}
            >
              <div style={{ float: "left" }}>
                <UncontrolledLottie />
              </div>
              <div style={{ marginTop: "170px" }}>
                <span className="label-sl-1-a">
                  Welcome To{" "}
                  <span className="label-sl-1-a-1">
                    <RoughNotation type="strike-through" color="white" strokeWidth={"7px"} show>
                      School
                      </RoughNotation>&nbsp;E-Learning
                  </span>
                </span>
                <br></br>
                <span className="label-sl-1-b">
                  This is the <span className="label-sl-1-b-1">normal</span>{" "}
                  "NEXT"
                </span>
              </div>
            </FullpageSection>
            <FullpageSection
              style={{
                backgroundColor: "#fffff", //#0798EC
                padding: "1em",
              }}
            >
              <div style={{ float: "right" }}>
                <UncontrolledLottie2 />
              </div>
            </FullpageSection>
            <FullpageSection
              style={{
                backgroundColor: "#FC6C7C",
                padding: "1em",
              }}
            >
              <div style={{ float: "left" }}>
                <UncontrolledLottie3 />
              </div>
            </FullpageSection>

            <FullpageSection
              style={{
                backgroundColor: "#FEC401",
                padding: "1em",
              }}
            >
              <div style={{ float: "right" }}>
                {" "}
                <UncontrolledLottie4 />
              </div>
            </FullpageSection>

            <FullpageSection
              style={{
                backgroundColor: "#FEC401",
                padding: "1em",
              }}
            >
              <div style={{ float: "left" }}>
                {" "}
                <UncontrolledLottie5 />
              </div>
            </FullpageSection>

            <FullpageSection
              style={{
                backgroundColor: "#FEC401",
                padding: "1em",
              }}
            >
              <div style={{ float: "right" }}>
                {" "}
                <UncontrolledLottie6 />
              </div>
            </FullpageSection>

            <FullpageSection
              style={{
                backgroundColor: "#FEC401",
                padding: "1em",
              }}
            >
              <div style={{ float: "left" }}>
                {" "}
                <UncontrolledLottie7 />
              </div>
            </FullpageSection>

            <FullpageSection
              style={{
                backgroundColor: "#FEC401",
                padding: "1em",
              }}
            >
              <div style={{ float: "right" }}>
                {" "}
                <UncontrolledLottie8 />
              </div>
            </FullpageSection>

            <FullpageSection
              style={{
                backgroundColor: "#FEC401",
                padding: "1em",
              }}
            >
              <div style={{ float: "left" }}>
                {" "}
                <UncontrolledLottie9 />
              </div>
            </FullpageSection>

            <FullpageSection
              style={{
                backgroundColor: "#FEC401",
                padding: "1em",
              }}
            >
              <div style={{ float: "right" }}>
                {" "}
                <UncontrolledLottie10 />
              </div>
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </div>
    );
  }
}

export default App;
