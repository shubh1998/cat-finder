import React from 'react'

const CustomTable = ({ heading, tableData }) => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    {
                        heading.map(item => (
                            <th key={item.name} scope="col">{item.name}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {
                                    heading.map(head => {
                                        if (head.type === "text") {
                                            return (
                                                <td key={item[head.value]}>{item[head.value]}</td>
                                            )
                                        }
                                        if (head.type === "button") {
                                            return (
                                                <td key={index + item[head.value]}>
                                                    <button type="button" className="btn btn-primary" onClick={() => head.handleClick(item)}>
                                                        {head.value}
                                                    </button>
                                                </td>
                                            )
                                        }
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default CustomTable