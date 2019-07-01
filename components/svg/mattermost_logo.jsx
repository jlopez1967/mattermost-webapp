// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import logocodelco from 'images/favicon/favicon-96x96.png';


export default class MattermostLogo extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.mattermost'
                    defaultMessage='Mattermost Logo'
                >
                    {(ariaLabel) => (
                        <img
                        className='more-modal__image'
                        src={logocodelco}
                        alt='Codelco Sistema'
                        width='60'
                        height='60'
                        />
                    )}
                </FormattedMessage>
            </span>
        );
    }
}

const style = {
    background: {
        enableBackground: 'new 0 0 500 500',
    },
    st0: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
    },
};
