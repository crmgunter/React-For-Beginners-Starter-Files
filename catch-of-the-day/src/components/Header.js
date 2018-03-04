import React, { Component } from "react";

const Header = props => (
        <div>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">Of</span>
              <span className="the">The</span>
            </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>{props.tagline}</span>
          </h3>
        </header>
      </div>
    )



export default Header;
