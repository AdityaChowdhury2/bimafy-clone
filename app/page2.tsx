import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { cn } from '@/lib/cn'
import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height;

const Page2Component = () => {
    return (
        <View className='px-4'>
            <Text className='text-lg font-semibold text-center mt-4'>Submissions List</Text>

            <View className={cn('bg-white rounded-md px-2', { 'h-[70vh]': screenHeight > 700 })}>
                <ScrollView className='mt-4'>
                    <ScrollView horizontal>

                        <View style={styles.table}>
                            {/* Header Row */}
                            <View style={styles.row}>
                                <Text style={styles.cell}>Header 1</Text>
                                <Text style={styles.cell}>Header 2</Text>
                                <Text style={styles.cell}>Header 3</Text>
                                <Text style={styles.cell}>Header 4</Text>
                                <Text style={styles.cell}>Header 5</Text>
                            </View>
                            {/* Data Rows */}
                            {Array.from({ length: 100 }).map((_, index) => (
                                <View key={index} style={styles.row}>
                                    <Text style={styles.cell}>Data {index + 1}.1</Text>
                                    <Text style={styles.cell}>Data {index + 1}.2</Text>
                                    <Text style={styles.cell}>Data {index + 1}.3</Text>
                                    <Text style={styles.cell}>Data {index + 1}.4</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                    <Text style={styles.cell}>Data {index + 1}.5</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        minWidth: 100, // Adjust width as needed
        textAlign: 'center',
    },
});
export default Page2Component