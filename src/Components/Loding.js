import React from "react";
const Loding = () => {
    return (
        <div className="absolute bg-black h-100 w-100 d-flex justify-center align-items-center text-center">
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loding;