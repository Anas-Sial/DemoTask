// import { launchImageLibrary } from "react-native-image-picker";
// import { ImagePickerResponse, sheetProps } from "../data/Types";

export const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};


// export const uploadImage = async (setUploadImgFunction: any) => {

//     const response: ImagePickerResponse = await launchImageLibrary({
//         mediaType: 'photo',
//         selectionLimit: 1,
//     });

//     if (response.didCancel) {
//         console.log('User cancelled image picker');
//     } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//     } else {
//         setUploadImgFunction(response?.assets[0]?.uri);
//     }

// };
