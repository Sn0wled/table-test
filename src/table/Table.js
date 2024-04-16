import axios from "axios";
import { useEffect, useState } from "react";
import TBody from "./TBody";
import THead from "./THead";
import "./Table.css"

export default function Table({entity, needUpdate, setNeedUpdate, selected, setSelected}){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sortParam, setSortProp] = useState(entity.propList[0].propParamName)
    const [reverseSort, setReverseSort] = useState(true)

    const sortFunc = reverseSort ? (rd1, rd2) =>  {
        return rd1[sortParam] > rd2[sortParam] ? -1 : 1

    } :  (rd1, rd2) =>  {
        return rd1[sortParam] < rd2[sortParam] ? -1 : 1
    }

    useEffect(() => {
        if (needUpdate){
            getFunc()
        }
    }, [needUpdate])
    if (isLoading){
        return <h2>Загрузка...</h2>
    }
    if (error){
        return <h2>Ошибка: {error.response.data.message}</h2>
    }

    const sortedData = sortData()

    return(
        <table>
            <THead propList={entity.propList} setSortProp={setSortProp} setReverseSort = {setReverseSort} reverseSort={reverseSort} sortPropName={sortParam}/>
            <TBody data={sortedData} entity={entity} selected={selected} setSelected={setSelected}/>
        </table>
    )

    function getFunc(){
        axios.get(entity.url)
        .then(p => p.data)
        .then(data => setData(data))
        .then(() => {
            setIsLoading(false)
            setNeedUpdate(false)
        })
        .catch(error => {
            setError(error)
            setIsLoading(false)
        })
        .finally(() => {
            setTimeout(() => setNeedUpdate(true), 1000)
        })
    }

    function sortData(){
        const newData = [...data]
        newData.sort(sortFunc)
        return newData
    }
}

