import React from 'react';
import Receipe from './Receipe'
import "../styles/index.scss";
export const App = () => {
  return (
    <>
    <section className="hero"></section>
      <main className="main">
        <section>
        <h1>
          Hi! I am react.
        </h1>
        </section>
        <Receipe />
      </main>
    </>
  )
}