import { TouchableOpacity } from "react-native-web";

export default function DrawerBottom() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>
                    Drawer Bottom
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        height: '100%',
    },

});