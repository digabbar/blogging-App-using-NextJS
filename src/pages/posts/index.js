import AllPosts from "Components/posts/all-posts";
import { getAllPosts } from "lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";
const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.allBlog} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const data = getAllPosts();

  return {
    props: {
      allBlog: data,
    }, // will be passed to the page component as props
  };
}

export default AllPostsPage;
