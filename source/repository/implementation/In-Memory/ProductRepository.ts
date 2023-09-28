import { randomUUID } from "node:crypto";
import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../IProductRepository";
import { IteratorMapper } from "../../../types/Iterator";

export class ProductRepository implements IProductRepository{
    private products: Product[];
    private static instance: IProductRepository;

    private constructor(){
        this.products = [];
    }

    public static getInstance(){
        if(!this.instance){
            this.instance = new ProductRepository();
        }
        return this.instance;
    }

    async save(data: Product): Promise<Product> {        
        const newProduct = {
            id: randomUUID(),
            created_At: new Date(),
            ...data,
        }
        this.products.push(newProduct);
        return newProduct;
    }
    async findById(id: string): Promise<Product | undefined> {
        const result = this.products.find(product=>product.id===id);
        return result;
    }
    async findByName(name: string): Promise<Product | undefined> {
        const result = this.products.find(product=>product.name===name);
        return result;
    }
    async show(): Promise<Product[]> {
        return this.products;
    }
    async update(id: string, data: Product){
        const index = this.products.findIndex(item=>item.id===id);
        const product: IteratorMapper = this.products[index];
        
        for(let [key,value] of Object.entries(data)){
            if(value && key!='id') product[key] = value;
        }
        
        return this.products[index];
    };
    async delete(id: string): Promise<void> {
        this.products = this.products.filter(product=>product.id!==id);
    }
    
}