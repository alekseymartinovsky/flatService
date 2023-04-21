import { Report } from "../model/Report";
import { request } from "./fetchRequests";

export class ReportService {
    public getUserReports(): Promise<Report[]> {
        return request.get("/report/getAllUserReport").then((res: any[]) => {
            const reports: Report[] = [];
            res.forEach((el) => {
                reports.push(Report.deserialize(el));
            });
            return reports;
        });
    }

    public delReport(id: number): Promise<void> {
        return request.post("/report/delete", { id: id });
    }
}
