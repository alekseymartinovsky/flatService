import { FC } from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import LoginPage from "../../view/registration/LoginPage";
import Sign from "../../view/registration/Sign";
import { StartPage } from "../../view/StartPage";
import AddFlatPage from "../../view/adminPage/AddFlatPage";
import EditFlat from "../../view/adminPage/EditFlat";
import ViewRentFlat from "../../view/ViewRentFlat";
import CreateSaleFlat from "../../view/adminPage/CreateSaleFlat";
import ViewSaleFlat from "../../view/ViewSaleFlat";

export enum ROUTE_PATH {
    LOGIN = "/login",
    REGISTRATION = "/reg",
    START = "/",
    CALCULATE_FLAT_GRADE = "/calculateFlatGrade",
    RESULT_GRADE = "/resultGrade",
    FALT_INFO = "/flatInfo",
    REPORT = "/reports",
    ADD_FLAT = "/addFlat",
    USER_FLATS = "/userFlats",
    ADMIN_PAGE = "/adminPage",
    EDIT_SETTINGS = "/editSettings",
    UPDATE_PERSONAL_FLAT = "/updatePersonalFlat",
    EDIT_FLAT_INFO = "/editFlatInfo",
    VIEW_RENT_FLAT = "/viewRentFlat",
    EDIT_SALE_FLAT = "/editSaleFlat",
    VIEW_SALE_FLAT = "/viewSaleFlat",
}

/**
 * Реализует навигацию приложения
 *
 * @returns роуты приложения
 */
const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
            <Route path={ROUTE_PATH.REGISTRATION} element={<Sign />} />
            <Route path={ROUTE_PATH.START} element={<StartPage />} />
            <Route path={ROUTE_PATH.ADD_FLAT} element={<AddFlatPage />} />
            <Route path={ROUTE_PATH.EDIT_FLAT_INFO} element={<EditFlat />} />
            <Route path={ROUTE_PATH.VIEW_RENT_FLAT} element={<ViewRentFlat />} />
            <Route path={ROUTE_PATH.EDIT_SALE_FLAT} element={<CreateSaleFlat />} />
            <Route path={ROUTE_PATH.VIEW_SALE_FLAT} element={<ViewSaleFlat />} />
        </Routes>
    );
};

export default AppRouter;
