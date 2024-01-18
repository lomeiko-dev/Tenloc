enum enumFetchPath {
    CITY = "city",
    EXCURSION = "excursion"
}

export const fetchPath: Record<enumFetchPath, string> = {
    [enumFetchPath.CITY]: "cities",
    [enumFetchPath.EXCURSION]: "excursions"
}