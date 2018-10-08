import React, {Component} from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'

export default class Landing extends Component{
    onLeave(origin, destination, direction) {
        // arguments are mapped in order of fullpage.js callback arguments
        // do something with the event
    }
    render(){
        return(
            <ReactFullpage
                anchors={['', 'products']}
                sectionsColor={['#282c34', '#ff5f45']}
                onLeave={this.onLeave.bind(this)}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <h3>Section 1</h3>
                            </div>
                            <div className="section">
                                dtfyguhijhgfdyujuhuoil
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}