// Varaibles/constant declaration
const btnEl = document.getElementById("btn_view");
const listLenght = 21;
const listEL = document.querySelector(`.list`);
let i = 1;

// on button click show list of checked items
btnEl.addEventListener("click", function () {
    let i = 1;
    const listItems = [];

    // Create array with checked items
    while (i <= listLenght) {
        let itemChecked = document.getElementById(`item${i}`).checked;
        console.log(itemChecked);
        if (itemChecked) {
            const item = document.getElementById(`item${i}`).value;
            listItems.push(item);
        }
        i++;
    }

    // reset the items displyied 
    listEL.innerHTML = ``;

    // show checked items 
    let k = 0;
    console.log(listItems);
    if (listItems.length === 0) {
        listEL.innerHTML += `<h5>non hai selezionato alcun elemento</5>`
    } else {
        while (k < listItems.length) {
            listEL.innerHTML += `<h5>-  ${listItems[k]}</h5>`;
            k++;
        }
    }

    document.querySelector(`.list_section`).classList.remove(`d-none`);
})


