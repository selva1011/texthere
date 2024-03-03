import { useState } from "react";

const navBar = () => {
  const [sticky, setSticky] = useState(false);
  const [phone, setPhone] = useState(false);

  return (
    <header>
      <nav></nav>
    </header>
  );
};

export default navBar;
