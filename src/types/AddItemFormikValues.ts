export interface AddItemFormikValues {
  title: string;
  amount: string;
  type: string;
  limitOccurance: string;
  limitOccuranceFrequency: string;
  entryAddDate: Date | null;
  carryOverValues: boolean;
  positiveCarryOverValue: boolean;
}
export interface ErrorsAddItemForm {
  title?: string;
  amount?: string;
  type?: string;
  limitOccurance?: string;
  limitOccuranceFrequency?: string;
  entryAddDate?: string;
  carryOverValues?: string;
  positiveCarryOverValue?: string;
}
