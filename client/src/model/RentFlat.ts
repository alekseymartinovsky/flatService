import { AmenitiesFlat } from "./Amentities";
import { FlatInfo } from "./FlatInfo";

export class RentFlat {
    private _id: number;
    private _flatInfo: FlatInfo;
    private _images: string[];
    private _amenities: AmenitiesFlat;

    constructor(id: number, flatInfo: FlatInfo, images: string[], amentities: AmenitiesFlat) {
        this._id = id;
        this._flatInfo = flatInfo;
        this._images = images;
        this._amenities = amentities;
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

    public get amenities(): AmenitiesFlat {
        return this._amenities;
    }
    public set amenities(value: AmenitiesFlat) {
        this._amenities = value;
    }

    // Метод преобразования в JSON
    toJson() {
        return {
            id: this._id,
            flatInfo: this._flatInfo.toJson(),
            images: this._images,
            amenities: this._amenities.toJson(),
        };
    }

    // Метод создания из JSON
    static fromJson(json: any): RentFlat {
        return new RentFlat(
            json?.id,
            FlatInfo.fromJson(json?.flatInfo),
            json.images,
            AmenitiesFlat.fromJson(json?.amenities)
        );
    }

    static fromValues(values: any): RentFlat {
        return new RentFlat(0, FlatInfo.fromFormValues(values), [], AmenitiesFlat.fromJson(values));
    }
}
