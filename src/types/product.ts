import { Color } from "./color";

export interface Product {
  id: number;
  name: string;
  price: number;
  colors: Color[];
}