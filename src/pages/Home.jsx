import React from 'react'
import Header from '../components/Header'
import BlogList from '../components/blogList'
import BlogCard from '../components/BlogCard'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Header/>
    <BlogList/>
    <BlogCard/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Home
