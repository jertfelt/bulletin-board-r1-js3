import {BulletinBoard} from "./components/BulletinBoard";
import ReactPost from "./components/ReactPost";

function App() {
  const item = BulletinBoard[0]
  console.log(item)
  return (
    <div className="App">
     <ReactPost 
     id ="{BulletinBoard.id}">

     </ReactPost>
    </div>
  );
}

export default App;
