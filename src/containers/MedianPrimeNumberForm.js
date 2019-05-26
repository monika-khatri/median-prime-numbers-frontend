import React from 'react';

class MedianPrimeNumberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', medians: [], error: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        fetch("http://localhost:3000?upperLimit=" + this.state.value)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        medians: result.data
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
        event.preventDefault();
    }

    render() {
        return (
            <div class="container">
                <form class="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="upperLimit">Upper Limit</label>
                        <input type="number"
                               className="form-control"
                               id="upperLimit"
                               aria-describedby="upperLimitHelp"
                               value={this.state.value}
                               onChange={this.handleChange}></input>
                        <small id="upperLimitHelp" className="form-text text-muted">To find the median prime number(s) of
                            the set of prime numbers less than upper limit.</small>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <ul>
                        {this.state.medians ? this.state.medians.map(number => <li>{number}</li>) : ''}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MedianPrimeNumberForm;
