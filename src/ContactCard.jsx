import React from 'react';
import './ContactCard.css';
import {CgWebsite} from 'react-icons/cg';
import {FaPhoneAlt, FaUserCircle} from 'react-icons/fa';
import {MdEmail, MdOutlineHome,MdLocationOn} from 'react-icons/md';


export default function ContactCard({name, phone, email, website, address, company}) {
    //console.log(data);
  return (
    <div className='contact_card'>
        
        <div className="card_header">
            <p>
            <span className='icon_logo user'><FaUserCircle/></span>
            {name}
            </p>
            <p>
            <span className='icon_logo'><MdEmail/></span>
            {email}
            </p>
           
        </div>
        <div className="card_body">
          <p>{company.catchPhrase}</p>
          <p>{company.bs}</p>
          <p><span className='icon_logo'><CgWebsite/></span> {website} </p>
          
        </div>
        <div className="card_footer">
           <div className='user_address'>
            <p>
            <span className='icon_logo'><MdLocationOn/></span>
            {' '  + address.suite + ' ' + address.street + ' ' +  address.city
            + ' ' + address.zipcode }
            
            {/* <span>
            { address.city}
            {address.zipcode}
            </span> */}
          </p>
         </div>
         <div className="user_address2">
            <p><span className='icon_logo'><FaPhoneAlt/></span> {phone} </p>
            <p><span className='icon_logo'><MdOutlineHome/></span> {company.name} </p>
         </div>
        </div>
    </div>
  )
}
