import { Product } from "./product";

export class Stock {
    private idStock:number;
    private qte:number;
    private qteMin:number;
    private libelleStock:String;
    private produits:Set<Product>;

}