export default function TBody({data, entity, selected, setSelected}){
    if (data.length == 0) {
        return <tbody><tr><td>Пусто</td></tr></tbody>
    }
    const rows = data.map((rowData) => {
        const key = getRowKey(rowData)
        return <TRow key={key} entity={entity} rowData={rowData} selected={selected} setSelected={setSelected}/>
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
    function getRowKey(rowData){
        let key = ''
        for (let pkProp of entity.pkPropList){
            key += rowData[pkProp.propParamName]
        }
        return key
    }
}

function TRow({entity, rowData, selected, setSelected}){
    const tdList = entity.propList.map((prop, key) => {
        if (prop.hidden) return null
        return <td key={key}>{rowData[prop.propParamName]}</td>
    })

    const isSelectedClass = compRowData()

    return(
        <tr className={isSelectedClass ? "selected" : null} onClick={handleClick}>{tdList}</tr>
    )

    function compRowData(){
        if (selected == null) return false
        for (let p in rowData){
            if (rowData[p] != selected[p]) return false
        }
        return true
    }

    function handleClick(){
        if (isSelectedClass) setSelected(null)
        else setSelected(rowData)
    }
}