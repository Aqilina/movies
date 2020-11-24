let movies = [
    {
        id: "1",
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        year: "2019",
        rating: "8.6",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: []
    },
    {
        id: "2",
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit ",
        year: "2020",
        rating: "8.8",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [{
            name: "John",
            comment: "So boring, i fall asleep to it and hibernated through whole winter"
        }]
    },
    {
        id: "3",
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker ",
        year: "2019",
        rating: "8.5",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
            {
                name: "Marry",
                comment: "Put on a happy face :)"
            },
            {
                name: "Batman",
                comment: "My parents was not impressed with this"
            },
        ]
    },
    {
        id: "4",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        year: "1972",
        rating: "9.2",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: []
    },
    {
        id: "5",
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: []
    },
    {
        id: "6",
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        year: "1980",
        rating: "8.4",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{
            name: "Jane",
            comment: "Soundtrack is epic"
        }]
    },
]

const reviewCont = document.querySelector('.reviewCont')
const contA = document.querySelector('.contA')
const containerFirst = document.querySelector('.containerFirst')
const containerSecond = document.querySelector('.containerSecond')
const contX = document.querySelector('.contX')
const input = document.querySelector('.input')
const submit = document.querySelector('.submit')

const newCom = document.querySelector('#newCom')
const createBtn = document.querySelector('.createBtn')

const reviewTitle =document.querySelector('#reviewTitle')
const reviewTitleDiv =document.querySelector('#reviewPic')

let chosenMovie
// let currentMovie
let myCom
let inputValue = ""


function createCards(){
    contA.style.display = 'flex'
    contX.style.display = 'none'
    reviewCont.style.display = 'none'

    containerFirst.innerHTML = ""

    movies.map(item => {
        containerFirst.innerHTML += `
    
        <div class="card" id="${item.id}" onclick="chooseMovie(event)">
            <img src="${item.image}" alt="">
            <h4 class="titleName">${item.title}</h4>
            <div>${item.year}</div>
            <div>Rating: ${item.rating}</div>
            <div>Comments: ${item.comments.length}</div>
        </div>
        `
    })
}
createCards()

function chooseMovie(event){
    // console.log(event)

    let id
    !!event.target.id ? id = event.target.id : id = event.path[1].id

    chosenMovie = movies.filter(item => item.id === id)[0]
    create2ndPage()
    // currentMovie = movies.findIndex(item => item.id === id)
    // currentMovie = movies[currentMovie]

    // console.log(chosenMovie)
    // console.log(id)


}


function create2ndPage() {
    contA.style.display = 'none'
    contX.style.display = 'flex'
    reviewCont.style.display = 'none'


    // console.log(chosenMovie)
    containerSecond.innerHTML = ''

    containerSecond.innerHTML += `
        
        <div class="movieInfoCont">
            <div class="movieInfoBox b-right">
                <button class="backBtn" onclick="backToMovies()">BACK</button>
                <img class="movieImg" src="${chosenMovie.image}" alt="">
            </div>

            <div class="movieInfoBox">
                <h3>${chosenMovie.title}</h3>
                <div class="description">${chosenMovie.description}</div>
            </div>
        </div>
        <h3 class="titleComm">COMMENTS</h3>
    `
    createComments()
}

function backToMovies(){
    contA.style.display = 'flex'
    contX.style.display = 'none'
    reviewCont.style.display = 'none'
}

function createComments(){

    // console.log(chosenMovie.comments[0].name)

    chosenMovie.comments.map((item, index) => {
        let comments = document.createElement('div')
        comments.classList.add('comments')

        let commentBox1 = document.createElement('div')
        commentBox1.classList.add('commentBox1')
        commentBox1.setAttribute('id', index)

        let commentBoxSmall = document.createElement('div')
        commentBoxSmall.classList.add('commentBoxSmall')

        let namePart = document.createElement('div')
        namePart.classList.add('namePart')
        namePart.innerText = item.name

        let commentPart = document.createElement('div')
        commentPart.classList.add('commentPart')
        commentPart.innerText = item.comment

        let closeBtn = document.createElement('button')
        closeBtn.classList.add('closeBtn')
        closeBtn.innerText = 'X'
        closeBtn.addEventListener('click', deleteCom)

        containerSecond.appendChild(comments)
        comments.appendChild(commentBox1)
        commentBox1.appendChild(commentBoxSmall)
        commentBoxSmall.appendChild(namePart)
        commentBoxSmall.appendChild(commentPart)
        commentBox1.appendChild(closeBtn)
        // console.log(chosenMovie.id)
        // console.log(commentBox1.id)
        // console.log(closeBtn.id)
        //
    })

}

function createNewCom(event){

        inputValue = event.target.value
        console.log(inputValue)
        myCom = {
            name: 'Akve',
            comment: inputValue
        }
}

function submitCom(){

    chosenMovie.comments.push(myCom)
    // console.log(event)
    // console.log(chosenMovie)
    newCom.innerText =  chosenMovie.comments
    newCom.innerText = ""
    inputValue = ""
    create2ndPage()

}

function deleteCom(event){

    let comId = event.path[1].id
    // console.log(chosenMovie.comments)
    // let test = chosenMovie.comments.filter(item => item.id !== comId)
    delete chosenMovie.comments[comId]
    create2ndPage()

    // chosenMovie.comments[comId]
    // console.log(event)
}

function createReview(){
    contA.style.display = 'none'
    contX.style.display = 'none'
    reviewCont.style.display = 'flex'

}


input.addEventListener('input', createNewCom)
submit.addEventListener('click', submitCom)
createBtn.addEventListener('click', createReview)