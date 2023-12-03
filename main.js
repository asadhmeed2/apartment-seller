const apartmentsSource = $("#apartment-template").html();

const apartmentTemplate = Handlebars.compile(apartmentsSource);

const results = $("#results") 

const renderApts = function (apartments) {
    results.empty()
    console.log(apartments) //array of apartments to render
    
    const newHtml = apartmentTemplate({apartments,thereIsResults:!apartments.length})
    results.append(newHtml)
}

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

renderApts(apartments) //renders apartments when page loads