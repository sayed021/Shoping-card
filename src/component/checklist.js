import React from 'react';

const CheckList=(props)=> {
    return (
        <div className="group-wrap">
            <ul className="group list-unstyled">
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
            </ul>

        </div>
    )
}

export default CheckList;