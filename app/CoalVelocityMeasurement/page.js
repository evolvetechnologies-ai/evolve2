import Layout from "@/components/layout/layout"
import Index6 from "@/components/sections/Putty/Index6";
import Script from "next/script";

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