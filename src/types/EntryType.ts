export type TypeTimeFrequency = 'hour' | 'day' | 'month' | 'year' | 'week';
interface EntryDetail {
  occurance: number;
  date: Date;
}
export interface EntryType {
  id: string;
  entries: EntryDetail[];
}
