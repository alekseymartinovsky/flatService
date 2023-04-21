import { FlatInfo } from "./FlatInfo";

export class Flat {
    private _id: number;
    private _flatInfo: FlatInfo;
    private _images: string[];

    constructor(id: number, flatInfo: FlatInfo, images: string[]) {
        this._id = id;
        this._flatInfo = flatInfo;
        this._images = images;
    }

    static fromJson(json: any): Flat {
        const images = json.images;

        return new Flat(json.id, FlatInfo.fromJson(json), images);
    }

    public toJson(): any {
        return {
            id: this._id,
            flatInfo: this._flatInfo.toJson(),
            images: this._images,
        };
    }

    getAddress() {
        return `${this._flatInfo.city}, ${this._flatInfo.street}, ${this._flatInfo.house}, ${this._flatInfo.flat}`;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get flatInfo() {
        return this._flatInfo;
    }

    set flatInfo(flatInfo: any) {
        this._flatInfo = flatInfo;
    }

    get images() {
        return this._images;
    }

    set images(images: string[]) {
        this._images = images;
    }
}
