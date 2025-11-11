"use client";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaCheckSquare } from "react-icons/fa";



export type TopicType = {
  sumId: string;
  sumContent: string;
  sumTopic: string;
  sumDate: string;
  classDate: string;
  classNumber: number;
  sumLikes: {likes:number; hearts:number; ok:number}
};

function Topic({ sumTopic,classNumber, classDate, sumContent, sumLikes }: TopicType) {
  return (
    <section  className="flex h-screen mt-2 p-2 shadow-sm shadow-violet-100 rounded-md  flex-col gap-4">
      <article className="flex gap-2 justify-between">
        <div className="">
        <p className="text-white">Aula#{classNumber}: <span className="italic text-green-400">{sumTopic}</span> 🔥😕🤯</p>
        <p className="text-white">Data da aula: <span className="text-red-400">{classDate}</span></p>
      </div>
      <hr className="border-white rotate-90" />
      <div className="flex text-white gap-4">
        <p className="flex gap-1 cursor-pointer"><AiFillLike size={20} color="#4080FF" /><span>{sumLikes.likes}</span></p>
        <p className="flex gap-1 cursor-pointer"><FcLike size={20} /><span>{sumLikes.hearts}</span></p>
        <p className="flex gap-1 cursor-pointer"><FaCheckSquare size={20} color="#66ff00" /><span>{sumLikes.ok}</span></p>
      </div>
      </article>
      
      <hr className="w-full border-gray-400" />
      <div>
        <p className="mb-2 bg-white rounded-md w-fit p-1">Resumo:</p>
        <p className="text-white">{sumContent}</p>
      </div>
    </section>
  );
}

export default Topic;
