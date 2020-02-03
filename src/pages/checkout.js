import React, {useEffect, useState} from 'react';
import CardTotal from '../component/cardtotal';
import CheckList from '../component/checklist';

const Checkout = (props) => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
        setItems([
            {
                id:1,
                name:'check1',
                title: 'Cetagory 1',
                checked: false,
                subCatagory:[
                    {
                        id: 2,
                        name: 'check2',
                        title: 'Product 1',
                        checked: true,
                        price: 100
                    },
                    {
                        id: 3,
                        name: 'check3',
                        title: 'Product 3',
                        checked: true,
                        price: 500
                    },
                    {
                        id: 4,
                        name: 'check4',
                        title: 'Product 9',
                        checked: false,
                        price: 300
                    }
                ]
            },
            {
                id:5,
                name:'Cetagory 2',
                title: 'Cetagory 2',
                checked: false,
                subCatagory:[
                    {
                        id: 6,
                        name: 'check6',
                        title: 'Conceptual Design',
                        checked: true,
                        price: 50.69
                    },
                    {
                        id: 7,
                        name: 'check7',
                        title: 'Allowable Span',
                        checked: true,
                        price: 10.99
                    },
                    {
                        id: 8,
                        name: 'check8',
                        title: 'Up-Heaval Buckling Calculation',
                        checked: true,
                        price: 1000.10
                    },
                    {
                        id: 9,
                        name: 'check9',
                        title: 'On Bottom Roughness',
                        checked: false,
                        price: 150
                    }
                ]
            },
            {
                id: 10,
                name:'Cetagory 3',
                title: 'Cetagory 3',
                checked: false,
                subCatagory:[]
            },
            {
                id: 11,
                name:'Cetagory 4',
                title: 'Cetagory 69',
                checked: false,
                subCatagory:[]
            },
        ])
    },[]);

    const checkChangeHandaller = async id => {
        let newItems = (items || []).map(item => {
            if (item.id === id) {
                item.checked = !item.checked;
            }
            if (item.subCatagory && item.subCatagory.length > 0) {
                (item.subCatagory || []).map(nItem => {
                    if (nItem.id === id) {
                        nItem.checked = !nItem.checked;
                    }
                    return nItem;
                });
            }

            if (item.subCatagory && item.subCatagory.length > 0) {
                let count = 0;

                item.subCatagory.map(itm => {
                    if (itm.checked) {
                        count += 1;
                    }
                    return itm;
                });

                if (item.subCatagory.length === count) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            }
            return item;
        });
        setItems(newItems);
    };

    const parentChange = item => {
        let newItem = (items || []).map(pItem => {
            if (item.id === pItem.id) {
                item.checked = !item.checked;
                (pItem.subCatagory || []).map(cItem => {
                    cItem.checked = item.checked;
                    return cItem;
                });
            }
            return pItem;
        });
        setItems(newItem);
    };

    const getTotal = () => {
        let totalAmount = 0;

        (items || []).map(pItem => {
            (pItem.subCatagory || []).map(nItem => {
                totalAmount += nItem.checked ? nItem.price : 0;
                return nItem;
            });
            return pItem;
        });

        return totalAmount;
    };

    return (
        <div className="wrap">
            <div className="center box-shadow">
                <div className="page-content checkout-page">
                    <h2 className="page-heading">Simple checkout page</h2>
                    <div className="checklist">

                        <CheckList 
                            items={items} 
                            checkChange={parentChange} 
                            productChange={checkChangeHandaller} 
                            parentChange={parentChange}
                           
                        />

                    </div>
                    <div className="check-summary">
                        <CardTotal subTotal={getTotal()} tax={15} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;