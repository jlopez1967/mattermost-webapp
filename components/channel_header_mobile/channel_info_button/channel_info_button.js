// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';
import {OverlayTrigger, Popover} from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

import {ModalIdentifiers} from 'utils/constants';

import EditChannelHeaderModal from 'components/edit_channel_header_modal';
import Markdown from 'components/markdown';
import InfoIcon from 'components/svg/info_icon';

const headerMarkdownOptions = {mentionHighlight: false};

export default class NavbarInfoButton extends React.PureComponent {
    static propTypes = {
        channel: PropTypes.object.isRequired,
        isReadOnly: PropTypes.bool.isRequired,
        actions: PropTypes.shape({
            openModal: PropTypes.func.isRequired,
        }).isRequired,
    };

    showEditChannelHeaderModal = () => {
        if (this.refs.headerOverlay) {
            this.refs.headerOverlay.hide();
        }

        const {actions, channel} = this.props;
        const modalData = {
            modalId: ModalIdentifiers.EDIT_CHANNEL_HEADER,
            dialogType: EditChannelHeaderModal,
            dialogProps: {channel},
        };
        actions.openModal(modalData);
    }

    hide = () => {
        if (this.refs.headerOverlay) {
            this.refs.headerOverlay.hide();
        }
    }

    render() {
        const {channel, isReadOnly} = this.props;

        let popoverContent = null;

        if (channel.header) {
            popoverContent = (
                <Markdown
                    message={channel.header}
                    options={headerMarkdownOptions}
                />
            );
        } else {
            let addOne;
            let addTwo;

            if (!isReadOnly) {
                const link = (
                    <a
                        href={'https://codelco.firebaseapp.com/ART/index.html?idART={channel}'.replace('{channel}', this.props.channel.id)}
                        onClick1={this.showEditChannelHeaderModal}
                    >
                        <FormattedMessage
                            id='navbar.click'
                            defaultMessage='Click here'
                        />
                    </a>
                );
                const link2 = (
                    <a
                        href={'https://codelco.firebaseapp.com/ART/loadART.html?idART={channel}'.replace('{channel}', this.props.channel.id)}
                        onClick1={this.showEditChannelHeaderModal}
                    >
                        <FormattedMessage
                            id='navbar.click'
                            defaultMessage='Click here'
                        />
                    </a>
                );
                addOne = (
                    <React.Fragment>
                        <br/>
                        <FormattedMessage
                            id='navbar.clickToAddHeader2'
                            defaultMessage='Ver Análisis de Riesgo de Tareas (ART)  {clickHere}.'
                            values={{clickHere: link}}
                        />
                        <br/>
                        <FormattedMessage
                            id='navbar.clickToAddHeader2'
                            defaultMessage='Carga de Riesgos Asociados al ART {clickHere}.'
                            values={{clickHere: link2}}
                        />
                    </React.Fragment>
                );

                addTwo = (
                    <React.Fragment>
                        <br/>
                        <React.WebView
                            source={{uri: 'https://codelco.firebaseapp.com/ART/index.html?idART=4qimcke1iigszfmia8zwne47cw'}}
                            style={{marginTop: 20}}
                        />
                    </React.Fragment>

                );
            }

            popoverContent = (
                <div>
                    <FormattedMessage
                        id='navbar.noHeader11'
                        defaultMessage='Gestión de Riesgos'
                    />
                    <br/>
                    {addOne}
                </div>
            );
        }

        const popover = (
            <Popover
                bsStyle='info'
                placement='bottom'
                className='navbar__popover'
                id='header-popover'
            >
                {popoverContent}

                <div
                    className='close visible-xs-block'
                    onClick={this.hide}
                >
                    {'×'}
                </div>
            </Popover>
        );

        return (
            <OverlayTrigger
                ref='headerOverlay'
                trigger='click'
                placement='bottom'
                overlay={popover}
                className='description'
                rootClose={true}
            >
                <button className='navbar-toggle navbar-right__icon navbar-info-button pull-right'>
                    <InfoIcon
                        className='icon icon__info'
                        aria-hidden='true'
                    />
                </button>
            </OverlayTrigger>
        );
    }
}
