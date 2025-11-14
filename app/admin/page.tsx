import { Textarea } from "@/components/ui/textarea";
import SelectDemo from "./SelectTopic";
import { TextareaWithButton } from "./TextArea";
import TextareaAutosize from 'react-textarea-autosize'

function AdminPage() {
  return (
    <main className="flex flex-col justify-center items-center">
      {/* Adicionar resumo das matérias */}

      <section className="h-screen">
        <form className="mt-4 flex flex-col gap-2" action="">
          <div className="flex text-white items-center gap-2 rounded-md">
            <h2 className="border rounded-md p-[5px]">Adicionar novo resumo</h2>
            <SelectDemo />
          </div>
          <article className="flex flex-col gap-2">
            <Textarea placeholder="Tópico" className="placeholder:italic text-white" />
          
            <TextareaWithButton />
          </article>
        </form>
      </section>
      <section></section>
      <section></section>
      <section></section>

      {/* Adicionar Informação na página principal */}
    </main>
  );
}

export default AdminPage;
