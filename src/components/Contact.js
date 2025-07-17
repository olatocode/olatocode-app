import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#facb33] px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-dark">
        <h2 className="text-4xl font-bold mb-5 border-b-4 w-[200px] mx-auto border-[#ab0020] pb-2">
          Contact Me
        </h2>
        <p className="text-lg mb-4">
          I am currently open for a <span className="text-[#ab0020] font-semibold">Full-time Backend Engineer</span> role. If you want to discuss opportunities, feel free to email or call me.
        </p>
        <p className="py-2 text-lg">
          <span className="font-bold text-[#ab0020]">Email:</span> <a href="mailto:awosolat@gmail.com" className="underline text-[#ab0020]">awosolat@gmail.com</a>
        </p>
        <p className="py-2 text-lg">
          <span className="font-bold text-[#ab0020]">Phone:</span> <a href="tel:+2348032289461" className="underline text-[#ab0020]">+234-8032289461</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
