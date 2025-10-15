import Layout from "@/components/layout/layout"
import Index1 from "@/components/sections/CaseStudies/Index1";
import Script from "next/script";

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