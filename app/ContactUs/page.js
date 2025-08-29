import Layout from "@/components/layout/layout";
import Index8 from "@/components/sections/Contact/Index8";
import Script from "next/script";


export const metadata = {
  title: "Contact Us | Evolve Technologies - Innovating Industrial Solutions",
  description: "Get in touch with Evolve Technologies for support, inquiries, and collaborations.",
};


export default function Contact() {
  return (
    <>
     
    
      <Layout>
        <Index8 />
        <Script src="/js/index.js" strategy="afterInteractive" />
      </Layout>
    </>
  );
}