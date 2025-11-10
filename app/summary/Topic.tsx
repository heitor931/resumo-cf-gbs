"use client";

export type TopicType = {
  sumId: string;
  sumContent: string;
  sumTopic: string;
  sumDate: string;
  classDate: string;
  classNumber: number;
  sumLikes: number;
  sumDeslikes: number;
};

function Topic({ sumTopic,classNumber, classDate, sumContent }: TopicType) {
  return (
    <section className="flex h-screen border p-2 rounded-md  flex-col gap-4">
      <div className="">
        <p className="text-white">Aula#{classNumber}: <span className="italic text-green-400">{sumTopic}</span> 🔥😕🤯</p>
        <p className="text-white">Data da aula: <span className="text-red-400">{classDate}</span></p>
      </div>
      <hr className="w-full" />
      <div>
        <p className="mb-2 bg-white rounded-md w-fit p-1">Resumo:</p>
        <p className="text-white">{sumContent}</p>
      </div>
    </section>
  );
}

export default Topic;
