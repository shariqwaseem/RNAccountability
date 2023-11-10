export type TypeTimeFrequency = 'hour' | 'day' | 'month' | 'year' | 'week';

export interface ItemType {
  title: string;
  amount: number;
  type: string;
  limitOccurance: number;
  limitOccuranceFrequency: TypeTimeFrequency;
  entryAddDate: Date;
  id: string;
  carryOverValue: boolean;
  positiveCarryOverValue: boolean;
}
