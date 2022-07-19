import React from 'react'
import {MenuItem,Grid} from '@mui/material';
import {Link} from 'react-router-dom'


function FooterCard({ linklist, title, link, isLoad=false, isdisabled=false }) {
    const pushHandler=()=>{
        setTimeout(()=>{
            window.location.reload()
        },100)
    }
    return (
        <Grid item xs={12} sm={6} md={3} xl={3} className={"classes"}>
            <p className="footer-title">{title}</p>
                {linklist?.map((link, k) => {
                    return (
                        <MenuItem className="footerlinklist" key={k}>
                            {isLoad?
                            <Link to={link.link} onClick={pushHandler} className="footer-link-list">{link.title}</Link>
                            :
                            <Link to={link.link} className={`footer-link-list ${isdisabled && 'disabled-css'} ${link.title.toLowerCase() === 'mash' && 'disabled-css'} ${link.title.toLowerCase() === 'ads' && 'disabled-css'} ${link.title.toLowerCase() === 'testimonials' && 'disabled-css'} ${link.title.toLowerCase() === 'our clients' && 'disabled-css'}  `}>{link.title}</Link>
                            }
                        </MenuItem>
                    )
                })}
        </Grid>
    )
}

export default FooterCard