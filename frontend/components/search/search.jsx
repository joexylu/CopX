import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e){
        this.props.getResults(e.target.value)
        if (e.target.value === "") {
            this.props.clearSearch()
        }
    }

    componentDidMount() {
        this.props.clearSearch()
        window.scrollTo(0, 0)
    }

    render() {
        const searchResults = this.props.searches.map(sneaker => (
            <div>
                {sneaker.name}
            </div>
        ))
        return (
            <div className="search-page">
                Here is Search
                <input onChange={this.handleSearch} type="text" placeholder="Search for brand, color, etc" id="search-bar-indexshow"/>
                {searchResults}
            </div>
        )
    }
}

export default Search