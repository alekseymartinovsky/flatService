export class Credit {
    private sumCredit: number;
    private month: number;
    private rate: number;
    private overpayment: number;
    private resultSum: number;

    constructor(sumCredit: number, month: number, rate: number, overpayment: number, resultSum: number) {
        this.sumCredit = sumCredit;
        this.month = month;
        this.rate = rate;
        this.overpayment = overpayment;
        this.resultSum = resultSum;
    }

    public getSumCredit(): number {
        return this.sumCredit;
    }

    public setSumCredit(sumCredit: number): void {
        this.sumCredit = sumCredit;
    }

    public getMonth(): number {
        return this.month;
    }

    public setMonth(month: number): void {
        this.month = month;
    }

    public getRate(): number {
        return this.rate;
    }

    public setRate(rate: number): void {
        this.rate = rate;
    }

    public getOverpayment(): number {
        return this.overpayment;
    }

    public setOverpayment(overpayment: number): void {
        this.overpayment = overpayment;
    }

    public getResultSum(): number {
        return this.resultSum;
    }

    public setResultSum(resultSum: number): void {
        this.resultSum = resultSum;
    }

    static fromJson(json: any): Credit {
        const credit = new Credit(json.sumCredit, json.month, json.rate, json.overpayment, json.resultSum);
        return credit;
    }
}
