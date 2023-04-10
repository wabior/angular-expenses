export class ExpenseDto {
    public name: string = 'unnamed';
    public price: number = 0;
    public paid: boolean = false;

    constructor(data: any) {
        this.name = data.name;
        this.price = data.price;
        this.paid = data.paid;

        console.log('dto', data)
    }
}
