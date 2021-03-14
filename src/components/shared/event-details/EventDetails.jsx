import React from 'react';
import { useSelector } from 'react-redux';
//react router imports

//style imports
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { cardStyles } from '../../../styles';
import StatusTabs from '../../dashboard/event-view/recent-card/status-buttons/status-buttons';

//icon imports
import { Icon } from '@iconify/react';
import calendarIcon from '@iconify/icons-flat-color-icons/calendar';
import clockIcon from '@iconify/icons-flat-color-icons/clock';
import globeIcon from '@iconify/icons-flat-color-icons/globe';

//data/function imports

import { parseTime, chooseDefaultPicture } from '../../../utilities/functions';

const EventDetails = ({ event }) => {
    const classes = cardStyles();
    const currentUserId = useSelector((state) => state.user.id);
    const photo =
        event.photo !== 'null'
            ? event.photo
            : chooseDefaultPicture(event.category_id);

    let timeObject, parsedAddressURL;

    if (Object.keys(event).length > 0) {
        timeObject = parseTime(event.startTime, event.endTime);
        parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(
            ' ',
            '+'
        )}`;
    }

    return (
        <div className="event-details-container">
            {event ? (
                <Card className={`${classes.root} ${classes.fullEvent}`}>
                    <CardHeader
                        title={
                            <Typography variant="h3">{event.title}</Typography>
                        }
                        subheader={
                            <Typography variant="caption">
                                <span>created by </span>
                                {`${event.User.firstName} ${event.User.lastName}`}
                            </Typography>
                        }
                    />
                    <CardMedia
                        component="img"
                        src={photo}
                        title="Event Details Photo"
                    />
                    <p> {event.description}</p>
                    <div>
                        Confirmed Attending: {event.EventUsers.attending.length}
                    </div>
                    <div>
                        <span>
                            <Icon height="20" icon={calendarIcon} />
                        </span>
                        {timeObject.formattedDate}
                    </div>
                    <div>
                        <span>
                            <Icon height="20" icon={clockIcon} />
                        </span>
                        {`${timeObject.startTime} ${
                            timeObject.endTime !== 'Invalid date'
                                ? '- ' + timeObject.endTime
                                : ''
                        }`}
                    </div>
                    <div>
                        <span>
                            <Icon height="20" icon={globeIcon} />
                        </span>
                        <a
                            href={parsedAddressURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {event.address}
                        </a>
                    </div>
                    <div>
                        <Typography variant="h6">
                            Will you be attending this event?
                        </Typography>
                        <div>
                            <StatusTabs
                                id={event.id}
                                currentUserId={currentUserId}
                            />
                        </div>
                    </div>
                </Card>
            ) : (
                <Typography variant="h6">
                    Please select an event to view its details
                </Typography>
            )}
        </div>
    );
};

export default EventDetails;
