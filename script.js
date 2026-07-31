import placesData from "./places.js";

const CountrySelect = document.getElementById("CountrySelect");
const placesGridContainer = document.getElementById("placesGridContainer");

function addPlaces(country) {
    for (let i = 0; i < placesData.length; i++) {

        if (placesData[i]["country"] === country) {

            let countryData = placesData[i]
            placesGridContainer.innerHTML = "";

            for (let j = 0; j < countryData["placesArray"].length; j++) {

                let placeDataDiv = document.createElement("div");
                placeDataDiv.innerHTML = `
                <div class="place-card">
                    <img src="${countryData["placesArray"][j].placeImgUrl}" alt="" class="place-img">
                    <p class="place-name">${countryData["placesArray"][j].placeName}</p>
                    <p class="place-description">${countryData["placesArray"][j].placeDescription}</p>
                </div>`

                placesGridContainer.appendChild(placeDataDiv);
            }
        }

    }
}

function getChange() {
    const country = CountrySelect.value;
    addPlaces(country);
}

CountrySelect.addEventListener("change", getChange);