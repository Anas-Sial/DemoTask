import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import axios from 'axios';
import { Button } from '../../components';
import { commonStyles } from '../../data/StyleGuides';

const ImageScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const requestGalleryPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title: 'Gallery Permission',
                        message: 'We need access to your gallery to upload images.',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true
    };

    const handleImagePick = async () => {
        const hasPermission = await requestGalleryPermission();

        if (hasPermission) {
            launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker')
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error)
                } else {
                    const uri: any = response.assets[0].uri
                    setImageUri(uri)
                }
            })
        } else {
            Alert.alert('Permission Denied', 'You need to grant permission to access the gallery.')
        }
    }

    // I didnt call this function because i dont have api key
    const handleUpload = async () => {
        if (!imageUri) {
            Alert.alert('No Image Selected', 'Please select an image first.')
            return
        }

        const formData = new FormData()
        formData.append('image', {
            uri: imageUri,
            name: 'photo.jpg',
            type: 'image/jpeg',
        });

        try {
            const response = await axios.post('Here you add api url', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            Alert.alert('Upload Success', 'Image has been uploaded successfully!')
        } catch (error) {
            Alert.alert('Upload Failed', 'Something went wrong')
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Select Image" onPress={handleImagePick} />
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: '5%' }} />}
            <Button title="Upload Image" onPress={() => { }}
                style={styles.buttonstyle} />
        </View>
    );
};

export default ImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...commonStyles.center
    },
    buttonstyle: {
        marginTop: '5%'
    }
})