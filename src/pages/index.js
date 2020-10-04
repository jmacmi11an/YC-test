import React from "react";
import Header from '../components/Header';
import Form from '../components/Form';

export default function Home() {
  return (
    <div>
      <Header />
      <div class="container" style={{color: 'pink', backgroundImage: 'url("../../../public/Background.jpg")'}}>
        <div>
          <h1>DOLOR SIT AMET</h1>
          <p>Vestibulum tempus eros nec dignissim convallis</p>
        </div>
        <Form />
      </div>
    </div>
);
}
