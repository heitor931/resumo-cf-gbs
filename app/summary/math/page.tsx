import Topic from "../Topic";

const mathSummaries = [
    {
        sumTopic: "Condensação de Matrizes 😁",
        sumContent: "Determina a matriz dos coeficientes e termos independentes.2. Calcula a sua caractéristica pelos métodos já conhecidos. 3. Verifica se a característica dos coeficientes é igual ou diferente da caracterítica dos termos independentes",
        sumDate: "2025-05-01",
        classDate: "2025-04-28, Quinta-feira",
        classNumber: 1,
        sumId: "mth-001",
        sumLikes: 12,
        sumDeslikes: 1,
    },
    {
        sumTopic: "Derivatives",
        sumContent: "Derivatives: rules, implicit differentiation, and applications.",
        sumDate: "2025-05-03",
        classDate: "2025-05-02",
        classNumber: 2,
        sumId: "mth-002",
        sumLikes: 20,
        sumDeslikes: 2,
    },
    {
        sumTopic: "Integrals",
        sumContent: "Integrals: fundamental theorem, substitution and basic techniques.",
        sumDate: "2025-05-07",
        classDate: "2025-05-05",
        classNumber: 3,
        sumId: "mth-003",
        sumLikes: 15,
        sumDeslikes: 0,
    },
    {
        sumTopic: "Series",
        sumContent: "Series: convergence tests and power series basics.",
        sumDate: "2025-05-10",
        classDate: "2025-05-09",
        classNumber: 4,
        sumId: "mth-004",
        sumLikes: 8,
        sumDeslikes: 3,
    },
    {
        sumTopic: "Linear Algebra",
        sumContent: "Linear algebra essentials: vectors, matrices and determinants.",
        sumDate: "2025-05-12",
        classDate: "2025-05-11",
        classNumber: 5,
        sumId: "mth-005",
        sumLikes: 30,
        sumDeslikes: 2,
    },
];


function MathPage() {
    return (
        <main className="gap-10 flex flex-col justify-center ">
            {mathSummaries.map((summary) => <Topic key={summary.sumId} {...summary} /> )})
        </main>
    );
}

export default MathPage;