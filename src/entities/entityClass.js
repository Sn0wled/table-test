export class Prop {
    constructor(propName, propParamName, hidden = false, editor = null){
        this.propName = propName
        this.propParamName = propParamName
        this.hidden = hidden
        this.editor = editor
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