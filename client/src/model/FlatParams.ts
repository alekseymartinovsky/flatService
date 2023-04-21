export class FlatParams {
    private _address: string;
    private _undergraund: boolean;
    private _price: number;
    private _room: number;
    private _isWalkRoom: boolean;
    private _square: number;
    private _isBalcony: boolean;
    private _repair: string;
    private _yearOfBuild: string;

    /**
     * Getter address
     * @return {string}
     */
    public get address(): string {
        return this._address;
    }

    /**
     * Getter undergraund
     * @return {boolean}
     */
    public get undergraund(): boolean {
        return this._undergraund;
    }

    /**
     * Getter price
     * @return {number}
     */
    public get price(): number {
        return this._price;
    }

    /**
     * Getter room
     * @return {number}
     */
    public get room(): number {
        return this._room;
    }

    /**
     * Getter isWalkRoom
     * @return {boolean}
     */
    public get isWalkRoom(): boolean {
        return this._isWalkRoom;
    }

    /**
     * Getter square
     * @return {number}
     */
    public get square(): number {
        return this._square;
    }

    /**
     * Getter isBalcony
     * @return {boolean}
     */
    public get isBalcony(): boolean {
        return this._isBalcony;
    }

    /**
     * Getter repair
     * @return {string}
     */
    public get repair(): string {
        return this._repair;
    }

    /**
     * Getter yearOfBuild
     * @return {string}
     */
    public get yearOfBuild(): string {
        return this._yearOfBuild;
    }

    /**
     * Setter address
     * @param {string} value
     */
    public set address(value: string) {
        this._address = value;
    }

    /**
     * Setter undergraund
     * @param {boolean} value
     */
    public set undergraund(value: boolean) {
        this._undergraund = value;
    }

    /**
     * Setter price
     * @param {number} value
     */
    public set price(value: number) {
        this._price = value;
    }

    /**
     * Setter room
     * @param {number} value
     */
    public set room(value: number) {
        this._room = value;
    }

    /**
     * Setter isWalkRoom
     * @param {boolean} value
     */
    public set isWalkRoom(value: boolean) {
        this._isWalkRoom = value;
    }

    /**
     * Setter square
     * @param {number} value
     */
    public set square(value: number) {
        this._square = value;
    }

    /**
     * Setter isBalcony
     * @param {boolean} value
     */
    public set isBalcony(value: boolean) {
        this._isBalcony = value;
    }

    /**
     * Setter repair
     * @param {string} value
     */
    public set repair(value: string) {
        this._repair = value;
    }

    /**
     * Setter yearOfBuild
     * @param {string} value
     */
    public set yearOfBuild(value: string) {
        this._yearOfBuild = value;
    }

    public toJson() {
        return {
            address: this._address,
            undergraund: this._undergraund,
            price: this._price,
            room: this._room,
            isWalkRoom: this._isWalkRoom,
            square: this._square,
            isBalcony: this._isBalcony,
            repair: this._repair,
            yearOfBuild: this._yearOfBuild,
        };
    }

    static deserialize(data: any) {
        return new FlatParams(
            data?.address ?? null,
            data?.undergraund ?? null,
            data?.price ?? null,
            data?.room ?? null,
            data?.isWalkRoom ?? null,
            data?.square ?? null,
            data?.isBalcony ?? null,
            data?.repair ?? null,
            data?.yearOfBuild ?? null
        );
    }

    constructor(
        address: string,
        undergraund: boolean,
        price: number,
        room: number,
        isWalkRoom: boolean,
        square: number,
        isBalcony: boolean,
        repair: string,
        yearOfBuild: string
    ) {
        this._address = address;
        this._undergraund = undergraund;
        this._price = price;
        this._room = room;
        this._isWalkRoom = isWalkRoom;
        this._square = square;
        this._isBalcony = isBalcony;
        this._repair = repair;
        this._yearOfBuild = yearOfBuild;
    }
}
