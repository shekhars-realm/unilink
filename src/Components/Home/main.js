import React from 'react'
import SearchBar from "./SearchBar"
import "./Home.css"

export default function Home() {
    return (
        <div class="home-main">
            <div class="home-searchbar-header">
                <h2 class="home-header-text">
                    UniLink
                </h2>
            </div>
            <SearchBar />
        </div>
    )
}
