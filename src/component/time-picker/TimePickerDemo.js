import moment from 'moment';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePickerDemo = () => {
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState('11:00');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    setDatePickerVisibility(false);
    setTime(moment(date).format('hh : mm'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time Picker</Text>
      <Text style={styles.time}>{time}</Text>

      <TouchableOpacity onPress={showDatePicker} style={styles.btn}>
        <Text style={styles.btnTxt}>Open TimePicker</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={datePickerVisibility}
        mode="time"
        is24Hour
        onConfirm={date => handleConfirm(date)}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    margin: 30,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  btnTxt: {
    fontWeight: '400',
    textAlign: 'center',
  },
  time: {
    fontWeight: '800',
    textAlign: 'center',
    margin: 10,
  },
});

export default TimePickerDemo;
