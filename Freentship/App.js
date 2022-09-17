import React, { useState, useEffect } from "react";
import PromotionView from "./views/PromotionView";

import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "./core/config";
import { DataSort } from "./core/data";

export default function App() {
  const [data1, setData1] = useState(null);
  useEffect(() => {
    let unsubscribe;
    const fetchData = async () => {
      unsubscribe = onSnapshot(
        doc(db, "items", "Kdqcv23VNyDOaninezUX"),
        (querySnapshot) => {
          setData1(querySnapshot.data());
        }
      );
      // unsubscribe = onSnapshot(collection(db, "items"), (querySnapshot) => {
      //   setData1(
      //     querySnapshot.docs.map((doc) => ({
      //       id: doc.id,
      //       ...doc.data(),
      //     }))
      //   );
      // });
      // unsubscribe = await getDocs(collection(db, "items")).then(
      //   (querySnapshot) => {
      //     setData1(
      //       querySnapshot.docs.map((doc) => ({
      //         id: doc.id,
      //         ...doc.data(),
      //       }))
      //     );
      //   }
      // );
    };

    fetchData();
    return unsubscribe;
  }, []);

  function WriteData() {
    const newItems = doc(collection(db, "items"));
    DataSort.map(async (item) => {
      await setDoc(newItems, item);
    });
  }
  return <PromotionView />;
}
