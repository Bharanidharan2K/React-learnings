import React from "react";

function Home(props) {
    console.log(props)
    return(
        <h1>{props.title}</h1>
    )
}

export default Home;