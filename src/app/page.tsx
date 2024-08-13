"use client";
import Masthead from "./_components/Masthead";
import AboutUs from "./_components/Aboutus";
import Skills from "./_components/Skills";
import Works from "./_components/Works";
import TrustedBy from "./_components/TrustedBy";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";
import useSWR from "swr";

const fetcher = (input: any, init?: any) => {
  fetch(input, init).then((res) => res.json());
};

export default function Home() {
  const { data } = useSWR("/api/stats", fetcher);
  return (
    <div>
      <Masthead />
      <AboutUs />
      <Skills commits={data?.commits} downloads={data?.downloads}/>
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  );
}
