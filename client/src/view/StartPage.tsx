import Header from "../component/Header";
import AdminStartPage from "./adminPage/AdminStartPage";
import UserPage from "./userPage/UserPage";

export const StartPage: React.FC = () => {
    return (
        <div>
            <Header />
            {!true ? <UserPage /> : <AdminStartPage />}
        </div>
    );
};
