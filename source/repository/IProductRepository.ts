import { Product } from "../entities/Product";

export interface IProductRepository{
    save(data: Product): Promise<Product>;
    findById(id: string): Promise<Product|undefined>;
    findByName(name: string): Promise<Product|undefined>;
    show(): Promise<Product[]>; 
    update(id: string, data: Product): Promise<Product>;
    delete(id: string): Promise<void>
}