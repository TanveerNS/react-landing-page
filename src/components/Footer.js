import React from 'react'
import {Grid} from '@mui/material';
import FooterCard from './FooterCard'
import './footer.scss'
import '../assets/scss/link.scss'
import { footerdata } from '../data';

const Footer = () => 
    <Grid className='footer'>
        <div className=''>
            <Grid container className={'footerWraper'} spacing={2}>
                <FooterCard title={'Popular in Outdoor Advertising'} isLoad={true} linklist={footerdata.popular} />
                <FooterCard title={'Other Useful Links'} linklist={footerdata.usefullink} />
                <FooterCard title={'Marketing Purpose'} linklist={footerdata.purpose} />
                <FooterCard title={'Follow'} isdisabled={true} linklist={footerdata.follow} />
                <Grid item sx={12}><p className='fottercopyright'>© 2022 The Ishtihar. All icons and images © to their respective owners.</p></Grid>
            </Grid>
        </div>
    </Grid>

export default Footer