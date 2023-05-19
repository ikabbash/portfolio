import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput, TerminalInput } from "react-terminal-ui";
import { logo } from "./Text";

function TerminalController() {
  const [lineData, setLineData] = useState([
    <TerminalOutput>
      Secret terminal
    </TerminalOutput>,
  ]);

  // https://github.com/jonmbake/react-terminal-ui/blob/master/demo/index.tsx
  function TInput (input) {
    let ld = [...lineData];
    ld.push(<TerminalInput>{input}</TerminalInput>);
  if (input.toLocaleLowerCase() === 'valdus') {
    ld.push(<TerminalOutput>Where answers might be stored</TerminalOutput>);
  } else if (input) {
    ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>);
  }
  setLineData(ld);
}

  console.log(logo);

  return (
    <>
      <div className="md:w-1/2 w-max container mx-auto md:p-20">
      <div className="text-center text-text1 mb-10 text-lg">Are you supposed to be here?</div>
        <Terminal
          colorMode={ColorMode.Dark}
          onInput={TInput}
        >
          {lineData}
        </Terminal>
      </div>
    </>
  );
}

export default TerminalController;
