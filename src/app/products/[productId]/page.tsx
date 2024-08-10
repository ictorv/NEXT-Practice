import {Metadata} from "next";


type Props={
    params:{
        productId:string;
    };
};

export const generateMetaDdata=async ({params}:Props):Promise<Metadata>=>{
    const title=await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iphone ${params.productId}`)
        },100)
    })
    return {
        title:`Product ${title}`,
    };
};


export default function ProductDetails({params}:Props){
    return <h1>Detail about Product {params.productId}</h1>;
}