import { useState } from "react";
import { zbmEntity, zbmPropList } from "./entities/entities";
import Table from "./table/Table";


function App() {
  const [needUpdate, setNeedUpdate] = useState(true)
  return (
    <>
      <Table entity={zbmEntity} needUpdate={needUpdate} setNeedUpdate={setNeedUpdate}/>
    </>
  );
}

export default App;
