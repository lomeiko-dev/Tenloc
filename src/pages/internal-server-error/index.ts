import { lazy } from "react";

export const InternalServerErrorLazy = lazy(async () => await import('./ui/InternalServerError'))