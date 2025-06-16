import Layout from "@/components/layout/layout"
import Index7 from "@/components/sections/Fertilizer/Index7";
import Script from "next/script";

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