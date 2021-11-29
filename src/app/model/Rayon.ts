import { Product } from "./product";

export class Rayon {
    private idRayon:number;
    private code :String;
    private libelle :String;
    private produits:Set<Product>;
}