import Layout from "@/components/layout/layout"
import Index8 from "@/components/sections/Contact/Index8";
import Script from "next/script";

export default function Contact(){
    return(
        <>
       <Layout>
        <Index8/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}