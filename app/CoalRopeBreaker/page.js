import Layout from "@/components/layout/layout"
import Index7 from "@/components/sections/CoalRopeBreaker/Index11";
import Script from "next/script";

export const metadata = {
  title: "Coal Rope Breaker | Safety Device for Coal Flow – Evolve Technologies",
  description: "Protect your operations with Evolve’s Coal Rope Breaker—built for rapid mechanical response to rope failure. Enhance safety, avoid downtime, and safeguard equipment.",
};

export default function CoalRopeBreaker(){
    return(
        <>
       <Layout>
        <Index7/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}