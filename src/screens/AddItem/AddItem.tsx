import {View, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/RootStackParamList';
import CInput, {RNEInputRef} from '../../components/CInput';
import {Formik, FormikProps} from 'formik';
import CText from '../../components/CText';
import CSelect from '../../components/CSelect';
import CSwitch from '../../components/CSwitch';
import palette from '../../theme/colors';
import CButton from '../../components/CButton';
import uuid from 'react-native-uuid';
import {AddItemFormikValues} from '../../types/AddItemFormikValues';
import {validate} from './validations';
import {useDispatch} from 'react-redux';
import {ItemType, TypeTimeFrequency} from '../../types/ItemType';
import {addItem} from '../../features/items/itemsSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'AddItem'>;

const initialValues: AddItemFormikValues = {
  title: '',
  amount: '',
  type: '',
  limitOccurance: '',
  limitOccuranceFrequency: '',
  entryAddDate: null,
  carryOverValues: false,
  positiveCarryOverValue: false,
};

const AddItem = (props: Props) => {
  const ref = useRef<RNEInputRef>(null);
  const formRef = useRef<FormikProps<AddItemFormikValues>>(null);
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <CButton
          onPress={() => {
            if (formRef.current) {
              console.log('hello');
              formRef.current.handleSubmit();
            }
          }}
          size="sm"
          type="clear">
          Save
        </CButton>
      ),
    });
  }, [props.navigation]);
  const durationPeriod = useRef([
    {label: 'hours', value: 'hour'},
    {label: 'days', value: 'day'},
    {label: 'weeks', value: 'week'},
    {label: 'months', value: 'month'},
    {label: 'years', value: 'year'},
  ]);
  const [open, setOpen] = useState(false);

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        ...initialValues,
      }}
      validate={validate}
      onSubmit={values => {
        const item: ItemType = {
          amount: parseInt(values.amount),
          carryOverValue: values.carryOverValues,
          entryAddDate: new Date(),
          id: uuid.v4().toString(),
          limitOccurance: parseInt(values.limitOccurance),
          limitOccuranceFrequency:
            values.limitOccuranceFrequency as TypeTimeFrequency,
          positiveCarryOverValue: values.positiveCarryOverValue,
          title: values.title,
          type: values.type,
        };
        dispatch(addItem(item));
        props.navigation.pop();
      }}>
      {({handleChange, handleBlur, values, setFieldValue, errors, touched}) => (
        <View style={styles.mainContainer}>
          <View style={styles.innerRow}>
            <CText as="H3">I want to limit the occurance of</CText>
            <CInput
              error={!!errors.title && touched.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              ref={ref}
              placeholder="Enter title e.g. Buying shoes"
            />
          </View>
          <View style={styles.innerRow}>
            <CText as="H3">... to</CText>

            <View style={styles.inputRow2}>
              <CInput
                error={!!errors.amount && touched.amount}
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
                inputMode="numeric"
                containerStyles={styles.inputSmall}
                placeholder="e.g. 4000"
                maxLength={20}
                value={values.amount}
              />
              <CInput
                error={!!errors.type && touched.type}
                containerStyles={styles.inputSmall}
                onChangeText={handleChange('type')}
                onBlur={handleBlur('type')}
                placeholder="e.g. dollars"
                maxLength={20}
                value={values.type}
              />
            </View>
          </View>
          <View style={styles.innerRow}>
            <CText as="H3">... per</CText>
            <View style={styles.inputRow2}>
              <CInput
                error={!!errors.limitOccurance && touched.limitOccurance}
                onChangeText={handleChange('limitOccurance')}
                onBlur={handleBlur('limitOccurance')}
                inputMode="numeric"
                containerStyles={styles.inputSmall}
                placeholder="e.g. 25"
                maxLength={10}
                value={values.limitOccurance}
              />
              <CSelect
                onSelectItem={value => {
                  setFieldValue('limitOccuranceFrequency', value.value);
                }}
                error={
                  !!errors?.limitOccuranceFrequency && touched.limitOccurance
                }
                open={open}
                setOpen={setOpen}
                items={durationPeriod.current}
                setValue={() => {}}
                value={values.limitOccuranceFrequency}
                placeholder="select interval"
              />
            </View>
          </View>
          <View style={styles.innerRow}>
            <CSwitch
              value={values.carryOverValues}
              onChange={() => {
                if (values.carryOverValues) {
                  setFieldValue('positiveCarryOverValue', false);
                }
                setFieldValue('carryOverValues', !values.carryOverValues);
              }}
              label="Carry over values"
            />
            <CText style={styles.helperText} as="P2">
              Carry over values to the next interval instead of resetting them
              after interval ends.
            </CText>
          </View>
          {values.carryOverValues && (
            <View style={styles.innerRow}>
              <CSwitch
                value={values.positiveCarryOverValue}
                onChange={() => {
                  setFieldValue(
                    'positiveCarryOverValue',
                    !values.positiveCarryOverValue,
                  );
                }}
                label="Positive carry over values"
              />
              <CText style={styles.helperText} as="P2">
                Carry over values will be passed if they are positive
              </CText>
            </View>
          )}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  mainContainer: {paddingHorizontal: 15, rowGap: 24, paddingTop: 20},
  inputSmall: {flex: 1},
  inputRow2: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 15,
  },
  helperText: {
    color: palette.grey,
  },
  innerRow: {
    rowGap: 8,
    display: 'flex',
    flexDirection: 'column',
  },
});
export default AddItem;
