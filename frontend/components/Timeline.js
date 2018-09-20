import WeekButton from './WeekButton';

const Timeline = ({activeWeek, weeks}) => {

    return (
    <div className="timeline">
        {weeks && weeks.map( (week, i) => 
            <WeekButton week={week} active={week==activeWeek} />
        )}
    </div>
    )
}

export default Timeline;