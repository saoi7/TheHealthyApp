import React from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem, Body, Right, Icon } from "native-base";


export default function PostsScreen({ navigation }) {

const Posts = ({ navigation, screenProps }) => {
	return (
		<View>
			<List>
				<FlatList
					data={screenProps.user.posts}
					renderItem={({ item }) => (
						<ListItem
							onPress={() =>
								navigation.navigate("Post", { id: item.id, title: item.title })
							}
						>
							<Body>
								<Text>{item.title}</Text>
							</Body>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
					)}
					keyExtractor={item => item.id}
				/>
			</List>
		</View>
	);
            }
};

