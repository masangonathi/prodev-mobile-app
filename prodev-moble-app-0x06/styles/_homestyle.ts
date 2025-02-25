import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#F5F5F5",
    },
    searchGroup: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // For Android shadow
    },
    searchFormGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    searchControl: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    searchButton: {
        backgroundColor: "#34967C",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    filterGroup: {
        flexDirection: "row",
        padding: 10,
    },
    filterContainer: {
        alignItems: "center",
        marginRight: 15,
    },
    listingContainer: {
        marginTop: 20,
    },
    paginationContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    showMoreButton: {
        backgroundColor: "#34967C",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    showMoreButtonText: {
        color: "white",
        fontSize: 16,
    },
});

export { styles };