import React, {useEffect, useState} from 'react';
import CardTotal from '../component/cardtotal';
import CheckList from '../component/checklist';

const Checkout = (props) => {

    const [checkList,setCheckList] = useState([]);

    useEffect(()=>{
        setCheckList([
            {
                id:1,
                name:'check1',
                title: 'IDARE Works',
                checked: true,
                children:[
                    {
                        id: 2,
                        name: 'check2',
                        title: 'Project Management',
                        checked: true,
                        children: []
                    },
                    {
                        id: 3,
                        name: 'check3',
                        title: 'Project Management',
                        checked: true,
                        children: []
                    },
                    {
                        id: 4,
                        name: 'check4',
                        title: 'Project Management',
                        checked: false,
                        children: []
                    }
                ]
            },
            {
                id:5,
                name:'check5',
                title: 'Subsea Engineering Design',
                checked: true,
                children:[
                    {
                        id: 6,
                        name: 'check6',
                        title: 'Conceptual Design',
                        checked: true,
                        children: []
                    },
                    {
                        id: 7,
                        name: 'check7',
                        title: 'Allowable Span',
                        checked: true,
                        children: []
                    },
                    {
                        id: 8,
                        name: 'check8',
                        title: 'Up-Heaval Buckling Calculation',
                        checked: true,
                        children: []
                    },
                    {
                        id: 9,
                        name: 'check9',
                        title: 'On Bottom Roughness',
                        checked: false,
                        children: []
                    }
                ]
            },
            {
                id: 10,
                name:'check10',
                title: 'Digital Twin Creator',
                checked: true,
                children:[]
            },
            {
                id: 11,
                name:'check11',
                title: 'Onshore Asset Integrity',
                checked: false,
                children:[]
            },
        ])
    },[]);


    // const findItem = (array, id) => {
    //     var result;
    //     array.some(o => result = o.id === id ? o : findItem(o.children || [], id));
    //     return result;
    // };

    const checkChange =(i)=> {

        // findItem(checkList, i)



        setCheckList(
            checkList.map((item) => {
                if (item.id === i) {
                    item.checked = !item.checked;
                } else {
                    if(item.children.length > 0) {

                        item.children.map((c_item) => {

                            if (c_item.id === i) {
                                item.checked = !item.checked;
                            }

                        });
                    }
                }
          })
        );
      };

    return (
        <div className="wrap">
            <div className="center box-shadow">
                <div className="page-content checkout-page">
                    <h2 className="page-heading">Simple checkout page</h2>
                    <div className="checklist">
                        <CheckList checkitems={checkList} checkChange={checkChange} />
                    </div>
                    <div className="check-summary">
                        <CardTotal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;