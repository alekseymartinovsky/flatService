import { FlatInfo } from "./FlatInfo";

export class RentFlat {
    private _id: number;
    private _flatInfo: FlatInfo;
    private _images: string[];
    private _longTermRental: boolean;

    constructor(id: number, flatInfo: FlatInfo, images: string[], longTermRental: boolean) {
        this._id = id;
        this._flatInfo = flatInfo;
        this._images = images;
        this._longTermRental = longTermRental;
    }

    // Геттеры и сеттеры
    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get flatInfo(): FlatInfo {
        return this._flatInfo;
    }

    set flatInfo(flatInfo: FlatInfo) {
        this._flatInfo = flatInfo;
    }

    get images(): string[] {
        return this._images;
    }

    set images(images: string[]) {
        this._images = images;
    }

    get longTermRental(): boolean {
        return this._longTermRental;
    }

    set longTermRental(longTermRental: boolean) {
        this._longTermRental = longTermRental;
    }

    // Метод преобразования в JSON
    toJson() {
        return {
            id: this._id,
            flatInfo: this._flatInfo.toJson(),
            images: this._images,
            longTermRental: this._longTermRental,
        };
    }

    // Метод создания из JSON
    static fromJson(json: any): RentFlat {
        return new RentFlat(json.id, FlatInfo.fromJson(json.flatInfo), json.images, json.longTermRental);
    }
}
