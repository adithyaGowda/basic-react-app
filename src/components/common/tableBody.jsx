import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(item, column) {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.path);
  }
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {columns.map((column) => {
                return <td>{this.renderCell(item, column)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
