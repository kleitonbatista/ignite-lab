import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Evento() {
  const { slug } = useParams<{ slug: string }>();
  console.log('slug')
  console.log(slug)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
      <Video lessonSlug={slug! == ""  ? "aula-1-o-inicio-da-especializacao-em-reactjs" :  slug!} /> 
        {/* {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />} */}
        <Sidebar />
      </main>
    </div>
  );
}
