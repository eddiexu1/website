import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="grid lg:grid-cols-6 gap-12">
      <div className="font-medium text-xl text-gray-700 lg:col-span-1 lg:pt-7">
        <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 lg:col-span-5 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover-text-pink-600 text-3xl">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-emerald-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
