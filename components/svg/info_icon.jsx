// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class InfoIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.info'
                    defaultMessage='Info Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='18px'
                            height='18px'
                            viewBox='0 0 22 22'
                            role='icon'
                            aria-label={ariaLabel}
                        >
                            <g>
                                <title>background</title>
                                <rect
                                    fill='none'
                                    id='canvas_background'
                                    height='402'
                                    width='582'
                                    y='-1'
                                    x='-1'
                                />
                            </g>
                            <g>
                                <title>Layer 1</title>
                                <ellipse
                                    stroke='#000'
                                    ry='10.829944'
                                    rx='11.063205'
                                    id='svg_15'
                                    cy='10.928147'
                                    cx='10.900033'
                                    strokeOpacity='null'
                                    strokeWidth='0'
                                    fill='#ffffff'
                                />
                                <text
                                    stroke='#000'
                                    transform='matrix(0.5000059604644775,0,0,0.4986054550874712,1.181267127022636,-0.2033453933753111) '
                                    xmlSpace='preserve'
                                    textAnchor='start'
                                    fontFamily='Helvetica, Arial, sans-serif'
                                    fontSize='24'
                                    id='svg_10'
                                    y='29.706271'
                                    x='12.699349'
                                    strokeOpacity='null'
                                    strokeWidth='0'
                                    fill='#ffaa56'
                                >R</text>
                                <g
                                    id='svg_13'
                                    fill='inherit'
                                >
                                    <text
                                        xmlSpace='preserve'
                                        textAnchor='start'
                                        fontFamily='Helvetica, Arial, sans-serif'
                                        fontSize='24'
                                        id='svg_12'
                                        y='-5.699985'
                                        x='7.301158'
                                        fillOpacity='null'
                                        strokeOpacity='null'
                                        strokeWidth='0'
                                        stroke='#000'
                                        fill='#000000'
                                    >R</text>
                                </g>
                                <text
                                    stroke='#000'
                                    transform='matrix(1,0,0,1.0209814392805683,0,0.21082441182201628) '
                                    xmlSpace='preserve'
                                    textAnchor='start'
                                    fontFamily='Helvetica, Arial, sans-serif'
                                    fontSize='12'
                                    id='svg_14'
                                    y='14.400486'
                                    x='13.96574'
                                    strokeOpacity='null'
                                    strokeWidth='0'
                                    fill='#088e8e'
                                >T</text>
                                <g
                                    stroke='null'
                                    id='svg_1'
                                    fill='inherit'
                                >
                                    <text
                                        stroke='#000'
                                        transform='matrix(0.5838135564570024,0,0,0.51215513538708,2.3756685981352565,3.606712393566074) '
                                        xmlSpace='preserve'
                                        textAnchor='start'
                                        fontFamily='Helvetica, Arial, sans-serif'
                                        fontSize='24'
                                        id='svg_8'
                                        y='21.398323'
                                        x='-3.437185'
                                        strokeWidth='0'
                                        fill='#099494'
                                    >A</text>
                                    <text
                                        stroke='#000'
                                        transform='matrix(0.8835496306419371,0,0,0.911276310704821,0.40144095845946026,-0.9111215786531482) '
                                        xmlSpace='preserve'
                                        textAnchor='start'
                                        fontFamily='Helvetica, Arial, sans-serif'
                                        fontSize='24'
                                        id='svg_9'
                                        y='1.038516'
                                        x='7.82861'
                                        fillOpacity='null'
                                        strokeOpacity='null'
                                        strokeWidth='0'
                                        fill='#099494'
                                    >R</text>
                                </g>
                            </g>
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}
