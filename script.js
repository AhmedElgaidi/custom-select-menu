const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");

let countries = [
    "Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia", "Egypt",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"
];

const addCountry = selectedCountry => {
    options.innerHTML = "";
    countries.forEach(country => {
        // Add the selected class name to our country target
        let isSelected = country == selectedCountry ? "selected" : "";
        // here this refers to the whole li element
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
        // note: this method inserte texts as HTML into a specific position such as:
        // - "afterbegin"
        // - "afterend"
        // - "beforebegin"
        // - "beforeend"
        // here, we used it for adding li elemetn we created
    });
}
addCountry();

const updateName = selectedLi => {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    // convert default value into the selected country
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries
        .filter(data => {// Select the searched input 
            return data.toLowerCase().includes(searchWord);
        })
        .map(data => {
            let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
            return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
        })
        .join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Not found</p>`;
});

// toggle active class
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));