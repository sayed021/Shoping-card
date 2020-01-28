import React from 'react';

const CheckList=(props)=> {

    function getCheckItem(_items) {
        return(
            _items.map(_item=>{
                return(
                    <li key={_item.id}>
                        <label className="check-group"  >
                            <input type="checkbox" checked={_item.checked}  />
                            <span>{_item.title}</span>
                        </label>
                    </li>
                )
            })
        )
    }

    return (
        <div className="group-wrap">
                {
                    (props.checkitems||[]).map(item => {
                        return (
                            <ul className="group list-unstyled">
                                <li key={item.id}>
                                    <label className="check-group"  >
                                        <input type="checkbox" checked={item.checked}  />
                                        <span>{item.title}</span>
                                    </label>

                                    {
                                        item.children.length > 0 ? (
                                            <ul className="group list-unstyled">
                                                {
                                                    getCheckItem(item.children)
                                                }
                                            </ul>
                                        ) : ('')
                                    } 
                                </li>
                            </ul>
                        )
                    })
                }
            {/* <ul className="group list-unstyled">

                <li>
                    <label className="check-group">
                        <input type="checkbox" checked />
                        <span>IDARE Works</span>
                    </label>
                    <ul className="group list-unstyled">
                        <li>
                            <label className="check-group">
                                <input type="checkbox" checked />
                                <span>Project Management</span>
                            </label>
                        </li>
                        <li>
                            <label className="check-group">
                                <input type="checkbox" checked />
                                <span>Project Management</span>
                            </label>
                        </li>
                        <li>
                            <label className="check-group">
                                <input type="checkbox" />
                                <span>Project Management</span>
                            </label>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul className="group list-unstyled">
                <li>
                    <label className="check-group">
                        <input type="checkbox" checked />
                        <span>Subsea Engineering Design</span>
                    </label>
                    <ul className="group list-unstyled">
                        <li>
                            <label className="check-group">
                                <input type="checkbox" checked />
                                <span>Conceptual Design</span>
                            </label>
                        </li>
                        <li>
                            <label className="check-group">
                                <input type="checkbox" checked />
                                <span>Allowable span</span>
                            </label>
                        </li>
                        <li>
                            <label className="check-group">
                                <input type="checkbox" checked />
                                <span>Up-heaval Buckling calculation</span>
                            </label>
                        </li>
                        <li>
                            <label className="check-group">
                                <input type="checkbox" />
                                <span>On Bottom Roughness</span>
                            </label>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul className="group list-unstyled">
                <li>
                    <label className="check-group">
                        <input type="checkbox"  />
                        <span>Digital twin creator</span>
                    </label>
                </li>
            </ul>

            <ul className="group list-unstyled">
                <li>
                    <label className="check-group">
                        <input type="checkbox"  />
                        <span>Onshore asset integrity</span>
                    </label>
                </li>
            </ul> */}

        </div>
    )
}

export default CheckList;