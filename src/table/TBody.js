export default function TBody({data, entity, sortPropName}){
    const rows = data.map((rowData) => {
        const key = getRowKey(rowData)
        return <TRow key={key} entity={entity} rowData={rowData}/>
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

function TRow({entity, rowData}){
    const paramList = entity.propList.map(prop => rowData[prop.propParamName])
    const tdList = paramList.map((param, key) => <td key={key}>{param}</td>)
    return(
        <tr>{tdList}</tr>
    )
}