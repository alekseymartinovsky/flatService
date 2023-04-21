export class CreditParams {
    private _id: number;
    private _rate: number;
    private _updateDate: Date;
    private _maxMonths: number;

    constructor(id: number, rate: number, updateDate: Date, maxMonths: number) {
        this._id = id;
        this._rate = rate;
        this._updateDate = updateDate;
        this._maxMonths = maxMonths;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get rate(): number {
        return this._rate;
    }

    public set rate(value: number) {
        this._rate = value;
    }

    public get updateDate(): Date {
        return this._updateDate;
    }

    public set updateDate(value: Date) {
        this._updateDate = value;
    }

    public get maxMonths(): number {
        return this._maxMonths;
    }

    public set maxMonths(value: number) {
        this._maxMonths = value;
    }

    public static fromJson(json: any): CreditParams {
        const id: number = json.id;
        const rate: number = json.rate;
        const updateDate: Date = new Date(json.updateDate);
        const maxMonths: number = json.maxMonths;

        return new CreditParams(id, rate, updateDate, maxMonths);
    }
}
