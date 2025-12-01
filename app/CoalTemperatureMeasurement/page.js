import Layout from "@/components/layout/layout"
import Index7 from "@/components/sections/Fertilizer/Index7";
import Script from "next/script";

export const metadata = {
  title: "Coal Temperature Measurement | Real-Time Thermal Sensor – Evolve Technologies",
  description: "Measure coal temperature accurately in real time with Evolve’s thermal sensors. Ensure safety, optimize combustion, and protect equipment performance.",
alternates: {
    canonical: "https://www.evolvetechnologies.in/CoalTemperatureMeasurement",
  },
};

export default function Fertilizer(){
    return(
        <>
       <Layout>
        <Index7/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}