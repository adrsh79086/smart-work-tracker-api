import { Body, Controller, Get, Param ,Post,Query} from "@nestjs/common";
import { productsService } from "./products.service";

@Controller("products")
export class productController{
    constructor(private readonly productService:productsService){}

// @Get()
// getProduct() {
//     return this.productService.getProduct();
// }

@Get()
getProduct(@Query('name') name?:string){
    return this.productService.getProduct(name);
}

@Get(":id")
getProductById(@Param('id') id:string){
    return this.productService.getProductById(Number(id));
}
@Post()
createProducts(@Body() body:any){
    return this.productService.createProducts(body);
}



}