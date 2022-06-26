import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { Evento } from "./pages/Evento";


interface Lesson {
  id: string;
  title: string;
}
function App() {
  return (
   <div>
      <Evento/>
   </div>
  );
}

export default App;
