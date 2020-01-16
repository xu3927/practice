import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import {Reactables, Header} from 'gigatables-react'

let data = { "rows": [
     { "GT_RowId": 178, "title": "Test 178st row", "id": 178, "desc": "Lorem Ipsum is simply dummy 7241 text of the printing and typesetting", "info": "some info some info some info some info", "date": "22:00:22 10:05:2018", "field1": 86, "field2": 1412, "field3": 12523 }, { "GT_RowId": 91, "title": "Test 91st row", "id": 91, "desc": "Lorem Ipsum is simply dummy 8606 text of the printing and typesetting", "info": "some info some info some info some info", "date": "22:01:49 10:05:2018", "field1": 23, "field2": 1325, "field3": 12436 }, { "GT_RowId": 382, "title": "Test 382st row", "id": 382, "desc": "Lorem Ipsum is simply dummy 2673 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:56:58 10:05:2018", "field1": 97, "field2": 1616, "field3": 12727 }, { "GT_RowId": 1017, "title": "Test 1017st row", "id": 1017, "desc": "Lorem Ipsum is simply dummy 2449 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:46:23 10:05:2018", "field1": 79, "field2": 2251, "field3": 13362 }, { "GT_RowId": 584, "title": "Test 584st row", "id": 584, "desc": "Lorem Ipsum is simply dummy 7623 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:53:36 10:05:2018", "field1": 52, "field2": 1818, "field3": 12929 }, { "GT_RowId": 720, "title": "Test 720st row", "id": 720, "desc": "Lorem Ipsum is simply dummy 9744 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:51:20 10:05:2018", "field1": 35, "field2": 1954, "field3": 13065 }, { "GT_RowId": 529, "title": "Test 529st row", "id": 529, "desc": "Lorem Ipsum is simply dummy 5418 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:54:31 10:05:2018", "field1": 69, "field2": 1763, "field3": 12874 }, { "GT_RowId": 226, "title": "Test 226st row", "id": 226, "desc": "Lorem Ipsum is simply dummy 5073 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:59:34 10:05:2018", "field1": 100, "field2": 1460, "field3": 12571 }, { "GT_RowId": 135, "title": "Test 135st row", "id": 135, "desc": "Lorem Ipsum is simply dummy 605 text of the printing and typesetting", "info": "some info some info some info some info", "date": "22:01:05 10:05:2018", "field1": 76, "field2": 1369, "field3": 12480 }, { "GT_RowId": 1168, "title": "Test 1168st row", "id": 1168, "desc": "Lorem Ipsum is simply dummy 5024 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:43:52 10:05:2018", "field1": 17, "field2": 2402, "field3": 13513 }, { "GT_RowId": 438, "title": "Test 438st row", "id": 438, "desc": "Lorem Ipsum is simply dummy 8040 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:56:02 10:05:2018", "field1": 77, "field2": 1672, "field3": 12783 }, { "GT_RowId": 598, "title": "Test 598st row", "id": 598, "desc": "Lorem Ipsum is simply dummy 4052 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:53:22 10:05:2018", "field1": 100, "field2": 1832, "field3": 12943 }, { "GT_RowId": 721, "title": "Test 721st row", "id": 721, "desc": "Lorem Ipsum is simply dummy 3531 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:51:19 10:05:2018", "field1": 76, "field2": 1955, "field3": 13066 }, { "GT_RowId": 207, "title": "Test 207st row", "id": 207, "desc": "Lorem Ipsum is simply dummy 1129 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:59:53 10:05:2018", "field1": 21, "field2": 1441, "field3": 12552 }, { "GT_RowId": 1233, "title": "Test 1233st row", "id": 1233, "desc": "Lorem Ipsum is simply dummy 7477 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:42:47 10:05:2018", "field1": 28, "field2": 2467, "field3": 13578 }, { "GT_RowId": 908, "title": "Test 908st row", "id": 908, "desc": "Lorem Ipsum is simply dummy 4719 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:48:12 10:05:2018", "field1": 51, "field2": 2142, "field3": 13253 }, { "GT_RowId": 964, "title": "Test 964st row", "id": 964, "desc": "Lorem Ipsum is simply dummy 8062 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:47:16 10:05:2018", "field1": 55, "field2": 2198, "field3": 13309 }, { "GT_RowId": 173, "title": "Test 173st row", "id": 173, "desc": "Lorem Ipsum is simply dummy 2863 text of the printing and typesetting", "info": "some info some info some info some info", "date": "22:00:27 10:05:2018", "field1": 23, "field2": 1407, "field3": 12518 }, { "GT_RowId": 476, "title": "Test 476st row", "id": 476, "desc": "Lorem Ipsum is simply dummy 1133 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:55:24 10:05:2018", "field1": 26, "field2": 1710, "field3": 12821 }, { "GT_RowId": 1064, "title": "Test 1064st row", "id": 1064, "desc": "Lorem Ipsum is simply dummy 584 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:45:36 10:05:2018", "field1": 16, "field2": 2298, "field3": 13409 }, { "GT_RowId": 653, "title": "Test 653st row", "id": 653, "desc": "Lorem Ipsum is simply dummy 5813 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:52:27 10:05:2018", "field1": 59, "field2": 1887, "field3": 12998 }, { "GT_RowId": 446, "title": "Test 446st row", "id": 446, "desc": "Lorem Ipsum is simply dummy 1810 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:55:54 10:05:2018", "field1": 50, "field2": 1680, "field3": 12791 }, { "GT_RowId": 1094, "title": "Test 1094st row", "id": 1094, "desc": "Lorem Ipsum is simply dummy 1716 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:45:06 10:05:2018", "field1": 21, "field2": 2328, "field3": 13439 }, { "GT_RowId": 245, "title": "Test 245st row", "id": 245, "desc": "Lorem Ipsum is simply dummy 2492 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:59:15 10:05:2018", "field1": 29, "field2": 1479, "field3": 12590 }, { "GT_RowId": 528, "title": "Test 528st row", "id": 528, "desc": "Lorem Ipsum is simply dummy 7054 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:54:32 10:05:2018", "field1": 75, "field2": 1762, "field3": 12873 }, { "GT_RowId": 897, "title": "Test 897st row", "id": 897, "desc": "Lorem Ipsum is simply dummy 3833 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:48:23 10:05:2018", "field1": 94, "field2": 2131, "field3": 13242 }, { "GT_RowId": 67, "title": "Test 67st row", "id": 67, "desc": "Lorem Ipsum is simply dummy 7878 text of the printing and typesetting", "info": "some info some info some info some info", "date": "22:02:13 10:05:2018", "field1": 99, "field2": 1301, "field3": 12412 }, { "GT_RowId": 328, "title": "Test 328st row", "id": 328, "desc": "Lorem Ipsum is simply dummy 2288 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:57:52 10:05:2018", "field1": 23, "field2": 1562, "field3": 12673 }, { "GT_RowId": 944, "title": "Test 944st row", "id": 944, "desc": "Lorem Ipsum is simply dummy 1667 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:47:36 10:05:2018", "field1": 71, "field2": 2178, "field3": 13289 }, { "GT_RowId": 713, "title": "Test 713st row", "id": 713, "desc": "Lorem Ipsum is simply dummy 292 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:51:27 10:05:2018", "field1": 50, "field2": 1947, "field3": 13058 }, { "GT_RowId": 1152, "title": "Test 1152st row", "id": 1152, "desc": "Lorem Ipsum is simply dummy 3509 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:44:08 10:05:2018", "field1": 67, "field2": 2386, "field3": 13497 }, { "GT_RowId": 1160, "title": "Test 1160st row", "id": 1160, "desc": "Lorem Ipsum is simply dummy 5654 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:44:00 10:05:2018", "field1": 41, "field2": 2394, "field3": 13505 }, { "GT_RowId": 302, "title": "Test 302st row", "id": 302, "desc": "Lorem Ipsum is simply dummy 916 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:58:18 10:05:2018", "field1": 46, "field2": 1536, "field3": 12647 }, { "GT_RowId": 168, "title": "Test 168st row", "id": 168, "desc": "Lorem Ipsum is simply dummy 801 text of the printing and typesetting", "info": "some info some info some info some info", "date": "22:00:32 10:05:2018", "field1": 95, "field2": 1402, "field3": 12513 }, { "GT_RowId": 1041, "title": "Test 1041st row", "id": 1041, "desc": "Lorem Ipsum is simply dummy 1512 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:45:59 10:05:2018", "field1": 13, "field2": 2275, "field3": 13386 }, { "GT_RowId": 453, "title": "Test 453st row", "id": 453, "desc": "Lorem Ipsum is simply dummy 402 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:55:47 10:05:2018", "field1": 50, "field2": 1687, "field3": 12798 }, { "GT_RowId": 855, "title": "Test 855st row", "id": 855, "desc": "Lorem Ipsum is simply dummy 9305 text of the printing and typesetting", "info": "some info some info some info some info", "date": "21:49:05 10:05:2018", "field1": 42, "field2": 2089, "field3": 13200 }]}

let settings = {
    // struct: {// all in
    //     search: ['top', 'bottom'],
    //     rowsSelector: ['asc', 'top', 'bottom'],
    //     pagination: ['bottom']
    // },
    // ajax: 'http://localhost:3000/tableData.js',
    // or u can set local json data
    // data: localData, 
    columns: [
        {data: "id"},
        {data: "desc"},
        {data: "title"},
        {data: "date"},       
        {data: "info"},
        {data:"field1"},
        {data:"field2"},
        {data:"field3", visible: false}        
    ],
    data: {
        "rows": [
            {
                "id": 1,
                "desc": "22",
                "title":"t22",
                "date":"date1",
                "info": "info2",
                "field1": "f1",
                "field2": "f2",
                "field3": "f3",
            }
        ]
    }
};


class TableTest extends React.Component {
    render() {
        return (<div className="index">
            <h3>Table Test</h3>
            <div>
            <Reactables settings={settings}>
                <Header data="id">ID</Header>
                <Header data="title">Name</Header>
                <Header data="desc">Description</Header>
                <Header data="date">Date</Header>
                <Header data="info">Info</Header>
                <Header data="field2">Field2</Header>
                <Header data="field1">Field1</Header>
                <Header data="field3">Field3 invisible</Header>
                <Header>Field3 invisible</Header>
            </Reactables>
            </div>
        </div>)
    }
}

export default TableTest
