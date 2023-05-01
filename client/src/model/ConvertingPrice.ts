export class ConvertingPrice {
    private _byn: number;
    private _eur: number;
    private _usd: number;

    constructor() {}

    static fromJson(obj: any): ConvertingPrice {
        const convertingPrice: ConvertingPrice = new ConvertingPrice();
        convertingPrice.byn = obj.byn;
        convertingPrice.eur = obj.eur;
        convertingPrice.usd = obj.usd;
        return convertingPrice;
    }

    public get byn(): number {
        return this._byn;
    }
    public set byn(value: number) {
        this._byn = value;
    }

    public get usd(): number {
        return this._usd;
    }
    public set usd(value: number) {
        this._usd = value;
    }

    public get eur(): number {
        return this._eur;
    }
    public set eur(value: number) {
        this._eur = value;
    }
}
