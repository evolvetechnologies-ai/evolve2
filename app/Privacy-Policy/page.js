import Layout from "@/components/layout/layout"
import Index1 from "@/components/sections/Privacy-Policy/Index66";
import Script from "next/script";

export const metadata = {
 alternates: {
    canonical: "https://www.evolvetechnologies.in/Privacy-Policy",
  },
};



export default function CastBasalt(){
    return(
        <>
       <Layout>
        <Index1/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}