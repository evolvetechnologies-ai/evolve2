// Import necessary modules and components
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/layout";
import Section1 from "@/components/sections/home/Section1";
import Section2 from "@/components/sections/home/Section2";
import Section3 from "@/components/sections/home/Section3";
import Section4 from "@/components/sections/home/Section4";
import Section5 from "@/components/sections/home/Section5";
import Section6 from "@/components/sections/home/Section6";
import Section7 from "@/components/sections/home/Section7";
import Script from "next/script";

// Define the Home component
export default function Home() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Script src="/js/index.js" strategy="afterInteractive" />
    </Layout>
  );
}