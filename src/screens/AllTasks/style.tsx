import { StyleSheet } from "react-native";
import { COLOR } from "../../data/StyleGuides";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
        color: COLOR.jetBlack
    },
    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        marginVertical: 4,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonStyle: {
        width: '20%'
    }

})
export default styles;