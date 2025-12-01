import Layout from "@/components/layout/layout"
import Index3 from "@/components/sections/About/Index3";
import Script from "next/script";

export const metadata = {
  title: "About Us | Evolve Technologies",
  alternates: {
    canonical: "https://www.evolvetechnologies.in/About",
  },
};

export default function AluminiaCeramic(){
    return(
        <>
      
       <Layout>
        <Index3/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}