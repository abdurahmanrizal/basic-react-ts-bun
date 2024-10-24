import React, { useState } from "react";
import { MOCK_PROJECTS } from "./projects/MockProjects";
import ProjectPage from "./projects/ProjectPage";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Hello: React.FC<Props> = ({ name, enthusiasmLevel = 1 }) => {
  const [currentEnthusiasm, setCurrentEnthusiasm] = useState(enthusiasmLevel);

  const onIncrement = () => {
    updateEnthusiasm(1);
  };

  const onDecrement = () => {
    updateEnthusiasm(-1);
  };

  const updateEnthusiasm = (change: number) => {
    setCurrentEnthusiasm((currentEnthusiasm) => {
      const newEnthusiasm = currentEnthusiasm + change;
      if (newEnthusiasm <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
      }
      return newEnthusiasm;
    });
  };

  return (
    <div className="container">
      <div className="flex flex-row w-full justify-center text-red-500 mt-2 font-bold">
        Hello {name + getExclamationMarks(currentEnthusiasm)}
      </div>
      <div className="flex flex-row gap-4 justify-center mt-2">
        <button className="bg-red-400 p-2 rounded-md shadow-sm text-white w-10" onClick={onDecrement}>-</button>
        <button className="bg-green-400 p-2 rounded-md shadow-sm text-white w-10" onClick={onIncrement}>+</button>
      </div>
      <ProjectPage />
    </div>
  );
};

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
