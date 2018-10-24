import React,{Component} from 'react'

import Tabs from 'react-tabs-navigation';


export default class VideoHome extends Component {

    render() {
        return (
            <div>

                <Tabs
                    banner={{
                        children: 'Content over the tabs!'
                    }}
                    tabs={[
                        {
                            children: () => (
                                <div>
                                    This is the first tab content
                                </div>
                            ),
                            displayName: 'Tab 1'
                        },
                        {
                            children: () => (
                                <div>
                                    This is the second tab content
                                </div>
                            ),
                            displayName: 'Tab 2'
                        }
                    ]}
                />


            </div>
        )
    }
}

