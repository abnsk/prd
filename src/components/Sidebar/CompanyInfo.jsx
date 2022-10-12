import React from "react"

function CompanyInfo(props) {
    return (
        <div className="menu-companyinfo">
            <i>{props.title[0]}</i>
            <span className="menu-companyinfo__title">{props.title}</span>
        </div >
    )
}

export default CompanyInfo