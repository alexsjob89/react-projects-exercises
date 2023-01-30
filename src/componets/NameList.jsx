import React from "react";

function NameList() {
  const names = ["bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    { id: 1, name: "Bruce", age: 30, skills: "react dev" },
    { id: 2, name: "Clark", age: 28, skills: "angular dev" },
    { id: 3, name: "Diane", age: 24, skills: "vue dev" },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div style={{ backgroundColor: "blue", color: "white", width: "30rem" }}>{nameList}</div>;
}

export default NameList;
