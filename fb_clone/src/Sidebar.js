import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fst3.depositphotos.com%2F15648834%2F17930%2Fv%2F600%2Fdepositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Funknown-profile-picture.html&tbnid=ifTSkpz9J2bh_M&vet=12ahUKEwimueOc2vb0AhXZzqACHeaAA28QMygDegUIARDRAQ..i&docid=urvXhMiZrB4IuM&w=488&h=600&itg=1&q=PROFILE%20IMAGE&ved=2ahUKEwimueOc2vb0AhXZzqACHeaAA28QMygDegUIARDRAQ" title="Kabil Hussain"/>
            <SidebarRow Icon={LocalHospitalOutlinedIcon} title="Covid-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsOutlinedIcon} title="Pages"/>
            <SidebarRow Icon={PeopleAltOutlinedIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontOutlinedIcon} title ="Marketplace"/>
            <SidebarRow Icon={OndemandVideoOutlinedIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
