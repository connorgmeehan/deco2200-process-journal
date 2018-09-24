import DateFormatterService from '../services/DateFormatterService';
import Image from './Image';

const Post = ({data, showModalCallback}) => {

    const prefix = (data.Week != 0 ? `Week ${data.Week}` : `Introduction`);
    const date = new DateFormatterService(new Date(data.Date));
    
    return(
        <div className="post">
            <div className="post-header">
                <h3 className="post-header-title"> {prefix} - {data.Title}</h3>
                <h5 className="post-header-date">{date.getWeekDay()} the {date.getMonthDay()} of {date.getMonth()}, {date.getYear()}</h5>
            </div>
            <div className="header-row">
                { data.HeaderImage && <Image url={data.HeaderImage.url} showModalCallback={showModalCallback}/> }
            </div>
            <div className="row">
                { data.Image1 && <Image url={data.Image1.url} showModalCallback={showModalCallback}/> }
                <span>{data.P1}</span>
            </div>
            <div className="row">
                {data.Image2 && <Image url={data.Image2.url} showModalCallback={showModalCallback}/> }
                {data.P2 && <span>{data.P2}</span> }
            </div>
            <div className="row">
                {data.Image3 && <Image url={data.Image3.url} showModalCallback={showModalCallback}/> }
                {data.P3 && <span>{data.P3}</span> }
            </div>
        </div>
    )
}

export default Post;