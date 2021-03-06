import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="container-fluid">
      <section className="row wrapper homepage-hero">
        <section
          className="container col-md-10 col-sm-10 offset-1"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <h1 className="hero-heading">I write beautiful code.</h1>
          <Link to="/projects">
            <button type="button" className="btn btn-success btn-lg">
              View My Work
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Home;
