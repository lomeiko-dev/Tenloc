import { IFeedback } from 'entities/feedback'

export interface IFeedbackProps extends Omit<IFeedback, 'id'> {}
