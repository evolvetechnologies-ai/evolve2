import Layout from "@/components/layout/layout"
import Index7 from "@/components/sections/CoalRopeDetection/Index12";
import Script from "next/script";

export const metadata = {
  title: "Coal Rope Detection | Uneven Flow Monitoring with Microwave Sensors – Evolve Technologies",
  description: "Detect uneven coal flow or “roping” in real time with Evolve’s microwave-based sensors. Prevent combustion inefficiencies and blockages while maintaining smooth operations.",
alternates: {
    canonical: "https://www.evolvetechnologies.in/CoalRopeDetection",
  },
};

export default function CoalRopeDetection(){
    return(
        <>
       <Layout>
        <Index7/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}