import { Entity, Prop } from "./entityClass";


export const zbmEntity = new Entity(
    [new Prop("ИД", 'id', true)],
    [new Prop("Название", 'name')],
    "/zbm"
)