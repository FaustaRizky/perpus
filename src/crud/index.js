import React, { Component } from 'react'
import Navbar from './navbar'
import Table from './table'
import Formulir from './formulir'
import TablePeminjam from './tablePeminjam'
import FormulirPeminjam from './formulirPeminjam'

export default class Crud extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <div className='mt-4'>
                <Table />
                <Formulir />
                <TablePeminjam />
                <FormulirPeminjam />
            </div>
      </div>
    )
  }
}
