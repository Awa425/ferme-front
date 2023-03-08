import React from 'react'
import ChartCow from './ChartCow';
import ChartCow1 from './ChartCow1';
import Featured from './Featured';

const HomeFarm = () => {
    
    return (
        <div className="homeFarmPage">
            <Featured />
            <section className="dashbord3">
                <div className="dashbord-center3">
                    <ChartCow />
                    <ChartCow1 />
                </div>
            </section> 
            
           
            
        </div>

    )
}

export default HomeFarm
