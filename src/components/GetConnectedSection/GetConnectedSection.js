import React from "react";
import "./GetConnectedSection.css";

export default function GetConnectedSection() {
  return (
    <div className="get-connected-section">
      <h2 className="heading">Get Connected.</h2>
      <form className="get-connected-form">
        <input type="text" placeholder="Wallet Address" />
        <input type="text" placeholder="Alias" />
        <input type="text" placeholder="Email Address (Optional)" />
      </form>
    </div>
  );
}
