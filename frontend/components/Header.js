import Timeline from './Timeline';

const Header = ({activeWeek, weeks, changeWeekCallback}) => (
    <div className="header">
        <h1>DECO2200: Process Journal</h1>
        <h2>Connor Guy Meehan</h2>
        <h3>cmee7240@uni.sydney.edu.au</h3>
        <Timeline activeWeek={activeWeek} weeks={weeks} changeWeekCallback={changeWeekCallback}/>
    </div>
)

export default Header;