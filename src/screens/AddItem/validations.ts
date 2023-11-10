import {
  AddItemFormikValues,
  ErrorsAddItemForm,
} from '../../types/AddItemFormikValues';
function isNumberString(input: string | undefined): boolean {
  // Regular expression to check if the string represents a valid number
  const numberRegex = /^\d+$/;

  if (!input) {
    return false;
  }
  // Test the string against the regular expression
  return numberRegex.test(input);
}
export const validate = (
  values: AddItemFormikValues,
  //   props /* only available when using withFormik */,
) => {
  const errors: ErrorsAddItemForm = {};

  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.amount) {
    errors.amount = 'Required';
  } else {
    if (!isNumberString(values.amount)) {
      errors.amount = 'Number only';
    }
  }
  if (!values.limitOccurance) {
    errors.limitOccurance = 'Required';
  } else {
    if (!isNumberString(values.limitOccurance)) {
      console.log('here');
      errors.limitOccurance = 'Number only';
    }
  }
  if (!values.type) {
    errors.type = 'Required';
  }
  if (!values.limitOccuranceFrequency) {
    errors.limitOccuranceFrequency = 'Required';
  }

  //...

  return errors;
};
