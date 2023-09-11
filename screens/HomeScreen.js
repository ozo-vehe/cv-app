import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { homeStyles, styles } from "../assets/global";

function HomeScreen({ navigation, route }) {
  // Save default values for the resume
  const [defaultName, setName] = useState("Obansa John");
  const [defaultSlack, setSlack] = useState("Obansa John");
  const [defaultGithub, setGithub] = useState("github.com/ozo-vehe");
  const [defaultBio, setBio] = useState(
    "A passionate mobile developer aiming to create amazing experience for people all over the world through building and maintaining highly responsive mobile applications with the aid of product research and modern development tools. My objective is to utilize my skills and expertise to focus on product usability and scalability and a better user experience. I am very enthusiastic about creating visually appealing and functional interfaces that enhance user experience. I am always eager to learn and adapt to new technologies and strive to deliver quality work on time."
  );

  useEffect(() => {
    // If the profile is passed as a param, update the default values
    if (route.params?.profile) {
      // Destructure the profile object
      const { name, slack, github, bio } = route.params.profile;
      // Update the name value if it is not empty
      name != "" ? setName(name) : setName(defaultName);
      // Update the slack value if it is not empty
      slack != "" ? setSlack(slack) : setSlack(defaultSlack);
      // Update the github value if it is not empty
      github != "" ? setGithub(github) : setBio(defaultGithub);
      // Update the bio value if it is not empty
      bio != "" ? setBio(bio) : setBio(defaultBio);
    }
  }, [route.params?.profile]);

  return (
    <View style={homeStyles.container}>
      <ScrollView>
        <View style={homeStyles.profileContainer}>
          <View style={homeStyles.profile}>
            <Text style={homeStyles.name}>{defaultName}</Text>
            <Text style={homeStyles.details}>
              Slack Username: {defaultSlack}
            </Text>
            <Text style={homeStyles.details}>
              GitHub Handle: {defaultGithub}
            </Text>
          </View>
          <View style={homeStyles.bio}>
            <Text style={homeStyles.bioHeader}>Bio</Text>
            <Text style={homeStyles.bioText}>{defaultBio}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Text
              style={[styles.buttonText, homeStyles.buttonText]}
              onPress={() => {
                navigation.navigate("Edit")
              }}
            >
              Edit CV
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
