import Image from "next/image";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { db } from "src/lib/firebase";
import { collection, doc, setDoc, serverTimestamp } from "@firebase/firestore";

export default function InputBox() {
  const [effect, setEffect] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
    const rId: string = `${Math.floor(Math.random() * (100000 - 1)) + 1}`;
    // Add a new document with a generated id.
    const docRef = doc(db, "comments", rId);
    const sendData = {
      text: data,
      // timestamp: time,
      timestamp: serverTimestamp(),
      rId: Number(rId),
    };
    console.log(sendData);
    // later...
    await setDoc(docRef, sendData);

    setLoading(false);
    setData("");
  };

  const handleChange = (e) => {
    setData(() => e.target.value);
  };

  return (
    <>
      <div>
        <div className="flex flex-col px-12 items-center justify-center">
          <div
            className={`${effect && "animate-slide-out-top"} ${
              !effect && "animate-slide-in-elliptic-bottom-bck"
            }`}
            onAnimationEnd={() => setEffect(false)}
          >
            <input
              type="text"
              id="large-input"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
              placeholder="文化祭の感想を入力してね！"
              className="scale-150 block w-[800px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full scale-150 text-4xl mt-24 flex flex-row-reverse ">
            <button
              className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={() => {
                setEffect(true);
              }}
            >
              <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                onClick={sendPost}
              >
                投稿する
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
