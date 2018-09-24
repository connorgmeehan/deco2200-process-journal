import { Component } from 'react';
import panAndZoomHoc from 'react-pan-and-zoom-hoc';

const InteractiveDiv = panAndZoomHoc('div');

class Modal extends Component {

    state = {
        x: 0.5,
        y: 0.5,
        scale: 1
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handlePanAndZoom(x, y, scale) {
        this.setState({x, y, scale});
    }
 
    handlePanMove(x, y) {
        this.setState({x, y});
    }

    render() {
        const {x, y, scale} = this.state;

        return(
            <div>
                {this.props.url && 
                    <div className="modal-wrapper" onClick={this.handleClick}>
                    <InteractiveDiv
                        x={x}
                        y={y}
                        scale={scale}
                        scaleFactor={Math.sqrt(2)}
                        minScale={1}
                        maxScale={2 ** 18}
                        onPanAndZoom={(x, y, scale) => this.handlePanAndZoom(x, y, scale)} style={{width: 250, height: 250, border: '1px solid black', position: 'relative'}}
                        onPanMove={(x, y) => this.handlePanMove(x, y)}
                    >
                        <div className="modal">
                            <img className="modal-img" src={`http://localhost:1337/${this.props.url}`} />
                        </div>
                    </InteractiveDiv>;
                        
                    </div>
                }
            </div>
        )
    }

    handleClick() {
        this.props.showModalCallback(undefined);
    }
}

export default Modal;