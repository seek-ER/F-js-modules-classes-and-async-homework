// export const getPoetry = () =>{
//     return fetch("https://v1.jinrishici.com/all.json")
//     .then(
//         response => response.json()
//     ).then(
//         ({content, origin, author}) => [origin, author, content]
//     ).catch(error => console.log(error))
// }

export const getPoetry = async() => {
    try {
        const response = await fetch("https://v1.jinrishici.com/all.json")
        const {content, origin, author} = await response.json()
        return [origin, author, content]
    } catch (error) {
        console.log(error)
    }
}