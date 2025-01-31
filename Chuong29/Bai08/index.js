function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

// function callback() {
//     console.log("I finally ran!")
// }

// setTimeout(callback, 2000)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function gimmeThePets(number) {
//     return person.hasPet
// }

// const peopleWithPets = people.filter(gimmeThePets)
// console.log(peopleWithPets)

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function filterArray(array, callback) {
    const resultingArray = []
    // Write your filtering logic here
    for (let item of array) {
        const shouldBeIncluded = callback(item)
        if (shouldBeIncluded) {
            resultingArray.push(item)
        }
    }
    return resultingArray
}

/**
 * Thử thách: Sử dụng phương thức filter array của bạn!
 * Dựa trên mảng `people` ở trên, trả về một mảng mới chỉ chứa những người có `hasPet` là true
 * Lưu ý: Nhớ rằng hàm callback của bạn sẽ nhận phần tử cá nhân trong mảng làm tham số
 */

const peopleWithPets = filterArray(people, function(person) {
    return person.hasPet
})

console.log(peopleWithPets)