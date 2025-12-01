import Layout from "@/components/layout/layout"
import Index5 from "@/components/sections/Chemically/Index5";
import Script from "next/script";
export const metadata = {
  title: "Particle Size Segregation | Granular Flow Control – Evolve Technologies",
  description: "Optimize granular flow with Evolve’s Particle Size Segregation solutions. Improve process efficiency, reduce blockages, and ensure consistent material quality.",
alternates: {
    canonical: "https://www.evolvetechnologies.in/ParticleSizeSegregation",
  },
};


export default function Chemically(){
    return(
        <>
       <Layout>
        <Index5/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}