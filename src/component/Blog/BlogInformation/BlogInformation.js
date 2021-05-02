import React from 'react';
import './BlogInformation.css';
const BlogInformation = ({info}) => {
    const{title,description,image}=info;
    return (
      
          
<div className='col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12'>
           <div className='blogInfo shadow'>
               <a href='/blog'>
               <img src={image}alt=''></img>
                <h4>{title}</h4>
                <p>{description}</p>
               </a>
            </div>
           </div>
    );
};

export default BlogInformation;