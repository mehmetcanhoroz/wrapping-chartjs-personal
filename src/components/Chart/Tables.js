import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchTable} from "../../actions/charts";
import ReactTable from "react-table";
import 'react-table/react-table.css';


const dataTable = [
    {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }, {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }, {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }, {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }, {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }];

const columnsTable = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
}, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
}, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
}];


class Tables extends Component {
    static propTypes = {
        tableData: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.fetchTable();
    }


    render() {
        console.log(this.props);
        return (
            <div>
                <ReactTable style={{maxWidth: 750}}
                            data={dataTable}
                            columns={columnsTable}
                            loading={false}
                            defaultPageSize={10}
                            className="-striped -highlight"
                />
            </div>
        );
    }
}

/*<DoughnutChart data={dataDoughnut} options={optionsDoughnut}/>*/
const mapStateToProps = (state) => {
    return {
        tableData: state.charts.tableData
    }
};

const mapDispatchToProps = {
    fetchTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);