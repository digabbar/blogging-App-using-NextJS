import PostContent from "Components/posts/post-detail/post-content";
import React, { Fragment } from "react";
import Head from "next/head";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";
const PostDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.blogDetails.title}</title>
        <meta name="description" content={props.blogDetails.excerpt} />
      </Head>
      <PostContent post={props.blogDetails} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const data = getPostData(slug);
  return {
    props: {
      blogDetails: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getPostsFiles();
  const updatedPath = paths.map((path) => {
    return { params: { slug: path.replace(/\.md$/, "") } };
  });

  return {
    paths: updatedPath,
    fallback: false, // can also be true or 'blocking'
  };
}

export default PostDetails;
