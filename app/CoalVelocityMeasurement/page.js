import Layout from "@/components/layout/layout"
import Index6 from "@/components/sections/Putty/Index6";
import Script from "next/script";

export const metadata = {
  title: "Coal Velocity Measurement | Real-Time Electrostatic Sensor – Evolve Technologies",
  description: "Monitor coal particle velocity in real time with Evolve’s electrostatic sensors. Maintain combustion efficiency, flame stability, and reduce NOₓ emissions.",
};
export default function Putty(){
    return(
        <>
       <Layout>
        <Index6/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}