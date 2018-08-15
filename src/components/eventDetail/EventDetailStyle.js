import {StyleSheet, Dimensions, Platform} from 'react-native';
import EventDetail from './EventDetail';
let {height, width} = Dimensions.get('screen');

export default EventDetailStyle = StyleSheet.create({
    subHeader: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    subHeaderTitle: {
        flex:1,
        marginRight:15,
        fontSize:18,
        color: '#666666'
    },
    subHeaderIconContainer: {
        padding: 5,
    },
    subHeaderIcon: {
        fontSize: 22
    },
    container: {
        paddingHorizontal: 20,
    },
    modalStyle: {
        flex:1,
        justifyContent: 'center',

    },

    pickerStyle: {
        height:35,
        flex:1 ,
        color:'gray',
    },
    customPickerContainer: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#bcbec6',
    },
    modalHeader: {
        alignItems: 'flex-end',
        padding: 10,
        marginTop: 5,
    },
    modalHeaderCloseButton: {

    },
    modalHeaderCloseButtonIcon: {
        color: '#666666',
        fontSize: 22
    },
    clearButtonContainer: {
        position: 'absolute',
        bottom: 25,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clearButton: {
        backgroundColor: '#666666',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clearButtonText: {
        color: '#ffffff',
        fontSize: 16
    },
});