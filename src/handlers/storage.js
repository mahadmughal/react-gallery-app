import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { storage } from "../lib/firebase.config";

const Storage = {
  uploadFile: (media) => {
    return new Promise(async resolve => {
      try {
        const mediaRef = ref(storage, `images/${media.title}`);
        uploadBytes(mediaRef, media.file).then(snapshot => {
          resolve({ path: snapshot.metadata.fullPath, name: media.title });
        });
      } catch (e) {
        console.log(`While uploading file to firebase storage: ${e}`);
      }
    })
  },

  downloadFile: (media) => {
    return new Promise(async resolve => {
      try {
        const mediaRef = ref(storage, media.path);
        const fileUrl = getDownloadURL(mediaRef);
        resolve(fileUrl);
      } catch(e) {
        console.log(`while downloading file from cloud: ${e}`);
      }
    })
  }
}

export default Storage;