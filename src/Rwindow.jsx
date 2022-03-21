import React from 'react'
import Data from './Data'

const Rwindow = () => {
    const refList = React.createRef();
    const SearchRow = (e) => {
        let rowNo = e.target.value;
        if (parseInt(rowNo)) {
            refList.current.scrollToItem(parseInt(rowNo)-1, "start");
        }else{
            refList.current.scrollToItem(0, "start");
        }
    };
  return (
    
        <div className="react-window">
            <div className="header">
                <div className="col-search">
                    <input onChange={SearchRow} placeholder='col search' type="text" />
                </div>
                <h1>React Window</h1>
                <div className="other-search">
                    <input type="text" placeholder='search' />
                </div>
            </div>
            <Data refList={refList}/>
        </div>
    
  )
}

export default Rwindow