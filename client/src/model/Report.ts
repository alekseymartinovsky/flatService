import { AccuracyType } from "./Accuracy";
import { FlatParams } from "./FlatParams";

export class Report {
    private _flatParams: FlatParams;

    private _price: number;
    private _numberOfApartmentsToAnalize: number;
    private _accuracy: string;

    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    static deserialize(data: any) {
        return new Report(
            FlatParams.deserialize(data.flatParams),
            data?.price ?? null,
            data?.numberOfApartmentsAnalize ?? null,
            AccuracyType[data.accuracy],
            data.id ?? null
        );
    }

    constructor(
        flatParams: FlatParams,
        price: number,
        numberOfApartmentsToAnalize: number,
        accyracy: string,
        id: number
    ) {
        this._flatParams = flatParams;
        this._price = price;
        this._numberOfApartmentsToAnalize = numberOfApartmentsToAnalize;
        this._accuracy = accyracy;
        this._id = id;
    }

    public get flatParams(): FlatParams {
        return this._flatParams;
    }

    public set flatParams(value: FlatParams) {
        this._flatParams = value;
    }

    /**
     * Getter price
     * @return {number}
     */
    public get price(): number {
        return this._price;
    }

    /**
     * Getter numberOfApartmentsToAnalize
     * @return {number}
     */
    public get numberOfApartmentsToAnalize(): number {
        return this._numberOfApartmentsToAnalize;
    }

    /**
     * Getter accuracy
     * @return {string}
     */
    public get accuracy(): string {
        return this._accuracy;
    }

    /**
     * Setter price
     * @param {number} value
     */
    public set price(value: number) {
        this._price = value;
    }

    /**
     * Setter numberOfApartmentsToAnalize
     * @param {number} value
     */
    public set numberOfApartmentsToAnalize(value: number) {
        this._numberOfApartmentsToAnalize = value;
    }

    /**
     * Setter accuracy
     * @param {string} value
     */
    public set accuracy(value: string) {
        this._accuracy = value;
    }
}
