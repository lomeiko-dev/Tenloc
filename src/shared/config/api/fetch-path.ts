enum enumFetchPath {
   CITY = 'city',
   EXCURSION = 'excursion',
   REVIEW = 'review',
   ARTICLE = 'article',
   ORDER = 'order',
   USERS = 'users',
}

export const fetchPath: Record<enumFetchPath, string> = {
   [enumFetchPath.CITY]: 'cities',
   [enumFetchPath.EXCURSION]: 'excursions',
   [enumFetchPath.REVIEW]: 'reviews',
   [enumFetchPath.ARTICLE]: 'articles',
   [enumFetchPath.ORDER]: 'orders',
   [enumFetchPath.USERS]: 'users',
}
