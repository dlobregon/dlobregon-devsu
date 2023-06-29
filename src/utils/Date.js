export const getDateStringFromDB  = (date) => {
    return new Date(date).toISOString().substr(0, 10)
}

export const formatDate = (date) => {
    const tmpDate = new Date(date)
    const year = tmpDate.toLocaleString('default', {year: 'numeric'});
    const month = tmpDate.toLocaleString('default', {month: '2-digit'});
    const day = tmpDate.toLocaleString('default', {day: '2-digit'});
    return [year, month, day].join('-');

}

export const oneYearAfter = (date) => {
    const releseDate = new Date(date)
    const revsisionDate = new Date(releseDate.getFullYear()+1, releseDate.getMonth(), releseDate.getDate() )
    return formatDate(revsisionDate)
}

export const isBefore = (date) => {
     return new Date(date) < new Date()
}

