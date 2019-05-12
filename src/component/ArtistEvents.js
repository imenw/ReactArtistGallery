import React from 'react';
import Moment from 'react-moment';

const ArtistEvents = (props) =>{

  return(
    <div className="artist-events">
        <div className="artist-name"> Artist Events Are</div>
        <div className="events-container">
          {
            props.events.map((event, index) => {
              return (
              <div key={index}>
                <ol><strong> Venue Place: {event.venue.name}</strong></ol>
                  <div className="venue-details">
                    <span>
                    <strong> Country:</strong> {event.venue.country}
                    <strong> City:</strong> {event.venue.city}
                    <strong> Date:</strong>
                    <Moment format="YYYY/MM/DD">{event.datetime}</Moment>
                    </span>
                  </div>

              </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default ArtistEvents;
