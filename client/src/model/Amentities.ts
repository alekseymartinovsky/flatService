export class AmenitiesFlat {
    private _id: number;
    private _hotWater: boolean;
    private _essentials: boolean;
    private _bedLinen: boolean;
    private _mosquitoNet: boolean;
    private _crib: boolean;
    private _heating: boolean;
    private _wifi: boolean;
    private _refrigerator: boolean;
    private _electricKettle: boolean;
    private _tv: boolean;
    private _cooking: boolean;
    private _coffeeMaker: boolean;
    private _parking: boolean;
    private _washingMachine: boolean;
    private _airConditioning: boolean;
    private _fireSafety: boolean;

    constructor(
        id: number,
        hotWater: boolean,
        essentials: boolean,
        bedLinen: boolean,
        mosquitoNet: boolean,
        crib: boolean,
        heating: boolean,
        wifi: boolean,
        refrigerator: boolean,
        electricKettle: boolean,
        tv: boolean,
        cooking: boolean,
        coffeeMaker: boolean,
        parking: boolean,
        washingMachine: boolean,
        airConditioning: boolean,
        fireSafety: boolean
    ) {
        this._id = id;
        this._hotWater = hotWater;
        this._essentials = essentials;
        this._bedLinen = bedLinen;
        this._mosquitoNet = mosquitoNet;
        this._crib = crib;
        this._heating = heating;
        this._wifi = wifi;
        this._refrigerator = refrigerator;
        this._electricKettle = electricKettle;
        this._tv = tv;
        this._cooking = cooking;
        this._coffeeMaker = coffeeMaker;
        this._parking = parking;
        this._washingMachine = washingMachine;
        this._airConditioning = airConditioning;
        this._fireSafety = fireSafety;
    }

    static fromJson(json: any): AmenitiesFlat {
        return new AmenitiesFlat(
            json.id,
            json.hotWater ?? false,
            json.essentials ?? false,
            json.bedLinen ?? false,
            json.mosquitoNet ?? false,
            json.crib ?? false,
            json.heating ?? false,
            json.wifi ?? false,
            json.refrigerator ?? false,
            json.electricKettle ?? false,
            json.tv ?? false,
            json.cooking ?? false,
            json.coffeeMaker ?? false,
            json.parking ?? false,
            json.washingMachine ?? false,
            json.airConditioning ?? false,
            json.fireSafety ?? false
        );
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get hotWater(): boolean {
        return this._hotWater;
    }

    set hotWater(hotWater: boolean) {
        this._hotWater = hotWater;
    }

    get essentials(): boolean {
        return this._essentials;
    }

    set essentials(essentials: boolean) {
        this._essentials = essentials;
    }

    get bedLinen(): boolean {
        return this._bedLinen;
    }

    set bedLinen(bedLinen: boolean) {
        this._bedLinen = bedLinen;
    }

    get mosquitoNet(): boolean {
        return this._mosquitoNet;
    }

    set mosquitoNet(mosquitoNet: boolean) {
        this._mosquitoNet = mosquitoNet;
    }

    get crib(): boolean {
        return this._crib;
    }

    set crib(crib: boolean) {
        this._crib = crib;
    }

    get heating(): boolean {
        return this._heating;
    }

    set heating(heating: boolean) {
        this._heating = heating;
    }

    get wifi(): boolean {
        return this._wifi;
    }

    set wifi(wifi: boolean) {
        this._wifi = wifi;
    }

    get refrigerator(): boolean {
        return this._refrigerator;
    }

    set refrigerator(refrigerator: boolean) {
        this._refrigerator = refrigerator;
    }

    get electricKettle(): boolean {
        return this._electricKettle;
    }

    set electricKettle(electricKettle: boolean) {
        this._electricKettle = electricKettle;
    }

    get tv(): boolean {
        return this._tv;
    }

    set tv(tv: boolean) {
        this._tv = tv;
    }

    get cooking(): boolean {
        return this._cooking;
    }

    set cooking(cooking: boolean) {
        this._cooking = cooking;
    }

    get coffeeMaker(): boolean {
        return this._coffeeMaker;
    }

    set coffeeMaker(coffeeMaker: boolean) {
        this._coffeeMaker = coffeeMaker;
    }

    get parking(): boolean {
        return this._parking;
    }

    set parking(parking: boolean) {
        this._parking = parking;
    }

    get washingMachine(): boolean {
        return this._washingMachine;
    }

    set washingMachine(washingMachine: boolean) {
        this._washingMachine = washingMachine;
    }

    get airConditioning(): boolean {
        return this._airConditioning;
    }

    set airConditioning(airConditioning: boolean) {
        this._airConditioning = airConditioning;
    }

    get fireSafety(): boolean {
        return this._fireSafety;
    }

    set fireSafety(fireSafety: boolean) {
        this._fireSafety = fireSafety;
    }

    toJson(): any {
        return {
            id: this._id,
            hotWater: this._hotWater,
            essentials: this._essentials,
            bedLinen: this._bedLinen,
            mosquitoNet: this._mosquitoNet,
            crib: this._crib,
            heating: this._heating,
            wifi: this._wifi,
            refrigerator: this._refrigerator,
            electricKettle: this._electricKettle,
            tv: this._tv,
            cooking: this._cooking,
            coffeeMaker: this._coffeeMaker,
            parking: this._parking,
            washingMachine: this._washingMachine,
            airConditioning: this._airConditioning,
            fireSafety: this._fireSafety,
        };
    }
}
