import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'snickers',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 4,
                    size: 'large',
                    linkUrl: ''
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 5,
                    size: 'large',
                    linkUrl: ''
                }
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                
                {this.state.sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}

            </div>
        )
    }
}

export default Directory;