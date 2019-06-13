const Pet = () => {
  return React.createElement("div", { id: "pet" }, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h1", {}, "Dog"),
    React.createElement("h1", {}, "Havanese")
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Havanese"
    }),
    React.createElement(Pet, { name: "Luna", animal: "Dog", bread: "Havanese" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
