// 
// 
//
// Pagination
// 
// 
// 

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 20;
let currentPage = 1;
let listItems = paginatedList.querySelectorAll(".list-item");
let pageCount = Math.ceil(listItems.length / paginationLimit);

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = (pageCount) => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = (pageCount) => {
  paginationNumbers.innerHTML = "";
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum, pageCount, listItems) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus(pageCount);

  const startIndex = (pageNum - 1) * paginationLimit;
  const endIndex = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

const handlePrevButtonClick = (pageCount, listItems) => {
  setCurrentPage(currentPage - 1, pageCount, listItems);
}

const handleNextButtonClick = (pageCount, listItems) => {
  setCurrentPage(currentPage + 1, pageCount, listItems);
  console.log("NextButt/CurrentPage: ", currentPage);
}

const handlePaginationNumberClick = (pageIndex, pageCount, listItems) => {
  setCurrentPage(pageIndex, pageCount, listItems);
  console.log("PaginationNumber/pageIndex: ", pageIndex);

}

const paginate = () => {
  listItems = paginatedList.querySelectorAll(".list-item");
  pageCount = Math.ceil(listItems.length / paginationLimit);

  getPaginationNumbers(pageCount);
  setCurrentPage(1, pageCount, listItems);

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex) {
      button.addEventListener("click", () => handlePaginationNumberClick(pageIndex, pageCount, listItems));
    }
  });
};

window.addEventListener("load", () => {
  prevButton.addEventListener("click", () => handlePrevButtonClick(pageCount, listItems));
  nextButton.addEventListener("click", () => handleNextButtonClick(pageCount, listItems));

  paginate();
});

// 
// 
//
// Search and Filter
// 
// 
// 

const searchInput = document.getElementById("search-input");
const filterSelect = document.getElementById("filter-select");
const searchButton = document.getElementById("search-button");
const resetButton = document.getElementById("reset-button");

// Get unique values ​​of professions
const professions = Array.from(new Set(doctorsData.map(doctor => doctor.speciality)));

// Add options to the drop-down list
professions.forEach(profession => {
  const option = document.createElement("option");
  option.value = profession;
  option.textContent = profession;
  filterSelect.appendChild(option);
});

// Update the list of doctors on the page
const renderDoctors = (doctors) => {
  paginatedList.innerHTML = ""; // Clearing the current list before updating

  doctors.forEach(doctor => {
    // Create HTML elements
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');

    const img = document.createElement('img');
    img.src = 'src/doctor.svg';
    img.alt = 'Doctor Icon';
    img.width = 100;
    img.height = 100;

    const fullName = document.createElement('p');
    fullName.textContent = doctor.fullName;

    const speciality = document.createElement('strong');
    speciality.textContent = doctor.speciality;

    const addressCabinet = document.createElement('p');
    addressCabinet.textContent = `${doctor.address}, кабінет ${doctor.cabinet}`;

    // Add the created elements to the parent element
    listItem.appendChild(img);
    listItem.appendChild(fullName);
    listItem.appendChild(speciality);
    listItem.appendChild(addressCabinet);

    paginatedList.appendChild(listItem); // Add the created elements to the page
  });
};

searchButton.addEventListener("click", () => {
  const searchValue = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value.toLowerCase();

  const filteredDoctors = doctorsData.filter(doctor => {
    const fullName = doctor.fullName.toLowerCase();
    const speciality = doctor.speciality.toLowerCase();

    const matchName = fullName.includes(searchValue);
    const matchSpeciality = filterValue === "" || speciality.includes(filterValue);

    return matchName && matchSpeciality;
  });

  renderDoctors(filteredDoctors);
  paginate();
});

resetButton.addEventListener("click", () => {
  // Clear the value of the filter drop-down list
  filterSelect.value = "";
  searchInput.value = "";

  renderDoctors(doctorsData);
  paginate();
});