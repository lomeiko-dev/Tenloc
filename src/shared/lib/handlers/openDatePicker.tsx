export const openDatePicker = (func: (date: string) => void, object: React.RefObject<HTMLDivElement>) => {
    const datePicker = document.createElement('input');
    datePicker.type = 'date';
    datePicker.style.pointerEvents = 'none';
    datePicker.style.display = 'none'

    let isClick = false;

    datePicker.addEventListener('change', () => {
        const selectedDate = new Date(datePicker.value);
        const formattedDate = formatDate(selectedDate)
        func(formattedDate);
        object.current?.removeChild(datePicker);
    });

    window.addEventListener('click', () => {
        isClick ?
            object.current?.removeChild(datePicker) :
            isClick = true
    })

    object.current?.append(datePicker)
    datePicker.showPicker();
};

const formatDate = (date: Date) => {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString();

    return `${day}.${month}.${year}`;
}