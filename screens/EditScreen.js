import { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { editStyles, styles } from "../assets/global";

function EditScreen({ navigation }) {
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState("");
  const [slack, setSlack] = useState("");
  const [github, setGithub] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState({});
  const [editName, setEditName] = useState(false);
  const [editSlack, setEditSlack] = useState(false);
  const [editGithub, setEditGithub] = useState(false);
  const [editBio, setEditBio] = useState(false);

  const saveProfile = async () => {
    const profile = { name, slack, github, bio };
    setProfile(profile);
    setSaved(true);
  };

  return (
    <View style={editStyles.container}>
      <Text style={editStyles.header}>Edit CV</Text>
      <Text style={editStyles.subText}>Click the button below to edit parts of the cv</Text>
      <View style={editStyles.form}>
        <View style={editStyles.inputField}>
          {editName ? (
            <TextInput
              style={editStyles.input}
              placeholder="Full Name"
              onChangeText={(text) => setName(text)}
            />
          ) : (
            <Text style={editStyles.inputButton} onPress={() => setEditName(true)}>
              Edit Name
            </Text>
          )}
        </View>

        <View style={editStyles.inputField}>
          {editSlack ? (
            <TextInput
              style={editStyles.input}
              placeholder="Slack Username"
              onChangeText={(text) => setSlack(text)}
            />
          ) : (
            <Text style={editStyles.inputButton} onPress={() => setEditSlack(true)}>
              Edit Slack Username
            </Text>
          )}
        </View>

        <View style={editStyles.inputField}>
          {editGithub ? (
            <TextInput
              style={editStyles.input}
              placeholder="GitHub Handle"
              onChangeText={(text) => setGithub(text)}
            />
          ) : (
            <Text style={editStyles.inputButton} onPress={() => setEditGithub(true)}>
              Edit GitHub Handle
            </Text>
          )}
        </View>

        <View style={editStyles.inputField}>
          {editBio ? (
            <TextInput
              style={[editStyles.input, editStyles.textarea]}
              placeholder="Bio"
              onChangeText={(text) => setBio(text)}
            />
          ) : (
            <Text style={editStyles.inputButton} onPress={() => setEditBio(true)}>
              Edit Bio
            </Text>
          )}
        </View>
        
        {/* Save edit button */}
        <TouchableOpacity>
          <View style={styles.button}>
            <Text
              style={[styles.buttonText, editStyles.buttonText]}
              onPress={() => {
                saveProfile();
              }}
            >
              Save
            </Text>
          </View>
        </TouchableOpacity>

      </View>

      {saved && (
        <TouchableOpacity>
          <View style={styles.button}>
            <Text
              style={[styles.buttonText, editStyles.buttonText]}
              onPress={() => navigation.navigate("Home", {profile} )}
            >
              Go to Home
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default EditScreen;
