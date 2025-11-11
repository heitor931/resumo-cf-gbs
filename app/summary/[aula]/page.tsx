import DocumentTopic from "@/app/_general-components/Document";
import Topic from "../Topic";

const mathSummaries = [
  {
    sumTopic: "Condensação de Matrizes 😁",
    sumContent:
      "Determina a matriz dos coeficientes e termos independentes.2. Calcula a sua caractéristica pelos métodos já conhecidos. 3. Verifica se a característica dos coeficientes é igual ou diferente da caracterítica dos termos independentes",
    sumDate: "2025-05-01",
    classDate: "2025-04-28, Quinta-feira",
    classNumber: 1,
    sumId: "mth-001",
    sumLikes:{likes:10, hearts:5, ok:2},
  },
  {
    sumTopic: "Derivatives",
    sumContent:
      "Derivatives: rules, implicit differentiation, and applications.",
    sumDate: "2025-05-03",
    classDate: "2025-05-02",
    classNumber: 2,
    sumId: "mth-002",
        sumLikes:{likes:10, hearts:5, ok:2},

  },
  {
    sumTopic: "Integrals",
    sumContent:
      "Integrals: fundamental theorem, substitution and basic techniques.",
    sumDate: "2025-05-07",
    classDate: "2025-05-05",
    classNumber: 3,
    sumId: "mth-003",
        sumLikes:{likes:10, hearts:5, ok:2},
    
  },
  {
    sumTopic: "Series",
    sumContent: "Series: convergence tests and power series basics.",
    sumDate: "2025-05-10",
    classDate: "2025-05-09",
    classNumber: 4,
    sumId: "mth-004",
        sumLikes:{likes:10, hearts:5, ok:2},
    
  },
  {
    sumTopic: "Linear Algebra",
    sumContent:
      "Linear algebra essentials: vectors, matrices and determinants.",
    sumDate: "2025-05-12",
    classDate: "2025-05-11",
    classNumber: 5,
    sumId: "mth-005",
    sumLikes:{likes:10, hearts:5, ok:2},
  },
];

const documents = [
  {
    docTitle: "Calculus Notes",
    docLink: "https://docs/calculus-notes.pdf",
  },
  {
    docTitle: "Linear Algebra Handbook",
    docLink: "https://linear-algebra-handbook.pdf",
  },
];

type ParamProps = {
  params: {
    aula: string;
  };
};

async function classTopic({ params }: ParamProps) {
  const {aula} = await params

  const generateTopicName = () => {
    if (aula === "math") {
      return "Matemática I";
    } else if(aula === "cpe") {
      return "C.P.E";
    } else if(aula === "english") {
      return "Inglês";
    } else if(aula === "informatic") {
      return "Introdução á Informática";
    } else if(aula === "mic") {
      return "M.I.C";
    } else {
      return aula;
    }

    
  };
  // get data for aula

  return (
    <main className="flex flex-col">
      <p className=" text-xl  bg-white p-1 rounded border-t-white w-fit m-auto ">
        {generateTopicName()}
      </p>
      <main className="flex gap-2 mx-4 align-top">
        <article className="flex-2 flex flex-col gap-4">
          {mathSummaries.map((summary) => (
            <Topic key={summary.sumId} {...summary} />
          ))}
          )
        </article>
        <article className=" bg-white flex-1 h-fit rounded-md p-1 flex flex-col gap-2">
          <p className="font-bold text-sm italic">
            Material de estudo fornecido pelo professor/delegado.
          </p>
          {documents.map((doc, index) => (
            <DocumentTopic
              key={index}
              docTitle={doc.docTitle}
              docLink={doc.docLink}
            />
          ))}
        </article>
      </main>
    </main>
  );
}

export default classTopic;
