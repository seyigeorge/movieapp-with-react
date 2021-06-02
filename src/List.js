
import React from 'react';
import { Select } from "@chakra-ui/react"
import { Link } from 'react-router-dom';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', opening_crawl: ''};
    }
    
    handleChange = (event) => {
        this.setState({value: event.target.value, opening_crawl: event.target.value[0].opening_crawl});
    }
    
    render () {
        let shoes = this.props.state.shoes;
        let optionItems = shoes.map((planet) =>
                <option key={planet}>{planet.title}</option>                
        );
        let marqText = shoes.map((planet) =>
            <option key={planet.opening_crawl}>{planet.opening_crawl}</option>
        );
        console.log(marqText);
        return (
         <div className= "movieSection">
             <Select placeholder="Select Movie" value={this.state.value} onChange={this.handleChange}>
                 {optionItems}            
             </Select>      
             <marquee width="500px" direction="right" height="50px" color='white'>
                {marqText}
             </marquee>  
         </div>
        )
    }
}

export default List;
