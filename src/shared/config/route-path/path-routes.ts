import { IRoutePathProperties, enumPath } from "./type";

export const pathRoutes: Record<enumPath, IRoutePathProperties> = {
    [enumPath.MAIN]: {
        path: "/main",
        fullPath: "/main",
        isAuth: false,
    },
    [enumPath.ABOUT]: {
        name: "О сервисе",
        path: "/about",
        fullPath: "/about",
        isAuth: false,
    },
    [enumPath.CITY]: {
        path: "/city",
        params: "/:id",
        fullPath: "/city/:id",
        isAuth: false,
    },
    [enumPath.EXCURSION]: {
        path: "/excursion",
        params: "/:id",
        fullPath: "/excursion/:id",
        isAuth: false,
    },
    [enumPath.BLOG]: {
        name: "Блог",
        path: "/blog",
        fullPath: "/blog",
        isAuth: false,
    },
    [enumPath.ARTICLE]: {
        path: "/article",
        params: "/:id",
        fullPath: "/article/:id",
        isAuth: false,
    },
    [enumPath.CART]: {
        path: "/cart",
        fullPath: "/cart",
        isAuth: true,
    },
    [enumPath.GUIDE]: {
        name: "Партнёрская программа",
        path: "/guide",
        fullPath: "/guide",
        isAuth: false,
    },
    [enumPath.FEEDBACK]: {
        name: "Поддержка",
        path: "/feedback",
        fullPath: "/feedback",   
        isAuth: true,
    },
    [enumPath.FEEDBACK_ANSWER]: {
        name: "Ответы",
        path: "/feedback/answer",
        fullPath: "/feedback/answer",
        isAuth: true
    },
    [enumPath.PROFILE]: {
        path: "/profile",
        fullPath: "/profile",
        isAuth: true,
    },
    [enumPath.THANKS]: {
        path: "/thanks",
        fullPath: "/thanks",
        isAuth: false
    },
    [enumPath.NOTFOUND]: {
        path: "/not-found",
        fullPath: "/not-found",
        isAuth: false,
    }
}