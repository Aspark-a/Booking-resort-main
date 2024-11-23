class Home {
    constructor() {}
    render(mainContainer) {
        // Create the first section (Book)
const sectionBook = document.createElement('section');
sectionBook.id = 'book';

const containerBook = document.createElement('div');
containerBook.className = 'container flex-space';

const textDiv = document.createElement('div');
textDiv.className = 'text';
textDiv.style.width = '100%';

const h1Book = document.createElement('h1');
const spanBook = document.createElement('span');
spanBook.textContent = 'Book';
h1Book.appendChild(spanBook);
h1Book.appendChild(document.createTextNode(' Your Rooms'));
textDiv.appendChild(h1Book);

const formDiv = document.createElement('div');
formDiv.className = 'form';

const form = document.createElement('form');
form.className = 'grid';

const arrivalDateInput = document.createElement('input');
arrivalDateInput.id = 'Araival-Date';
arrivalDateInput.type = 'date';
arrivalDateInput.placeholder = 'Araival Date';
form.appendChild(arrivalDateInput);

const adultsInput = document.createElement('input');
adultsInput.id = 'Adults';
adultsInput.type = 'number';
adultsInput.placeholder = 'Adults';
form.appendChild(adultsInput);

const childrenInput = document.createElement('input');
childrenInput.id = 'Children';
childrenInput.type = 'number';
childrenInput.placeholder = 'Children';
form.appendChild(childrenInput);

const phoneInput = document.createElement('input');
phoneInput.id = 'Phone-number';
phoneInput.type = 'text';
phoneInput.placeholder = 'Phone number';
form.appendChild(phoneInput);

const select = document.createElement('select');
select.name = 'type';
select.id = 'type';

const option1 = document.createElement('option');
option1.value = '3dem';
option1.textContent = '3 days';
select.appendChild(option1);

const option2 = document.createElement('option');
option2.value = '4dem';
option2.textContent = '4 days';
select.appendChild(option2);

const option3 = document.createElement('option');
option3.value = '5dem';
option3.textContent = '5 days';
select.appendChild(option3);

const option4 = document.createElement('option');
option4.value = '6dem';
option4.textContent = '6 days';
select.appendChild(option4);

form.appendChild(select);

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'BOOK';
submitButton.id = 'submit_form';
form.appendChild(submitButton);

formDiv.appendChild(form);
containerBook.appendChild(textDiv);
containerBook.appendChild(formDiv);
sectionBook.appendChild(containerBook);

// Create the second section (About)
const sectionAbout = document.createElement('section');
sectionAbout.id = 'about';

const containerAbout = document.createElement('div');
containerAbout.className = 'container flex';

const leftDiv = document.createElement('div');
leftDiv.className = 'left w-80';

const headingDiv = document.createElement('div');
headingDiv.className = 'heading';

const h1About = document.createElement('h1');
h1About.textContent = 'WELCOME';
headingDiv.appendChild(h1About);

const h2About = document.createElement('h2');
h2About.textContent = 'Phu My Villa';
headingDiv.appendChild(h2About);

leftDiv.appendChild(headingDiv);

const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tempora culpa iusto quia nostrum minima, at id vel obcaecati unde cum ex, illum sed odio eveniet quas rem cupiditate incidunt.';
leftDiv.appendChild(paragraph);

const aboutButton = document.createElement('button');
aboutButton.className = 'primary-btn';
aboutButton.textContent = 'ABOUT US';
leftDiv.appendChild(aboutButton);

const rightDiv = document.createElement('div');
rightDiv.className = 'right';
rightDiv.style.marginLeft = '40px';

const img = document.createElement('img');
img.src = './asset/3.jpg';
img.alt = '';
rightDiv.appendChild(img);

containerAbout.appendChild(leftDiv);
containerAbout.appendChild(rightDiv);
sectionAbout.appendChild(containerAbout);

// Create the third section (Counter)
const sectionCounter = document.createElement('section');
sectionCounter.className = 'counter';

const containerCounter = document.createElement('div');
containerCounter.className = 'container grid-4';

const box1 = document.createElement('div');
box1.className = 'box';
const h1Box1 = document.createElement('h1');
h1Box1.textContent = '140$';
const hrBox1 = document.createElement('hr');
const spanBox1 = document.createElement('span');
spanBox1.textContent = ' 3 đêm';
box1.appendChild(h1Box1);
box1.appendChild(hrBox1);
box1.appendChild(spanBox1);

const box2 = document.createElement('div');
box2.className = 'box';
const h1Box2 = document.createElement('h1');
h1Box2.textContent = '145$';
const hrBox2 = document.createElement('hr');
const spanBox2 = document.createElement('span');
spanBox2.textContent = '4 đêm';
box2.appendChild(h1Box2);
box2.appendChild(hrBox2);
box2.appendChild(spanBox2);

const box3 = document.createElement('div');
box3.className = 'box';
const h1Box3 = document.createElement('h1');
h1Box3.textContent = '175$';
const hrBox3 = document.createElement('hr');
const spanBox3 = document.createElement('span');
spanBox3.textContent = '5 đêm';
box3.appendChild(h1Box3);
box3.appendChild(hrBox3);
box3.appendChild(spanBox3);

const box4 = document.createElement('div');
box4.className = 'box';
const h1Box4 = document.createElement('h1');
h1Box4.textContent = '215$';
const hrBox4 = document.createElement('hr');
const spanBox4 = document.createElement('span');
spanBox4.textContent = '6 đêm';
box4.appendChild(h1Box4);
box4.appendChild(hrBox4);
box4.appendChild(spanBox4);

containerCounter.appendChild(box1);
containerCounter.appendChild(box2);
containerCounter.appendChild(box3);
containerCounter.appendChild(box4);

const bookingDiv = document.createElement('div');
bookingDiv.className = 'booking-div';

const bookingButton = document.createElement('button');
const bookingLink = document.createElement('li');
const anchor = document.createElement('a');
anchor.href = './index.html#book';
anchor.textContent = 'Book now!';
bookingLink.appendChild(anchor);
bookingButton.appendChild(bookingLink);
bookingDiv.appendChild(bookingButton);

sectionCounter.appendChild(containerCounter);
sectionCounter.appendChild(bookingDiv);

// Append all sections to the body or another container
mainContainer.appendChild(sectionBook);
mainContainer.appendChild(sectionAbout);
mainContainer.appendChild(sectionCounter);
    }
}