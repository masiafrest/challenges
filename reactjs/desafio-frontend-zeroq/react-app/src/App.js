import { useState } from "react";
import CardContainer from "./components/CardContainer";
import { Header } from "./components/Header";
import InputBar from "./components/InputBar";
import companyLogo from "./logo.png";

function App() {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  return (
    <div>
      <Header>
        <img src={companyLogo} alt="centro de mando logo" />
      </Header>
      <InputBar value={value} onChange={onChange} />
      <CardContainer searchValue={value} />
    </div>
  );
}

export default App;
