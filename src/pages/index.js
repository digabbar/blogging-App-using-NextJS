import React, { Fragment } from "react";
import Hero from "../../Components/home-page/Hero";
import FeaturedPosts from "../../Components/home-page/featured-posts";
import Head from "next/head";
import { getFeaturedPosts } from "../../lib/posts-util";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Soham's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredBlog} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const data = getFeaturedPosts();

  return {
    props: {
      featuredBlog: data,
    }, // will be passed to the page component as props
  };
}

export default HomePage;
