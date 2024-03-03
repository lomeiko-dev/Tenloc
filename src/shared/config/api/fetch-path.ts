enum enumFetchPath {
   CITY = 'city',
   EXCURSION = 'excursion',
   REVIEW = 'review',
   ARTICLE = 'article',
   ORDER = 'order',
   USERS = 'users',
   PROFILE = 'profile',
   FEEDBACK = 'feedback',
}

export const fetchPath: Record<enumFetchPath, string> = {
   [enumFetchPath.CITY]: 'cities',
   [enumFetchPath.FEEDBACK]: 'feedback',
   [enumFetchPath.EXCURSION]: 'excursions',
   [enumFetchPath.REVIEW]: 'reviews',
   [enumFetchPath.ARTICLE]: 'articles',
   [enumFetchPath.ORDER]: 'orders',
   [enumFetchPath.USERS]: 'users',
   [enumFetchPath.PROFILE]: 'profiles',
}
