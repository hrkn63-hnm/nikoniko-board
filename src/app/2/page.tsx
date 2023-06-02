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
              <span className="text-[120px] text-red-500 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee my-64">
              <span className="text-[360px] text-yellow-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee mt-[1400px]">
              <span className="text-[360px] text-indigo-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee">
              <span className="text-[540px] text-pink-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      case 2:
        if (Number(post.id) % 8 == 0) {
          return (
            <div className="animate-marquee-2 my-56">
              <span className="text-[120px] text-red-500 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-2 my-72">
              <span className="text-[60px] text-green-500 font-bold">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 10 == 0) {
          return (
            <div className="animate-marquee-2 mt-[540px]">
              <span className="text-[60px] text-red-300 font-bold">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-2 mt-[540px]">
              <span className="text-[60px] text-red-700 font-bold">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-2 my-32">
              <span className="text-[240px] text-slate-800 dark:text-white font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }

      case 3:
        if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-3 my-12">
              <span className="text-[100px] text-slate-800 dark:text-white font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-3 my-81">
              <span className="text-[480px] text-green-200 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee-3 my-64">
              <span className="text-[480px] text-pink-700 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-3 my-96">
              <span className="text-[320px] text-cyan-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      case 4:
        if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-4">
              <span className="text-9xl text-blue-600 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-4 mt-[800px]">
              <span className="text-9xl text-green-500 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-4 my-[600px]">
              <span className="text-9xl text-blue-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      case 5:
        if (Number(post.id) % 2 == 0) {
          return (
            <div className="animate-marquee-5">
              <span className="text-9xl tracking-wide text-red-500 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee-5 my-48">
              <span className="text-9xl text-green-500 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee-5 my-96">
              <span className="text-9xl text-yellow-400 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-5 my-48">
              <span className="text-9xl text-blue-500 font-bold ">
                {post.data().text}
              </span>
            </div>
          );
        }
      default:
        if (Number(post.id) % 4 == 1) {
          return (
            <div className="animate-marquee mt-[1200px] ">
              <span className="text-9xl text-lime-500 font-bold scale-150">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 3 == 0) {
          return (
            <div className="animate-marquee my-48">
              <span className="text-9xl text-purple-500 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 5 == 0) {
          return (
            <div className="animate-marquee mt-[1300px]">
              <span className="text-9xl tracking-widest text-purple-300 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 22 == 0) {
          return (
            <div className="animate-marquee-3 mt-[900px]">
              <span className="text-9xl tracking-widest text-cyan-700 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else if (Number(post.id) % 36 == 0) {
          return (
            <div className="animate-marquee-3 mt-[1500px]">
              <span className="text-9xl tracking-widest text-cyan-700 font-bold my-4">
                {post.data().text}
              </span>
            </div>
          );
        } else {
          return (
            <div className="animate-marquee-3 my-48">
              <span className="text-9xl text-orange-500 font-bold ">
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
              文化祭コメント掲示板
            </p>
            <InputBox2 />
          </div>
        </div>
      </div>
    </>
  );
}
