import React from 'react';

const About = React.lazy(() => import('./about/about'));
const Footer = React.lazy(() => import('./footer/footer'));
const Slider = React.lazy(() => import('./slider/slider'));

export {
  Footer,
  About,
  Slider
}