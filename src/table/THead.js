export default function THead({propList, setSortProp, sortPropName, setReverseSort, reverseSort}){
    const headersTd = propList.map((prop, key) => <th onClick={() => handleClick(prop)} key={key}>{prop.propName}</th>)
    const headersTr = <tr>{headersTd}</tr>
    return(
        <thead>{headersTr}</thead>
    )

    function handleClick(prop){
        if (sortPropName == prop.propParamName) {
            setReverseSort(!reverseSort)
        } else {
            setReverseSort(false)
            setSortProp(prop.propParamName)
        }
    }
}