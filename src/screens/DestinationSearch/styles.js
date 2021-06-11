import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    height: '100%',
    },
    destinationInformationText: {
      position: 'absolute',
      top: 40,
      left: 30,
      textDecorationLine:'underline',
      fontWeight: 'bold',
    },
    tripContainer: {
      padding: 10,
      height: '100%',
    },
    textInput: {
      height: 50,
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
      marginLeft: 20,
    },
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    autocompleteContainer_top: {
      position: 'absolute',
      top: 55,
      left: 10,
      right: 10,
    },
    listView_top: {
      position: 'absolute',
      top: 130,
      backgroundColor: 'yellow',
    },
    autocompleteContainer_bottom: {
      position: 'absolute',
      top: 120,
      left: 10,
      right: 10,
    },
    listView_bottom: {
      position: 'absolute',
      top: 50,
      backgroundColor: 'green',
    },
    search_row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationText: {
      fontStyle: "italic",
    },
    circle: {
      width: 10,
      height: 10,
      backgroundColor: 'green',
      position: 'absolute',
      top: 56,
      left: 15,
      borderRadius: 5,
    },
    line: {
      width: 5,
      height: 100,
      backgroundColor: 'yellow',
      borderColor: 'black',
      borderWidth: 0.4,
      position: 'absolute',
      top: 65,
      left: 18,
    },
    square: {
      width: 10,
      height: 10,
      backgroundColor: 'red',
      position: 'absolute',
      top: 163,
      left: 16,
    },
});

export default styles;
