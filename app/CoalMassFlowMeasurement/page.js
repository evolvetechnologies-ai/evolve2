import Layout from "@/components/layout/layout"
import Index4 from "@/components/sections/Development/Index4";
import Script from "next/script";

export const metadata = {
  title: "Coal Mass Flow Measurement | Real-Time Microwave Sensors – Evolve Technologies",
  description: "Monitor coal mass flow in real time with Evolve’s microwave sensors. ±5% accuracy ensures balanced distribution, better combustion efficiency, and lower emissions.",
};

export default function Development(){
    return(
        <>
       <Layout>
        <Index4/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}