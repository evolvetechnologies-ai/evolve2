import Layout from "@/components/layout/layout"
import Index4 from "@/components/sections/Development/Index4";
import Script from "next/script";

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