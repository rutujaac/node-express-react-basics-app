import React,{Component} from 'react';
import '../App.css';


class NavBar extends Component {
    render() {
        return (
            <table className="titlebar">
              <tbody>
                <tr>
                  <td><img src="./film-strip.svg" alt="logo" width="40"/></td>
                  <td>FindMovie</td>
                </tr>
              </tbody>
            </table>
          );
    }
}

export default NavBar;