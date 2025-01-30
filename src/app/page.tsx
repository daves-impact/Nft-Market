"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Latest from './components/latest'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Popular from './components/Popular'
import Stat from './components/Stat'
import Footer from './components/footer'
import Slider from './components/slider'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Latest />
      <Page2 />
      <Page3 />
      <Page4 />
      <Popular />
      <Stat />
      <Slider />
      <Footer />
    </>
  );
}
