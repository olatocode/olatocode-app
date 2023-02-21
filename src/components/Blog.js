/** @format */

import React from 'react';

const Blog = () => {
  const post = [
    {
      img: 'https://miro.medium.com/v2/resize:fit:420/format:webp/1*z1bigZKxjx7prQEigNVTaA.jpeg',
      title: 'How to Get into Tech in Nigeria in 6 Steps',
      url: 'https://medium.com/@awosolat/how-to-get-into-tech-in-nigeria-in-6-steps-6fc9b68651ff',
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*hone1GSPoqICH-p8wc6sSQ.png',
      title: '7 Ways to Become a Successful Software Engineer in Nigeria',
      url: 'https://medium.com/@awosolat/7-ways-to-become-a-successful-software-engineer-in-nigeria-2672ad776385',
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
