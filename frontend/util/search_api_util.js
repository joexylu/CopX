export const getSearchResults = (searchString) => (
    $.ajax({
        url: `/api/search/${searchString}`,
        method: "GET"
    })
)