import logo from "./logo.svg";
import "./App.css";
import TvData from "./components/tvData/TvData";
import Tvlive from "./components/tvlive/Tvlive";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { chnList } from "./footBallChan";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function App() {
  const [string, setString] = useState("");
  const play = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: string,
        type: "application/x-mpegURL",
      },
    ],
  };
  return (
    <div className="App">
      <div style={{ width: "300px", margin: "20px" }}>
        <Form.Select
          id="daySlct"
          aria-label="Default select example"
          onChange={(e) => setString(e.target.value)}
        >
          <option
            value=""
            selected
            disabled
            hidden
            thumbnail="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
          >
            Please Select Tv Channel
            <img
              height="30"
              width="30"
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              className="img-thumbnail"
              alt="..."
            />
          </option>

          {chnList &&
            chnList.length &&
            chnList.map((data) => {
              return (
                <>
                  <option
                    value={data.chLive}
                    style={{
                      backgroundImage:
                        'url("https://mdbootstrap.com/img/new/standard/city/041.webp")',
                    }}
                  >
                    <div>
                      <img
                        height="30"
                        width="30"
                        src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                        className="img-thumbnail"
                        alt="..."
                      />
                    </div>
                    {data.name}
                  </option>
                </>
              );
            })}
        </Form.Select>
      </div>

      <Tvlive play={play} string={string} />
    </div>
  );
}

export default App;
