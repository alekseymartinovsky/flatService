import Header from "../component/Header";
import { Role } from "../model/Role";
import AdminStartPage from "./adminPage/AdminStartPage";
import UserPage from "./userPage/UserPage";

export const StartPage: React.FC = () => {
    return (
        <div>
            <Header />
            {localStorage.getItem("role") == Role.CLIENT ? <UserPage /> : <AdminStartPage />}
        </div>
    );
};
