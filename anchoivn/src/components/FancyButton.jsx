import React from "react";
import { styled } from "@mui/system";
import { Link } from "@mui/material";

function FancyButton({ content, padding, keyColor, size }) {
  const FancyLink = styled(Link)`
    background-color: transparent;
    border: 3px solid #febf62;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    float: right;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: ${padding}em 1.5em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: ${size}px;

    &:hover {
      color: white;
      background: #febf62;

      .text {
        color: white;
      }

      .top-key {
        left: -2px;
        width: 0;
      }

      .bottom-key {
        right: 0;
        width: 0;
      }
    }

    .text {
      font-size: 1.125em;
      line-height: 1.33333em;
      display: block;
      font-family: var(--font-raleway);
      text-align: left;
      transition: all 0.3s ease-in-out;
      text-transform: uppercase;
      text-decoration: none;
      color: #febf62;
    }

    .top-key {
      height: 3px;
      width: 1.5rem;
      top: -3px;
      left: 1rem;
      position: absolute;
      background: ${keyColor};
      transition: width 0.5s ease-out, left 0.3s ease-out;
    }

    .bottom-key {
      height: 3px;
      width: 1.5rem;
      right: 1rem;
      bottom: -3px;
      position: absolute;
      background: ${keyColor};
      transition: width 0.5s ease-out, right 0.3s ease-out;
    }
  `;
  return (
    <FancyLink href="#">
      <span className="top-key"></span>
      <span className="text">{content}</span>
      <span className="bottom-key"></span>
    </FancyLink>
  );
}

export default FancyButton;
