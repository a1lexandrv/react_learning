import React from "react";
import PropTypes from "prop-types";

const Search = ({ type, value, placeholder, onChange }) => {
    return (
        <>
            <div className="input-group mb-3">
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                ></input>
            </div>
        </>
    );
};

Search.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default Search;
