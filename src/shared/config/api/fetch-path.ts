enum enumFetchPath {
    CITY = "city",
    EXCURSION = "excursion",
    REVIEW = "review"
}

export const fetchPath: Record<enumFetchPath, string> = {
    [enumFetchPath.CITY]: "cities",
    [enumFetchPath.EXCURSION]: "excursions",
    [enumFetchPath.REVIEW]: "reviews"
}