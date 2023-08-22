import { Attributes } from "./attributes";

export class Product {

    id: string = '';
    category: string = '';
    title: string = '';
    description:string = '';
    price: number = 0;
    picUrl: string= '';
    contactPhoneNumber: string = '';
    additionalAttributesList : Attributes[] = [];

}
