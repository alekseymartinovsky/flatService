export class Settings {
    private _coefficientSamePrice: number;
    private _coefficientSimilarPrice: number;

    private _bottomLimitSameSquare: number;
    private _topLimitSameSquare: number;
    private _bottomLimitSameYearOfBuild: number;
    private _topLimitSameYearOfBuild: number;

    private _bottomLimitSimilarSquare: number;
    private _topLimitSimilarSquare: number;
    private _topLimitSimilarYearOfBuild: number;
    private _bottomLimitSimilarYearOfBuild: number;

    constructor(
        coefficientSamePrice: number,
        coefficientSimilarPrice: number,
        bottomLimitSameSquare: number,
        topLimitSameSquare: number,
        bottomLimitSameYearOfBuild: number,
        topLimitSameYearOfBuild: number,
        bottomLimitSimilarSquare: number,
        topLimitSimilarSquare: number,
        topLimitSimilarYearOfBuild: number,
        bottomLimitSimilarYearOfBuild: number
    ) {
        this._coefficientSamePrice = coefficientSamePrice;
        this.coefficientSimilarPrice = coefficientSimilarPrice;
        this._bottomLimitSameSquare = bottomLimitSameSquare;
        this._topLimitSameSquare = topLimitSameSquare;
        this._bottomLimitSameYearOfBuild = bottomLimitSameYearOfBuild;
        this._topLimitSameYearOfBuild = topLimitSameYearOfBuild;
        this._bottomLimitSimilarSquare = bottomLimitSimilarSquare;
        this._topLimitSimilarSquare = topLimitSimilarSquare;
        this._topLimitSimilarYearOfBuild = topLimitSimilarYearOfBuild;
        this._bottomLimitSimilarYearOfBuild = bottomLimitSimilarYearOfBuild;
    }

    public toJson() {
        return {
            coefficientSamePrice: this._coefficientSamePrice,
            coefficientSimilarPrice: this._coefficientSimilarPrice,
            bottomLimitSameSquare: this._bottomLimitSameSquare,
            topLimitSameSquare: this._topLimitSameSquare,
            bottomLimitSameYearOfBuild: this._bottomLimitSameYearOfBuild,
            topLimitSameYearOfBuild: this._topLimitSameYearOfBuild,
            bottomLimitSimilarSquare: this._bottomLimitSimilarSquare,
            topLimitSimilarSquare: this._topLimitSimilarSquare,
            topLimitSimilarYearOfBuild: this._topLimitSimilarYearOfBuild,
            bottomLimitSimilarYearOfBuild: this._bottomLimitSimilarYearOfBuild,
        };
    }

    static deserialize(data: any) {
        return new Settings(
            data?.coefficientSamePrice ?? null,
            data?.coefficientSimilarPrice ?? null,
            data?.bottomLimitSameSquare ?? null,
            data?.topLimitSameSquare ?? null,
            data?.bottomLimitSameYearOfBuild ?? null,
            data?.topLimitSameYearOfBuild ?? null,
            data?.bottomLimitSimilarSquare ?? null,
            data?.topLimitSimilarSquare ?? null,
            data?.topLimitSimilarYearOfBuild ?? null,
            data?.bottomLimitSimilarYearOfBuild ?? null
        );
    }

    /**
     * Getter coefficientSamePrice
     * @return {number}
     */
    public get coefficientSamePrice(): number {
        return this._coefficientSamePrice;
    }

    /**
     * Getter coefficientSimilarPrice
     * @return {number}
     */
    public get coefficientSimilarPrice(): number {
        return this._coefficientSimilarPrice;
    }

    /**
     * Getter bottomLimitSameSquare
     * @return {number}
     */
    public get bottomLimitSameSquare(): number {
        return this._bottomLimitSameSquare;
    }

    /**
     * Getter topLimitSameSquare
     * @return {number}
     */
    public get topLimitSameSquare(): number {
        return this._topLimitSameSquare;
    }

    /**
     * Getter bottomLimitSameYearOfBuild
     * @return {number}
     */
    public get bottomLimitSameYearOfBuild(): number {
        return this._bottomLimitSameYearOfBuild;
    }

    /**
     * Getter topLimitSameYearOfBuild
     * @return {number}
     */
    public get topLimitSameYearOfBuild(): number {
        return this._topLimitSameYearOfBuild;
    }

    /**
     * Getter bottomLimitSimilarSquare
     * @return {number}
     */
    public get bottomLimitSimilarSquare(): number {
        return this._bottomLimitSimilarSquare;
    }

    /**
     * Getter topLimitSimilarSquare
     * @return {number}
     */
    public get topLimitSimilarSquare(): number {
        return this._topLimitSimilarSquare;
    }

    /**
     * Getter topLimitSimilarYearOfBuild
     * @return {number}
     */
    public get topLimitSimilarYearOfBuild(): number {
        return this._topLimitSimilarYearOfBuild;
    }

    /**
     * Getter bottomLimitSimilarYearOfBuild
     * @return {number}
     */
    public get bottomLimitSimilarYearOfBuild(): number {
        return this._bottomLimitSimilarYearOfBuild;
    }

    /**
     * Setter coefficientSamePrice
     * @param {number} value
     */
    public set coefficientSamePrice(value: number) {
        this._coefficientSamePrice = value;
    }

    /**
     * Setter coefficientSimilarPrice
     * @param {number} value
     */
    public set coefficientSimilarPrice(value: number) {
        this._coefficientSimilarPrice = value;
    }

    /**
     * Setter bottomLimitSameSquare
     * @param {number} value
     */
    public set bottomLimitSameSquare(value: number) {
        this._bottomLimitSameSquare = value;
    }

    /**
     * Setter topLimitSameSquare
     * @param {number} value
     */
    public set topLimitSameSquare(value: number) {
        this._topLimitSameSquare = value;
    }

    /**
     * Setter bottomLimitSameYearOfBuild
     * @param {number} value
     */
    public set bottomLimitSameYearOfBuild(value: number) {
        this._bottomLimitSameYearOfBuild = value;
    }

    /**
     * Setter topLimitSameYearOfBuild
     * @param {number} value
     */
    public set topLimitSameYearOfBuild(value: number) {
        this._topLimitSameYearOfBuild = value;
    }

    /**
     * Setter bottomLimitSimilarSquare
     * @param {number} value
     */
    public set bottomLimitSimilarSquare(value: number) {
        this._bottomLimitSimilarSquare = value;
    }

    /**
     * Setter topLimitSimilarSquare
     * @param {number} value
     */
    public set topLimitSimilarSquare(value: number) {
        this._topLimitSimilarSquare = value;
    }

    /**
     * Setter topLimitSimilarYearOfBuild
     * @param {number} value
     */
    public set topLimitSimilarYearOfBuild(value: number) {
        this._topLimitSimilarYearOfBuild = value;
    }

    /**
     * Setter bottomLimitSimilarYearOfBuild
     * @param {number} value
     */
    public set bottomLimitSimilarYearOfBuild(value: number) {
        this._bottomLimitSimilarYearOfBuild = value;
    }
}
