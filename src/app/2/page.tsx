"use client";
import Image from "next/image";
import InputBox2 from "src/components/InputBox2";
import { useEffect, useState } from "react";
import React from "react";
// import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "src/lib/firebase";
import { doc, getDoc, getDocs, getCountFromServer } from "firebase/firestore";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [poi, setPoi] = useState("");
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "comments"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [db]
  );

  const colors = (post) => {
    // console.log(post.rId);
    switch (post.data().text.length) {
      case 1:
        if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee">
              <span className="text-[340px] text-red-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee">
              <span className="text-[100px] text-yellow-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee ">
              <span className="text-[240px] text-indigo-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee ml-[720px]">
              <span className="text-[180px] text-pink-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      case 2:
        if (Number(post.id) % 8 == 0) {
          return (
            <div className="animate-marquee-2 mt-[50px]">
              <span className="text-[150px] text-red-500 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-2 mt-[100px]">
              <span className="text-[60px] text-green-500 font-bold">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 10 == 0) {
          return (
            <div className="animate-marquee-2">
              <span className="text-[90px] text-red-300 font-bold">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-2 mt-[100px]">
              <span className="text-[60px] text-red-700 font-bold">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-2 mt-[450px]">
              <span className="text-[240px] text-slate-800 dark:text-white font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }

      case 3:
        if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-3 mt-[100px]">
              <span className="text-[100px] text-slate-800 dark:text-white font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-3 mt-[100px] ml-[2000px]">
              <span className="text-[320px] text-green-200 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee-3 mt-[100px]">
              <span className="text-[480px] text-pink-700 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-3 mt-[100px] ml-[1000px]">
              <span className="text-[120px] text-cyan-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      case 4:
        if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-4 mt-[400px]">
              <span className="text-[240px] text-blue-600 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-4 mt-[600px] ml-[1000px]">
              <span className="text-[120px] text-green-500 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-4 mt-[200px]">
              <span className="text-[20px] text-blue-300 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      case 5:
        if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-5 mt-[100px]">
              <span className="text-[30px] tracking-wide text-red-500 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-5 mt-[600px] ml-[600px]">
              <span className="text-[40px] text-green-500 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee-5 mt-[700px] ml-[1000px]">
              <span className="text-[30px] text-yellow-400 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-5 mt-[700px]">
              <span className="text-[120px] text-blue-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      default:
        if (Number(post.id) % 4 == 0) {
          return (
            <div className="animate-marquee-5 mt-[100px] ">
              <span className="text-[110px] text-lime-500 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-5 mt-[400px] ml-[900px]">
              <span className="text-[120px] text-purple-500 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee-5 ml-[800px]">
              <span className="text-[40px] text-purple-300 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 22 == 0) {
          return (
            <div className="animate-marquee-5 mt-[500px] ml-[400px]">
              <span className="text-[180px] tracking-widest text-cyan-200 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 7 == 0) {
          return (
            <div className="animate-marquee-5 mt-[400px]">
              <span className="text-[100px] tracking-widest text-sky-300 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-3 mt-[750px]">
              <span className="text-[60px] tracking-widest text-fuchsia-500 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-3 mt-[500px]">
              <span className="text-[40px] text-orange-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800">
        <div className="z-10">
          {posts.map((post) => (
            <div key={post.id} className="fixed h-screen w-screen py-24">
              {colors(post)}
            </div>
          ))}
        </div>
        <div className="-z-10">
          <div className="h-screen w-screen flex flex-col justify-center items-center">
            <p className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              けやき祭コメント掲示板
            </p>
            <InputBox2 />
          </div>
        </div>
      </div>
    </>
  );
}
