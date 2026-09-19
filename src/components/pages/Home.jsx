import React from 'react';
import Hero from '../hero/Hero';
import Slider from '../slider/Slider';
import Packages from '../pacakges/Pacages';
import Banner from '../hero-img/Banner';
import Book from '../book/Book';
import Rating from '../rating/Rating';
import Yard from '../yard/Yard';
import Plane from '../my plane/Plane';
import Country from '../counter/Country';
import LastBanner from '../last-hero-img/LastBanner';

export default function Home() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <Hero />
      <Slider />
      <Packages />
      <Banner />
      <Book />
      <Rating />
      <Yard />
      <Plane />
      <Country />
      <LastBanner />
    </div>
  );
}
