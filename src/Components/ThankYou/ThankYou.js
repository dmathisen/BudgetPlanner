import React from 'react';
import { useHistory } from "react-router-dom";

export function ThankYou() {
  let history = useHistory();

  const handleGoBackClick = e => {
    e.preventDefault();
    history.push("/");
  }

  return (
    <>
      <h2>Thank you</h2>
      <a href="/" onClick={handleGoBackClick}>Go back</a>
    </>
  )
}