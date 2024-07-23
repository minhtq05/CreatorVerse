import React from "react";
import { Outlet } from "react-router-dom";
import { useHandleRoot } from "./hooks/useHandleRoot";
import Draggable from "react-draggable";
import "./styles.css";

export const Root = () => {
  const { location, navigate, quote } = useHandleRoot();

  return (
    <>
      <main className="root">
        {location.pathname !== "/" && (
          <div className="back-home" onClick={() => navigate("/")}>
            <img src="/back-home.svg" alt="" />
            <p>Home</p>
          </div>
        )}
        <div className="container">
          <div className="graphic">
            <Draggable axis="both" handle=".crown">
              <img
                src="/crown.svg"
                alt=""
                className="crown"
                draggable="false"
              />
            </Draggable>
            <Draggable axis="both" handle=".wow">
              <img src="/wow.svg" alt="" className="wow" draggable="false" />
            </Draggable>
            <Draggable axis="both" handle=".smile">
              <img
                src="/smile.svg"
                alt=""
                className="smile"
                draggable="false"
              />
            </Draggable>
            <Draggable axis="both" handle=".stars">
              <img
                src="/stars.svg"
                alt=""
                className="stars"
                draggable="false"
              />
            </Draggable>
            <Draggable axis="both" handle=".happy">
              <img
                src="/happy.svg"
                alt=""
                className="happy"
                draggable="false"
              />
            </Draggable>
            <Draggable axis="both" handle=".pencil">
              <img
                src="/pencil.svg"
                alt=""
                className="pencil"
                draggable="false"
              />
            </Draggable>
          </div>
          <div className="bg" />
          <Draggable axis="both" handle=".text-overlay">
            <div className="text-overlay">
              <h1>CREATORVERSE</h1>
            </div>
          </Draggable>
          <Draggable axis="both" handle=".quote">
            <p className="quote">{quote}</p>
          </Draggable>
          <Outlet />
        </div>
      </main>
      <footer>
        <p>CreatorVerse</p>
        <p>"Where Creativity Thrives"</p>
        <p>© 2024 CreatorVerse. All rights reserved.</p>
      </footer>
    </>
  );
};
