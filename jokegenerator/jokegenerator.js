// axios.get('https://aqpi.tvmaze.com/search/shows?q=girls')
// .then(res=>{
//     console.log(res.data)
// })
// .catch(e=>{
//     console.log("ERROR!",e)
// })

// const fetchShow = async()=>{
//     try{
//         const res=await axios.get("https://api.tvmaze.com/search/shows?q=girls")
//         console.log(res.data)
//     }catch(e){
//         console.log("ERROR!",e)

//     }
// }
// fetchShow()


const button=document.querySelector('button')
const jokes=document.querySelector('#jokes')

const getDadJoke = async()=>{
    try{
    const config={headers: {Accept:'application/json'}}
    const res=await axios.get('https://icanhazdadjoke.com/',config)
    return res.data.joke;
    }catch(e){
        return "NO JOKES AVAILABLE!!SORRY"
    }
}
const addNewJoke=async()=>{
    const jokeText=await getDadJoke();
//   console.log(jokeText)
    const newLI = document.createElement('li')
    newLI.append(jokeText)
    jokes.append(newLI)

}
button.addEventListener('click',addNewJoke)