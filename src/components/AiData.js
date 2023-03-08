import React from 'react'

const AiData = () => {
    return (
        <div className="homeFarmPage">
            <h2>AI DATA</h2>
                <article className='aidata'>
                    <h3 className="aidata_title">Manuel Data</h3>
                    <div className="aidata_center">
                        <article className='aidata_infos'>
                        <h4>Temperature Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload"  type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Health Check Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload"  type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Rumination Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload"  type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Lactating Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload"  type="submit" value="Upload" />
                            </form>
                        </article>
                    </div>
                    
                </article> 
                <article className='aidata'>
                    <h3 className="aidata_title">Sensors Data</h3>
                    <div className="aidata_center">
                        <article className='aidata_infos'>
                        <h4>Temperature Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload"  type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Health Check Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload"  type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Rumination Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Lactating Data</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                    </div>
                    
                </article>     
                <article className='aidata'>
                    <h3 className="aidata_title">Monitoring Threshold</h3>
                    <div className="aidata_center">
                        <article className='aidata_infos'>
                        <h4>Temperature Threshold</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Health Check Threshold</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Rumination Threshold</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Lactating Threshold</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Calving Threshold</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                    </div>
                    
                </article>     
                <article className='aidata'>
                    <h3 className="aidata_title">Generate Reports</h3>
                    <div className="aidata_center">
                        <article className='aidata_infos'>
                        <h4>Temperature Report</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Health Check Report</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Rumination report</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                        <article className='aidata_infos'>
                        <h4>Lactating Report</h4>
                            <form action="/uploads" method="POST" enctype="multipart/form-data">
                                <input type="file" name="file" />
                                <input className="btn-upload" type="submit" value="Upload" />
                            </form>
                        </article>
                    </div>
                    
                </article>                    
        </div>
    )
}

export default AiData
