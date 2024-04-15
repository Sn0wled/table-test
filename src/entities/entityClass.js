export class Prop {
    constructor(propName, propParamName, disabled = false){
        this.propName = propName
        this.propParamName = propParamName
        this.disabled = disabled
    }
}

export class Entity {
    constructor(pkPropList, otherPropList, url){
        this.pkPropList = pkPropList.slice()
        this.propList = []
        this.propList.push(...pkPropList)
        this.propList.push(...otherPropList)
        this.url = url
    }
}