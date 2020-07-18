import React from "react";
import "./App.css";
import Markdown from "react-markdown";
import { Col, Grid, Row } from "./styled-components";

let defaultText = `
# Markdown Guide

---

## Headings:

There are 6 types of headings supported in Markdown using #

# Heading 1 
## Heading 2 
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## Text Emphasis:

I know, just a bunch of headings won't satisfy your thirst for formatting. Here you go!

**Bold**

*Italic*

---

## Lists:
You know lists, right?

#### Unordered lists: 
- item 1 
- item 2 
  - sub item 1 
  - sub item 2 
    - sub sub item 1 
    - sub sub item 2 

#### Ordered lists: 
1. item 1 
1. item 2 
   1. sub item 1 
   1. sub item 2 

--- 

## Code: 

For those code-mongers out there, presenting **Code Blocks**:

\`\`\`
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

\`\`\`

**Inline Code** like \`let name="Yash"\`. 

---

## Links:

You can use links in Markdown. Use case?

Curious about who made this? [This dude!](https://iyashsoni.web.app/) He's awesome 😎

You can also put images, prefixing the same syntax as above with an '!' mark. 

![](https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif)

Wait, didn't I tell you this works with GIFs too? Oops! 

--- 

## Blockquotes:

Well, generally this is used to highlight something IMPORTANT. Like a quote or something... 

> But you can use it with anything, literally, no one cares. 🙂
> > # You can have nested blockquotes with other formatting. If it looks ugly, it's on you! 

---

## Tables:

I knew you were looking for this. Have it! 

| Name      | Age     |
| --------- | ------- |
| Yash Soni | 26      |
| John Doe  | 30      |

---

## Most important:

Found something that's not right? Raise an issue [here](https://github.com/iyashsoni/markdown-live/issues).

--- 

## Credits: 

This would not be possible without [react-markdown](https://www.npmjs.com/package/react-markdown). Thanks a ton!

---

Made with ❤️ in 🇮🇳
`;

const downloadFile = function () {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById("md-textarea").value], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  const fileName = document.getElementById("md-filename").value;
  element.download = `${fileName}.md`;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

function App() {
  const [content, setContent] = React.useState(defaultText);
  return (
    <React.Fragment>
      <AppHeader />
      <Grid fluid>
        <Row style={{ height: "100%" }}>
          <Col sm={12} md={6} style={{ borderRight: "1px solid" }}>
            <div id="md-source">
              <textarea
                id="md-textarea"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div id="md-preview">
              <div style={{ height: "85vh" }}>
                <Markdown source={content} />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
}

function AppHeader() {
  const [fileName, setFileName] = React.useState("README");

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        background: "#000",
        color: "white",
        boxShadow: "0px 3px 5px 0px #a0b0b0",
        top: "0",
        height: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "1rem",
        }}
      >
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          className="bi bi-lightning"
          fill="aqua"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
          />
        </svg>
        <h2 style={{ marginLeft: "1rem", cursor: "default" }}>Markdown Live</h2>
      </div>
      <div
        id="fileDownloadButton"
        style={{
          marginRight: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginRight: "0.5rem",
          }}
        >
          Filename:{" "}
        </p>
        <input
          id="md-filename"
          type="text"
          value={fileName}
          onChange={(event) => setFileName(event.target.value)}
        />
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          className="bi bi-file-arrow-down"
          fill="aqua"
          onClick={downloadFile}
          style={{
            cursor: "pointer",
            marginLeft: "1rem",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"
          />
          <path
            fillRule="evenodd"
            d="M4.646 8.146a.5.5 0 0 1 .708 0L8 10.793l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
          />
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6A.5.5 0 0 1 8 4z"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
