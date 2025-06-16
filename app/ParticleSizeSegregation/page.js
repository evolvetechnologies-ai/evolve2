import Layout from "@/components/layout/layout"
import Index5 from "@/components/sections/Chemically/Index5";
import Script from "next/script";

export default function Chemically(){
    return(
        <>
       <Layout>
        <Index5/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}