import { Role } from "../model/Role";

export class RoleService {
    static checkManager(): boolean {
        if (localStorage.getItem("role") == Role.MANAGER) {
            return true;
        }
        return false;
    }
}
