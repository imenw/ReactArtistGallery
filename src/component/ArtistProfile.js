import React from 'react';

const ArtistProfile = (props) => {

  return(
    <div className="artist-details">
        <div className="artist-name">
          {props.artistData.name}
        </div>
        <div className="img-wrapper">
          <img src={props.artistData.image_url} alt={props.artistData.name}/>
        </div>
        <div className="fb-link">
          <a href={props.artistData.facebook_page_url}>FB Account</a>
        </div>
    </div>
  )
}

export default ArtistProfile;
