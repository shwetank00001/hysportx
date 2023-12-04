import React from "react";
const TableHeading = ({columns}) => {
    return(
        <>
            <thead>
                <tr>
                    {columns.map((value, index) => {
                        if (value.isSortable) {
                            return(
                                <th key={index} className={value.className}>{value.label}
                                    <i className="bx bx-sort-up"></i>
                                </th>
                            );
                        } else {
                            return(
                                <th key={index} className={value.className}>{value.label}</th>
                            );
                        }
                    })}
                </tr>
            </thead>
        </>
    );
}
export default TableHeading;