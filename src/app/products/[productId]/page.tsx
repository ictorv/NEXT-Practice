export default function ProductDetails({params}:{params:{productId:string}}){
    return <h1>Detail about Product {params.productId}</h1>;
}