
const Image = (props) => (
    <div className="image-container">
        <img className="image" src={`http://localhost:1337/${props.src}`} />
        <style jsx>{`
            .image {
                margin: 0 auto;
                max-height:800px;
                max-width:600px;
            }
        `}</style>
    </div>
)

export default Image;