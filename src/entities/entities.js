import { Entity, Prop } from "./entityClass";


export const zbmEntity = new Entity(
    [new Prop("ИД", 'id')],
    [new Prop("Название", 'name')],
    "/zbm"
)

export const buildingEntity = new Entity(
    [
        new Prop('idZBM', 'zbmId'),
        new Prop("Номер здания", "number")
    ],
    [
        new Prop("Название ЗБМ", 'zbmName')
    ],
    "/building"
)