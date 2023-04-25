export class FlatInfo {
    private _id: number;
    private _city: string;
    private _street: string;
    private _house: string;
    private _flat: string;
    private _price: number;
    private _square: number;
    private _balcony: number;
    private _repair: string;
    private _rooms: number;
    private _floor: number;
    private _description: string;

    constructor(
        id: number,
        city: string,
        street: string,
        house: string,
        flat: string,
        price: number,
        square: number,
        balcony: number,
        repair: string,
        rooms: number,
        floor: number,
        description: string
    ) {
        this._id = id;
        this._city = city;
        this._street = street;
        this._house = house;
        this._flat = flat;
        this._price = price;
        this._square = square;
        this._balcony = balcony;
        this._repair = repair;
        this._rooms = rooms;
        this._floor = floor;
        this._description = description;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get street(): string {
        return this._street;
    }

    set street(value: string) {
        this._street = value;
    }

    get house(): string {
        return this._house;
    }

    set house(value: string) {
        this._house = value;
    }

    get flat(): string {
        return this._flat;
    }

    set flat(value: string) {
        this._flat = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get square(): number {
        return this._square;
    }

    set square(value: number) {
        this._square = value;
    }

    get balcony(): number {
        return this._balcony;
    }

    set balcony(value: number) {
        this._balcony = value;
    }

    get repair(): string {
        return this._repair;
    }

    set repair(value: string) {
        this._repair = value;
    }

    get rooms(): number {
        return this._rooms;
    }

    set rooms(value: number) {
        this._rooms = value;
    }

    get floor(): number {
        return this._floor;
    }

    set floor(value: number) {
        this._floor = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    toJson() {
        return {
            id: this.id,
            city: this.city,
            street: this.street,
            house: this.house,
            flat: this.flat,
            price: this.price,
            square: this.square,
            balcony: this.balcony,
            repair: this.repair,
            rooms: this.rooms,
            floor: this.floor,
            description: this.description,
        };
    }

    static fromJson(obj: any): FlatInfo {
        return new FlatInfo(
            obj?.id,
            obj.city,
            obj.street,
            obj.house,
            obj.flat,
            obj.price,
            obj.square,
            obj.balcony,
            obj.repair,
            obj.rooms,
            obj.floor,
            obj.description
        );
    }

    static fromFormValues(formValues: any): FlatInfo {
        return FlatInfo.fromJson(formValues);
    }

    getAddress() {
        return this.city + ", " + this.street + ", " + this.house + ", " + this.flat;
    }
}
