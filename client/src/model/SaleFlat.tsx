import { FlatInfo } from "./FlatInfo";

export class SaleFlat {
    private _id: number;
    private _flatInfo: FlatInfo;
    private _images: string[];

    constructor(id: number, flatInfo: FlatInfo, images: string[]) {
        this._id = id;
        this._flatInfo = flatInfo;
        this._images = images;
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

    // Метод преобразования в JSON
    toJson() {
        return {
            id: this._id,
            flatInfo: this._flatInfo.toJson(),
            images: this._images,
        };
    }

    // Метод создания из JSON
    static fromJson(json: any): SaleFlat {
        return new SaleFlat(json.id, FlatInfo.fromJson(json.flatInfo), json.images);
    }

    static fromValues(obj: any): SaleFlat {
        return new SaleFlat(0, FlatInfo.fromFormValues(obj), []);
    }
}
