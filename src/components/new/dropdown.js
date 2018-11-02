import { Card, Col, Row,  Icon, Avatar } from 'antd';
import React, {Component} from "react";

const list = [ {
    id: '',
    language: 'Kannada',
    listOfCom: [
        {
            id:'',
            title: '13 Days - 1',
            cover: 'https://cdn.tbsplanet.com/dailycomics/covers/kan/13days1.jpg',
            episodes:'No. of episodes: 15',
            link:'https://www.tbsplanet.com/dailycomics/13days/1/kan/newepisodes.html',
            target: '_blank'
        },
        {
            id:'',
            title: 'Sagar',
            cover: 'https://cdn.tbsplanet.com/dailycomics/covers/kan/sagar.jpg',
            episodes:'No. of episodes: 15',
            link:'https://www.tbsplanet.com/dailycomics/sagar/1/tel/newepisodes.html',
            target: '_blank'
        }
    ]
}
];
class Card extends Component{
    return(){
        render(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>,
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                </Row>
            </div>,

        )
    }
}
export default Card