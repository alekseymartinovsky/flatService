import Login from "../../view/registration/Login";

/**
 * Используется для описание роута
 */
export interface MyRoute {
    /**
     * Путь
     */
    path: string;
    /**
     * Отображаемый компонент React
     */
    element: React.ReactNode;
    /**
     * Строгий url или нет
     */
    exact: boolean;
}

/**
 * Возможные url-адреса приложения
 */
export const enum ROUTE_APP {
    LOGIN = "/login",
}

/**
 * Массив всех возможных роутов приложения
 */
//export const routes: MyRoute[] = [{ path: ROUTE_APP.LOGIN, element: Login, exact: true }];
