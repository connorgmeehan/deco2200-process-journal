import WeekButton from './WeekButton';

const Timeline = ({activeWeek, weeks, changeWeekCallback}) => {
    return (
        <div className="timeline">
            {weeks && weeks.map( (week, i) => 
                <WeekButton key={i} week={week} isActive={(activeWeek == week ? true : false)} changeWeekCallback={changeWeekCallback}/>
            )}
        </div>
    )
}

export default Timeline;