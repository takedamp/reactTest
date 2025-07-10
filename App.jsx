import StartRating from "./StarRating"
import CheckBox from "./CheckBox"
import KeyDownEvent from "./KeyDownEvent"
import UserData from "./UserData"
import GitHubUser from "./DataPromise";
import Faker from "./faker";
import aaa from "./InputHtml"
import reactBook from "./71UAHWUafkS._AC_UL320_.jpg"
import reactBook2 from "./71qcie8Z-SL._AC_UL320_.jpg"
import InputHtml from "./InputHtml"
import GitHub from './index';
import Fet from './fet';
import Graph from "./graph";


function App() {
  const name = "moonhighway"
  const file = ["learning-react", "test"]
  return (
    <>
      {/* <img src={reactBook} className="img"/>
      <div>
        <StartRating />
      </div>
      <img src={reactBook2} className="img"/>
      <div>
        <StartRating />
      </div> */}
      {/* <div>
        <CheckBox />
      </div>
      <div>
        <UserData />
      </div> */}
      {/* <div>
        <InputHtml />
      </div> */}
      {/* <div>
        <GitHubUser />
      </div> */}
      {/* <div>
        <Faker/>
      </div> */}
      {/* <div>
        <Fet repositories={file} login={name}/>
      </div> */}
      <div>
        <Graph/>
      </div>
      {/* <div>
        <GitHub />
      </div> */}
    </>
  )
}

export default App;


