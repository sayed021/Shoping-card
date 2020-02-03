import React from 'react';

const CheckList=(props)=> {

    return (
        <div className="group-wrap">
                {
                  (props.items||[]).map(item => {
                        return (
                            <ul className="group list-unstyled">
                                <li key={item.id}>
                                    <label className="check-group"  >
                                        <input
                                            type="checkbox"
                                            checked={item.checked}
                                            onClick={e => props.parentChange(item)}
                                        />{" "}
                                        <span>{item.title}{" "}</span>
                                    </label>

                                    {item.subCatagory && item.subCatagory.length > 0 ? (
                                        <ul className="group list-unstyled">
                                            {item.subCatagory.map(cItem => {
                                                return (
                                                    <li key={cItem.id}>

                                                        <label className="check-group" >
                                                            <input
                                                                type="checkbox"
                                                                checked={cItem.checked}
                                                                onClick={e => props.productChange(cItem.id)}
                                                            />{" "}
                                                            <span>{cItem.title} - ( ${cItem.price}){" "}</span>
                                                        </label>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                            ""
                                        )}
                                </li>
                            </ul>
                        )
                    })
                }
        </div>
    )
}

export default CheckList;