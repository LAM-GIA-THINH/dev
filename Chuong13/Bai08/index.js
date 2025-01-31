import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase,
    ref,
    push,
    onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
onValue(referenceInDB, function(snapshot) {
// Thử thách: Tạo một const gọi là 'leads' là một mảng chứa các giá trị bên trong đối tượng snapshotValues
    const snapshotValues = snapshot.val()
    const leads = Object.values(snapshotValues)
    //Sử dụng hàm render và leads để render ra leads
    render(leads)
})
deleteBtn.addEventListener("dblclick", function() {

})

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value.trim();
    if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
        inputValue = `https://${inputValue}`;
    }
    push(referenceInDB, inputEl.value)
    inputEl.value = ""

})