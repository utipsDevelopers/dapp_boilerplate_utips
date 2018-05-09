import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import matchSorter from 'match-sorter';
import Time from 'react-time-format';

class MatchesTable extends Component {
    state = {
      matches: [],
    }
    //async componentDidMount() {
      //try {
        //const res = await fetch('/api/matches');
        //const matches = await res.json();
            //this.setState({ // eslint-disable-line
                //matches: matches, // eslint-disable-line
        //});
      //} catch (e) {
      //  console.log(e);
      //}
    //}
    render() {
      const columns = [
        {
          id: 'fecha',
          Header: 'Fecha',
          accessor: d => <Time value={d.fecha} format="DD/MM/YY" />,
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ['fecha'] }),
          filterAll: true,
        }, {
          id: 'club',
          Header: 'Attr 1',
          accessor: d => d.club,
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ['club'] }),
          filterAll: true,
        }, {
          id: 'cancha',
          Header: 'Attr 2',
          accessor: d => d.cancha,
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ['cancha'] }),
          filterAll: true,
        }, {
          id: 'bloque',
          Header: 'Attr 3',
          accessor: d => d.bloque,
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ['bloque'] }),
          filterAll: true,
        }, {
          id: 'jugador1',
          Header: 'Attr 4',
          accessor: d => d.jugador1,
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ['jugador1'] }),
          filterAll: true,
        }, {
          id: 'jugador2',
          Header: 'Attr 5',
          accessor: d => d.jugador2,
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ['jugador2'] }),
          filterAll: true,
        },
      ];
      return (
        <div>
          <ReactTable
            data={this.state.matches}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
            previousText="Anterior"
            nextText="Siguiente"
            loadingText="Cargando..."
            noDataText="Filas no encontradas :("
            pageText="Página"
            rowsText="filas"
            ofText="de"
            columns={columns}
          />
        </div>
      );
    }
}

export default MatchesTable;
