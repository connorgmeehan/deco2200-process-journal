import Timeline from './Timeline';

const Header = ({activeWeek, weeks}) => (
    <div className="header">
        <h1>DECO2200: Process Journal</h1>
        <h2>Connor Guy Meehan</h2>
        <h3>cmee7240@uni.sydney.edu.au</h3>
        <Timeline activeWeek={activeWeek} weeks={weeks}/>
        <style jsx>{`
            .header {
                padding-top: 100px;
                padding-bottom: 20px;
                text-align: center;
            }

            .header h1 {
                font-size: 1.3em;
            }
            .header h2 {
                font-size: 1.2em;
            }
            .header h3 {
                font-size: 0.8em;
            }
            
            .mini-header {
                padding-top: 10px;
            }
        `}</style>
    </div>
)

export default Header;