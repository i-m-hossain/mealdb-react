import React from 'react';

const Searchbar = (props) => {
    return (
        <div className="ps-5 pe-5 pt-4 pb-3 bg-secondary">
            <div className="input-group mb-3">
                <input id="input" type="text" className="form-control" placeholder="Search food" aria-label="Search food" aria-describedby="button-addon2" onChange={props.handleSearch}/>
                <button className="btn btn-danger" type="button" id="button-addon2" >Search</button>
            </div>
        </div>
    );
};

export default Searchbar;