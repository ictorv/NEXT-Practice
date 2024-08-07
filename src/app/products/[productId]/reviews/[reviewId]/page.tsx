import {notFound} from "next/navigation"

export default function ReveiwDetails({params}:{params:{productId:string;reviewId:string;};}){
    if(parseInt(params.reviewId)>1000){
        notFound();
    }
    return (<h1>Review {params.reviewId} with ProductId {params.productId}</h1>);
}