import Layout from "@/components/layout/layout"
import Index30 from "@/components/sections/Blogs/Index30";
import Script from "next/script";

export default function neww(){
    return(
        <>
       <Layout>
        <Index30/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}