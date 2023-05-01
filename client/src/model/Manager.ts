export class Manager {
    public phone: string;
    public email: string;

    constructor(phone: string, email: string) {
        this.email = email;
        this.phone = phone;
    }

    static deserialize(data: any) {
        return new Manager(data?.phone, data?.email);
    }

    public toJson() {
        return {
            phone: this.phone,
            email: this.email,
        };
    }
}
