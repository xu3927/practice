import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as MaterialUi from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const {Button} = MaterialUi


class Material extends Component{
    render(){
        
        return (<div>
          
            <div>
                {/* 样式重置 */}
                {/* <CssBaseline/> */}
                Material Ui
            </div>
            <div>
                <Button variant="raised" color="primary">
                    Hello World
                </Button>
                <Button variant="raised" size="small">
                Small
                </Button>
                <Button variant="raised" size="medium" color="secondary">
                Medium
                </Button>
                <Button variant="raised" size="large">
                Large
                </Button>
            </div>
          
        </div>)
    }
}

export default Material