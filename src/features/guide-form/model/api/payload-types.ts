import { IGuide } from 'entities/guide'

export interface IAddGuideProps extends Omit<IGuide, 'id'> {}
