export class Stock {
    constructor(public ticker: string, 
                public highestPrice: number, 
                public lowestPrice: number, 
                public totalChange: number) {}
}
