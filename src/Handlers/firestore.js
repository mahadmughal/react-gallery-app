import { doc, setDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';
import { db } from "../lib/firebase.config";

const Firestore = {

  // reading data from could firestore ...
  readDocs: () => {
    let docs = [];
    const ref = collection(db, 'stocks');
    return new Promise(async resolve => {
      try {
        const snapshots = await getDocs(ref);
        snapshots.forEach((doc) => {
          const d = { ...doc.data() };
          docs.push(d);
        });
        resolve(docs);
      } catch(e) {
        console.log(e);
      }
    })
  },

  // writing data to cloud firestore ... 
  writeDoc: (...args) => {
    const [input] = args
    return new Promise(async resolve => {
      const randomIndex = Math.floor(Math.random() * 100000000);
      try {
        const docRef = doc(db, "stocks", `${randomIndex}`);
        await setDoc(docRef, { title: input.title, path: input.path, createdAt: serverTimestamp(), user: input.user })
        resolve('new doc succesfully inserted');
      } catch(e) {
        console.log(`While creating document in firestore: ${e}`);
      }
    })
  }
}

export default Firestore;





