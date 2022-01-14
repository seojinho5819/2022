import { SafeAreaView } from "react-native"
import TreeView from "react-native-final-tree-view"

const TreeScreen = () => {

    const family = [
        {
            id: 'Grandparent',
            name: 'Grandpa',
            age: 78,
            children: [
                {
                    id: 'Me',
                    name: 'Me',
                    age: 30,
                    children: [
                        {
                            id: 'Erick',
                            name: 'Erick',
                            age: 10,
                        },
                        {
                            id: 'Rose',
                            name: 'Rose',
                            age: 12,
                        },
                    ],
                },
            ],
        }
    ]

    const getIndicator = (isExpanded, hasChildrenNodes) => {
        if (!hasChildrenNodes) {
            return '-'
        } else if (isExpanded) {
            return '\\/'
        } else {
            return '>'
        }
    }

    return (
        <SafeAreaView>
            <TreeView
                data={family} // defined above
                renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                    return (
                        <View style={{ borderWidth: 1 }}>
                            <Text
                                style={{
                                    marginLeft: 25 * level,
                                }}
                            >
                                {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                            </Text>
                        </View>
                    )
                }}
            />


        </SafeAreaView>
    )
} 