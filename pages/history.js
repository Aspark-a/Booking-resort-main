class History {
    constructor() {}
    render(mainContainer) {
        // Create the first section (search)
const sectionSearch = document.createElement('section');
sectionSearch.id = 'search';

const formSearch = document.createElement('form');

const inputSearch = document.createElement('input');
inputSearch.type = 'text';
inputSearch.placeholder = 'Type your phone';
inputSearch.id = 'search_inp';
formSearch.appendChild(inputSearch);

const buttonSearch = document.createElement('button');
buttonSearch.id = 'search_submit';
buttonSearch.textContent = 'Search';
formSearch.appendChild(buttonSearch);

sectionSearch.appendChild(formSearch);

// Create the second section (table)
const sectionTable = document.createElement('section');
sectionTable.id = 'table';

const noFoundDiv = document.createElement('div');
noFoundDiv.className = 'no_found';

const imgNoFound = document.createElement('img');
imgNoFound.src = 'https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg';
imgNoFound.alt = 'no found data';
noFoundDiv.appendChild(imgNoFound);

const pNoFound = document.createElement('p');
pNoFound.textContent = "You didn't book yet, ";
const anchorNoFound = document.createElement('a');
anchorNoFound.href = '../index.html#book';
anchorNoFound.textContent = 'try now';
pNoFound.appendChild(anchorNoFound);
noFoundDiv.appendChild(pNoFound);

sectionTable.appendChild(noFoundDiv);

// Create the table element
const table = document.createElement('table');
table.className = 'content-table hidden';

// Create thead element
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

// Create header cells
const thDate = document.createElement('th');
thDate.textContent = 'Date';
headerRow.appendChild(thDate);

const thAdults = document.createElement('th');
thAdults.textContent = 'Adults';
headerRow.appendChild(thAdults);

const thChildren = document.createElement('th');
thChildren.textContent = 'Children';
headerRow.appendChild(thChildren);

const thPhone = document.createElement('th');
thPhone.textContent = 'Phone number';
headerRow.appendChild(thPhone);

const thOption = document.createElement('th');
thOption.textContent = 'Option';
headerRow.appendChild(thOption);

// Append the header row to thead
thead.appendChild(headerRow);
table.appendChild(thead);

// Create tbody element
const tbody = document.createElement('tbody');
table.appendChild(tbody);

// Append the table to the second section
sectionTable.appendChild(table);

// Finally, append both sections to the main or body
mainContainer.appendChild(sectionSearch);
mainContainer.appendChild(sectionTable);
    }
}