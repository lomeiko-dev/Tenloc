export const GenerateQuerySort = (
    city?: string, date?: string,
    primaryMoney?: string, secondaryMoney?: string, 
    typeExcursion?: string, typePay?: string): string | undefined => {
        let query = ''

        if(city)
            query += `&city_like=${city}`

        if(primaryMoney && secondaryMoney)
            query += `&_sort=priceMiddle&priceMiddle_gte=${primaryMoney}&priceMiddle_lte=${secondaryMoney}`

        if(date)
            query += `&date_like=${date}`

        if(typeExcursion)
            query += `&typeExcursion=${typeExcursion}`

        if(typePay)
            query += `&typePay=${typePay}`

        return query === '' ? undefined : query
}