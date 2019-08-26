// function
import * as Types from './actionTypes'

export function add(count) {
    return { type :  Types.INCREATEMENT, count : count}
}

export function todo(content) {
    return { type : Types.ADD_TODO, text:content}
}