import { useState } from "react";
import { buildingEntity, zbmEntity, zbmPropList } from "./entities/entities";
import Table from "./table/Table";


function App() {
  const [needUpdate, setNeedUpdate] = useState(true)
  const [selected, setSelected] = useState(null)
  return (
    <>
      <Table entity={buildingEntity} needUpdate={needUpdate} setNeedUpdate={setNeedUpdate} selected={selected} setSelected={setSelected}/>
    </>
  );
}

export default App;
