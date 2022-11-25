import React, {Component} from 'react';
import "./timer.css"

class Timer extends Component {

    constructor (props){
        super(props);

        this.state = {
            hour: props.hour || 0,
            second: props.second || 0,
            minute: props.minute || 0,
        }

        console.log("Secondamer js constructor ishladi");

    }

    componentDidMount() {

        this.setState((state) => {

            return {
                 interval: setInterval(() => {

                    const {second, minute, hour} = this.state;

                    this.setState((state) => {
                       return {
                           second: second - 1,
                       }


                    })

                     if (second === 0){
                        this.setState((state) => {
                            return {
                                second: 59,
                                minute: minute - 1,
                            }
                        })
                        if (minute === 0){
                            this.setState((state) => {
                                return {
                                    minute: 59,
                                    hour: hour - 1,
                                }
                            })
                        }
                    }

                     if (this.second === 0 &&  this.minute === 0 &&  this.hour === 0) {
                         clearInterval(this.interval);
                     }


                }, 1000)
            }

        } )

        /*this.interval = setInterval(() => {
            console.log("%cinterval ishladi", "color:green");
            this.setState((state) => {
                    if(this.second === 0){
                    this.setState((state) => {
                            return {
                                second: (this.state.second = 59),
                                minute: this.minute - 1,
                               }
                        }
                    )

                }

                if(this.minute === 0){
                    this.setState((state) => {
                            return {
                                minute: (this.state.minute = 59),
                                hour: this.hour - 1,
                            }
                        }
                    )

                }

                }
            )



        }, 1000);*/

   /*  console.log("Secondamer js componentDidMount ishladi");*/

    }

    componentWillMount() {
        this.interval && clearInterval(this.interval);
    }



    getNormalTime = (n) => (n < 10 ? "0" + n : n);


    render() {
        return (
            <div className="timerapp">

                <h1 className="display-1 fw-bold">
                    {this.getNormalTime(this.state.hour)}:
                    {this.getNormalTime(this.state.minute)}:
                    {this.getNormalTime(this.state.second)}
                 </h1>
            </div>
        );
    }


}

export default Timer;