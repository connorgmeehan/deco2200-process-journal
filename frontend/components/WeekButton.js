import Link from 'next/link';

const WeekButton = ({week, active}) => (
    <Link as={`/week/${week}`} href={`/post?week=${week}`}>
        <div className={`week-button ${active == true ? "active" : ""}`} >
            <span>Week {week && week}</span>
        </div>
    </Link>
) 

export default WeekButton;