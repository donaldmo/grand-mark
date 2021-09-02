import React from 'react'
import Copyright from '../../components/Copyright'
import Footer from '../../components/Footer'
import BeModel from './BeModel'
import BlogSection from './BlogSection'
import ContactUsSection from './ContactUsSection'
import FeaturedModels from './FeaturedModels'
import IntroSection from './IntroSection'
import MapSection from './MapSection'
import PageMainSlider from './PageMainSlider'
import PageTestimonials from './PageTestimonials'
import PageModels from './page_models/PageModels'

export default function Home() {
  return (
    <div id="canvas">
      <div id="box_wrapper">
        <PageMainSlider />
        <PageTestimonials />
        <PageModels />
        <IntroSection />
        <BeModel />
        <FeaturedModels />
        <BlogSection />
        <MapSection />
        <ContactUsSection />
        <Footer />
        <Copyright />
      </div>
    </div>
  )
}
