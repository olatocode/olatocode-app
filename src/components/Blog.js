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
    <section className="bg-gradient-to-br from-[#facb33] via-[#f8d966] to-[#f5e699] text-dark px-5 py-24 md:py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-4 w-[100px] border-[#ab0020] pb-2">
            Blogs
          </h2>

          <p className="pb-5 text-lg text-gray-700">Some of my best blogs.</p>
        </div>
        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item, idx) => {
          return (
            <div key={idx} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col" style={{ minHeight: '400px' }}>
              <div className="w-full h-40 flex-shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="py-2 text-2xl text-[#ab0020] font-semibold mb-2">{item.title}</h3>
                <div className="mt-4">
                  <a
                    href={item.url}
                    className="btn bg-[#0F172A] border-2 border-[#0F172A] text-white px-6 py-3 rounded hover:bg-[#ab0020] hover:border-[#ab0020] hover:text-white transition cursor-pointer inline-block text-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
