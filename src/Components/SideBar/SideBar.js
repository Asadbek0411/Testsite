import React, {Component} from 'react';
import "./sidebar.css"

class SideBar extends Component {




    render() {
        console.log(this.props)

        return (
            <div className={`sidebar ${this.props.hide && "hide"}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Menu</h1>
                    <button className="btn btn-danger" onClick={() => this.props.changehide(true)}>x</button>
                </div>
            </div>
        );
    }
}

export default SideBar;