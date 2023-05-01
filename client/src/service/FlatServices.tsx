import { Flat } from "../model/Flat";
import { RentFlat } from "../model/RentFlat";
import { SaleFlat } from "../model/SaleFlat";
import { request } from "./fetchRequests";

export class FlatServices {
    async getRentFlatsByManager(): Promise<RentFlat[]> {
        return await request.get("/rentFlat/getByManager").then((flats) => {
            const flatsModel: RentFlat[] = [];
            flats.map((flat: any) => {
                flatsModel.push(RentFlat.fromJson(flat));
            });

            return flatsModel;
        });
    }

    async getSaleFlatsByManager(): Promise<SaleFlat[]> {
        return await request.get("/saleFlat/getByManager").then((flats) => {
            const flatsModel: SaleFlat[] = [];
            flats.map((flat: any) => {
                flatsModel.push(SaleFlat.fromJson(flat));
            });

            return flatsModel;
        });
    }

    async getAllSaleFlats(): Promise<SaleFlat[]> {
        return await request.get("/saleFlat/getAll").then((flats) => {
            const flatsModel: SaleFlat[] = [];
            flats.map((flat: any) => {
                flatsModel.push(SaleFlat.fromJson(flat));
            });

            return flatsModel;
        });
    }

    async getAllRentFlats(): Promise<RentFlat[]> {
        return await request.get("/rentFlat/getAll").then((flats) => {
            const flatsModel: RentFlat[] = [];
            flats.map((flat: any) => {
                flatsModel.push(RentFlat.fromJson(flat));
            });

            return flatsModel;
        });
    }
}

export const flatService = new FlatServices();
