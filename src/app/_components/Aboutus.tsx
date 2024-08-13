import React, { useRef, useContext, useCallback } from "react";
import Member from "./Member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-3xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong> Our team
          of expert engineers has created the best user experience in some of
          the most popular apps worldwide
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            name="sinta"
            id="sinta"
            socialId="@sintacantik"
            link="https://github.com/ChristianTertius"
          />
          <Member
            name="anton"
            id="anton"
            socialId="@antonpaling"
            link="https://github.com/ChristianTertius"
          />
          <Member
            name="wawan"
            id="wawan"
            socialId="@wawanganteng"
            link="https://github.com/ChristianTertius"
          />
          <Member
            name="kevin"
            id="kevin"
            socialId="@kevin"
            link="https://github.com/ChristianTertius"
          />
          <Member
            name="budi"
            id="budi"
            socialId="@budi"
            link="https://github.com/ChristianTertius"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
