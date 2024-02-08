import { enumTypeExcursion, enumTypePay } from "../types/excursion-scheme";
import { IMarking } from "./types";

export const markingTypeExcurison: IMarking[] = [
    {name: 'Группа', marking: enumTypeExcursion.GROUP},
    {name: 'Индивидуальная', marking: enumTypeExcursion.INDIVIDUAL}
]

export const markingTypePay: IMarking[] = [
    {name: 'Оплата на месте (без предоплаты)', marking: enumTypePay.PAY},
    {name: 'Предоплата', marking: enumTypePay.PREPAY}
]