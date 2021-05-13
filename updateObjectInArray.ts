
export default function updateObjectInArray<ObjectShape>(array: Array<ObjectShape>, key: number, newKeyValue: ObjectShape) {
    let updatedArray: ObjectShape[] = [];
    array.forEach(val => updatedArray.push(Object.assign({}, val)));
    updatedArray[key] = newKeyValue;
    return updatedArray;
}

