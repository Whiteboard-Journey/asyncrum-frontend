// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const Unicons = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/unicons' },
                    { label: 'Unicons', path: '/ui/icons/unicons', active: true },
                ]}
                title={'Unicons'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Arrows</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-center-h"></i> uil-align-center-h
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-growth"></i> uil-arrow-growth
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-maximize-left"></i> uil-maximize-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-enter"></i> uil-enter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-code"></i> uil-code
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-resize"></i> uil-arrows-resize
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-resize-h"></i> uil-arrows-resize-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-shrink-h"></i> uil-arrows-shrink-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-h-alt"></i> uil-arrows-h-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-h"></i> uil-arrows-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-up-right-alt"></i> uil-corner-up-right-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-expand-left"></i> uil-expand-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-scaling-right"></i> uil-scaling-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-download-alt"></i> uil-download-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-down-arrow"></i> uil-down-arrow
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-scaling-left"></i> uil-scaling-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-down"></i> uil-chart-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-double-down"></i> uil-angle-double-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-double-left"></i> uil-angle-double-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-double-right"></i> uil-angle-double-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-circle-down"></i> uil-arrow-circle-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-expand-alt"></i> uil-expand-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-down"></i> uil-angle-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-resize-diagonal"></i> uil-arrow-resize-diagonal
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exchange-alt"></i> uil-exchange-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exchange"></i> uil-exchange
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compress-arrows"></i> uil-compress-arrows
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-caret-right"></i> uil-caret-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-from-top"></i> uil-arrow-from-top
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-to-bottom"></i> uil-arrow-to-bottom
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-scroll"></i> uil-scroll
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sort"></i> uil-sort
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-scroll-h"></i> uil-scroll-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-right-down"></i> uil-arrows-right-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-left-down"></i> uil-arrows-left-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-up-right"></i> uil-arrows-up-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compress-point"></i> uil-compress-point
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-compress-h"></i> uil-arrow-compress-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-resize-v"></i> uil-arrows-resize-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-break"></i> uil-arrow-break
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-v-alt"></i> uil-arrows-v-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-v"></i> uil-arrows-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-shrink-v"></i> uil-arrows-shrink-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-center-v"></i> uil-align-center-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-up-right"></i> uil-arrow-up-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-up-left"></i> uil-arrow-up-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-up"></i> uil-angle-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-circle-up"></i> uil-arrow-circle-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-export"></i> uil-export
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-upload-alt"></i> uil-upload-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-double-up"></i> uil-angle-double-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-up-right"></i> uil-corner-up-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-up-left"></i> uil-corner-up-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sorting"></i> uil-sorting
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-right-down"></i> uil-corner-right-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-left-down"></i> uil-corner-left-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-down-right"></i> uil-corner-down-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-down-left"></i> uil-corner-down-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shuffle"></i> uil-shuffle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-down-right-alt"></i> uil-corner-down-right-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-top-arrow-to-top"></i> uil-top-arrow-to-top
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-top-arrow-from-top"></i> uil-top-arrow-from-top
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-random"></i> uil-arrow-random
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-direction"></i> uil-direction
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-right"></i> uil-angle-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-right-b"></i> uil-angle-right-b
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-circle-right"></i> uil-arrow-circle-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-to-right"></i> uil-arrow-to-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-from-right"></i> uil-arrow-from-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-expand-from-corner"></i> uil-expand-from-corner
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compress-alt-left"></i> uil-compress-alt-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compress-alt"></i> uil-compress-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-expand-arrows-alt"></i> uil-expand-arrows-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-corner-up-left-alt"></i> uil-corner-up-left-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-maximize"></i> uil-arrows-maximize
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-expand-arrows"></i> uil-expand-arrows
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-down-right"></i> uil-arrow-down-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-down-left"></i> uil-arrow-down-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angle-left"></i> uil-angle-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-circle-left"></i> uil-arrow-circle-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-left-arrow-to-left"></i> uil-left-arrow-to-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-left-arrow-from-left"></i> uil-left-arrow-from-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrows-merge"></i> uil-arrows-merge
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-down"></i> uil-arrow-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-right"></i> uil-arrow-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-up"></i> uil-arrow-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-arrow-left"></i> uil-arrow-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-expand-right"></i> uil-expand-right
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Brand Logos</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dropbox"></i> uil-dropbox
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-google-drive-alt"></i> uil-google-drive-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dribbble"></i> uil-dribbble
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-line"></i> uil-line
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-facebook-f"></i> uil-facebook-f
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-instagram"></i> uil-instagram
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-facebook-messenger"></i> uil-facebook-messenger
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-black-berry"></i> uil-black-berry
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-intercom"></i> uil-intercom
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-linkedin"></i> uil-linkedin
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-facebook"></i> uil-facebook
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-apple"></i> uil-apple
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-snapchat-ghost"></i> uil-snapchat-ghost
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-snapchat-square"></i> uil-snapchat-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-adobe"></i> uil-adobe
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-twitter"></i> uil-twitter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-behance"></i> uil-behance
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-instagram-alt"></i> uil-instagram-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-500px"></i> uil-500px
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-youtube"></i> uil-youtube
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-whatsapp"></i> uil-whatsapp
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-visual-studio"></i> uil-visual-studio
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tumblr-square"></i> uil-tumblr-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tumblr"></i> uil-tumblr
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-slack"></i> uil-slack
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-medium-m"></i> uil-medium-m
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-github-alt"></i> uil-github-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-linkedin-alt"></i> uil-linkedin-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-google"></i> uil-google
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-raddit-alien-alt"></i> uil-raddit-alien-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vuejs"></i> uil-vuejs
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-google-play"></i> uil-google-play
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-google-drive"></i> uil-google-drive
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vuejs-alt"></i> uil-vuejs-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-github"></i> uil-github
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-slack-alt"></i> uil-slack-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-google-hangouts"></i> uil-google-hangouts
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-java-script"></i> uil-java-script
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-paypal"></i> uil-paypal
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="m-t-0 header-title mb-2">Business</h4>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-money-withdrawal"></i> uil-money-withdrawal
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-pie"></i> uil-chart-pie
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bill"></i> uil-bill
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-money-stack"></i> uil-money-stack
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-briefcase-alt"></i> uil-briefcase-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-suitcase-alt"></i> uil-suitcase-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-invoice"></i> uil-invoice
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-receipt"></i> uil-receipt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-yen"></i> uil-yen
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-yen-circle"></i> uil-yen-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-analysis"></i> uil-analysis
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-line"></i> uil-presentation-line
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pound"></i> uil-pound
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pound-circle"></i> uil-pound-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-line"></i> uil-chart-line
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-moneybag-alt"></i> uil-moneybag-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bag-alt"></i> uil-bag-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-moneybag"></i> uil-moneybag
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-suitcase"></i> uil-suitcase
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-euro"></i> uil-euro
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-money-insert"></i> uil-money-insert
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dollar-alt"></i> uil-dollar-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dollar-sign"></i> uil-dollar-sign
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-euro-circle"></i> uil-euro-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bag"></i> uil-bag
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-money-withdraw"></i> uil-money-withdraw
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-usd-square"></i> uil-usd-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dollar-sign-alt"></i> uil-dollar-sign-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-atm-card"></i> uil-atm-card
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-usd-circle"></i> uil-usd-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-money-bill"></i> uil-money-bill
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-money-bill-stack"></i> uil-money-bill-stack
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bitcoin-circle"></i> uil-bitcoin-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bitcoin"></i> uil-bitcoin
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-receipt-alt"></i> uil-receipt-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-graph-bar"></i> uil-graph-bar
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-signal-alt-3"></i> uil-signal-alt-3
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-growth"></i> uil-chart-growth
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart"></i> uil-chart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-bar"></i> uil-chart-bar
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-growth-alt"></i> uil-chart-growth-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-briefcase"></i> uil-briefcase
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-analytics"></i> uil-analytics
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-bar-alt"></i> uil-chart-bar-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-calculator-alt"></i> uil-calculator-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-crosshairs"></i> uil-crosshairs
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-calendar-alt"></i> uil-calendar-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lightbulb"></i> uil-lightbulb
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chart-pie-alt"></i> uil-chart-pie-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-schedule"></i> uil-schedule
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-coins"></i> uil-coins
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lightbulb-alt"></i> uil-lightbulb-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-gold"></i> uil-gold
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-puzzle-piece"></i> uil-puzzle-piece
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sitemap"></i> uil-sitemap
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-hunting"></i> uil-hunting
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-crosshair"></i> uil-crosshair
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-crosshair-alt"></i> uil-crosshair-alt
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Chat</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-plus"></i> uil-comment-alt-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-plus"></i> uil-comment-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-redo"></i> uil-comment-alt-redo
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-upload"></i> uil-comment-alt-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-upload"></i> uil-comment-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-medical"></i> uil-comment-alt-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-question"></i> uil-comment-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-heart"></i> uil-comment-alt-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-shield"></i> uil-comment-shield
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-search"></i> uil-comment-search
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-shield"></i> uil-comment-alt-shield
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-redo"></i> uil-comment-redo
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-search"></i> uil-comment-alt-search
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-lock"></i> uil-comment-lock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-heart"></i> uil-comment-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-question"></i> uil-comment-alt-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-medical"></i> uil-comment-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-lock"></i> uil-comment-alt-lock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-share"></i> uil-comment-share
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-share"></i> uil-comment-alt-share
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-edit"></i> uil-comment-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-download"></i> uil-comment-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chat"></i> uil-chat
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-image"></i> uil-comment-alt-image
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-image"></i> uil-comment-image
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-download"></i> uil-comment-alt-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chat-bubble-user"></i> uil-chat-bubble-user
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-edit"></i> uil-comment-alt-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-lines"></i> uil-comment-lines
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-dots"></i> uil-comment-alt-dots
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-dots"></i> uil-comment-dots
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comments"></i> uil-comments
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-lines"></i> uil-comment-alt-lines
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-notes"></i> uil-comment-notes
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-notes"></i> uil-comment-alt-notes
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment"></i> uil-comment
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-message"></i> uil-comment-alt-message
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-chart-lines"></i> uil-comment-alt-chart-lines
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-message"></i> uil-comment-message
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comments-alt"></i> uil-comments-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt"></i> uil-comment-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-check"></i> uil-comment-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-chart-line"></i> uil-comment-chart-line
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-info-alt"></i> uil-comment-info-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-check"></i> uil-comment-alt-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-block"></i> uil-comment-alt-block
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-block"></i> uil-comment-block
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-verify"></i> uil-comment-verify
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-verify"></i> uil-comment-alt-verify
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-chat-info"></i> uil-chat-info
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-info"></i> uil-comment-alt-info
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-info"></i> uil-comment-info
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-exclamation"></i> uil-comment-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-exclamation"></i> uil-comment-alt-exclamation
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Cloud And Web</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-computing"></i> uil-cloud-computing
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-bookmark"></i> uil-cloud-bookmark
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-times"></i> uil-cloud-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-block"></i> uil-cloud-block
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-window"></i> uil-window
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-check"></i> uil-cloud-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-window-section"></i> uil-window-section
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-window-maximize"></i> uil-window-maximize
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-window-grid"></i> uil-window-grid
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-columns"></i> uil-columns
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-web-section-alt"></i> uil-web-section-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-web-section"></i> uil-web-section
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-web-grid-alt"></i> uil-web-grid-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-grid"></i> uil-grid
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-web-grid"></i> uil-web-grid
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-server-alt"></i> uil-server-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-slash"></i> uil-cloud-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-server-connection"></i> uil-server-connection
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-database-alt"></i> uil-database-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-database"></i> uil-database
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-exclamation"></i> uil-cloud-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-upload"></i> uil-cloud-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-unlock"></i> uil-cloud-unlock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-shield"></i> uil-cloud-shield
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-share"></i> uil-cloud-share
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-server"></i> uil-server
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-server-network-alt"></i> uil-server-network-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-server-network"></i> uil-server-network
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-servers"></i> uil-servers
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-redo"></i> uil-cloud-redo
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-lock"></i> uil-cloud-lock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-heart"></i> uil-cloud-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-info"></i> uil-cloud-info
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-question"></i> uil-cloud-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-download"></i> uil-cloud-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-wifi"></i> uil-cloud-wifi
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-database-tree"></i> uil-cloud-database-tree
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-data-connection"></i> uil-cloud-data-connection
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-data-sharing"></i> uil-data-sharing
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-window-restore"></i> uil-window-restore
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bug"></i> uil-bug
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Communication</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-check"></i> uil-envelope-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-block"></i> uil-envelope-block
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-exclamation"></i> uil-envelope-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-add"></i> uil-envelope-add
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-outgoing-call"></i> uil-outgoing-call
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-phone-slash"></i> uil-phone-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-alt"></i> uil-envelope-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope"></i> uil-envelope
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-incoming-call"></i> uil-incoming-call
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-phone"></i> uil-phone
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-phone-alt"></i> uil-phone-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-forwaded-call"></i> uil-forwaded-call
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-phone-times"></i> uil-phone-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-share"></i> uil-envelope-share
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-upload-alt"></i> uil-envelope-upload-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-upload"></i> uil-envelope-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-receive"></i> uil-envelope-receive
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-minus"></i> uil-envelope-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-redo"></i> uil-envelope-redo
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-search"></i> uil-envelope-search
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mailbox-alt"></i> uil-mailbox-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-shield"></i> uil-envelope-shield
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-open"></i> uil-envelope-open
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-download-alt"></i> uil-envelope-download-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelopes"></i> uil-envelopes
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-phone-volume"></i> uil-phone-volume
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-heart"></i> uil-envelope-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mailbox"></i> uil-mailbox
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-calling"></i> uil-calling
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-laptop-cloud"></i> uil-laptop-cloud
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-download"></i> uil-envelope-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-technology"></i> uil-technology
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-info"></i> uil-envelope-info
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-fast-mail"></i> uil-fast-mail
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-question"></i> uil-envelope-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-send"></i> uil-envelope-send
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-postcard"></i> uil-postcard
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-fast-mail-alt"></i> uil-fast-mail-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-edit"></i> uil-envelope-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-desktop-cloud-alt"></i> uil-desktop-cloud-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-bookmark"></i> uil-envelope-bookmark
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-times"></i> uil-envelope-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-star"></i> uil-envelope-star
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-missed-call"></i> uil-missed-call
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-phone-pause"></i> uil-phone-pause
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-envelope-lock"></i> uil-envelope-lock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-rss-alt"></i> uil-rss-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-post-stamp"></i> uil-post-stamp
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Construction</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-screw"></i> uil-screw
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tape"></i> uil-tape
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-drill"></i> uil-drill
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shovel"></i> uil-shovel
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-no-entry"></i> uil-no-entry
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-paint-tool"></i> uil-paint-tool
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-constructor"></i> uil-constructor
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-jackhammer"></i> uil-jackhammer
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-traffic-barrier"></i> uil-traffic-barrier
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wall"></i> uil-wall
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wheel-barrow"></i> uil-wheel-barrow
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-trowel"></i> uil-trowel
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-hard-hat"></i> uil-user-hard-hat
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Content</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-inner"></i> uil-border-inner
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-horizontal"></i> uil-border-horizontal
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-grip-horizontal-line"></i> uil-grip-horizontal-line
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-document-layout-left"></i> uil-document-layout-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-document-layout-center"></i> uil-document-layout-center
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-document-layout-right"></i> uil-document-layout-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dialpad"></i> uil-dialpad
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-center"></i> uil-align-center
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-center-justify"></i> uil-align-center-justify
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dialpad-alt"></i> uil-dialpad-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-bottom"></i> uil-border-bottom
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-alt"></i> uil-border-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-alt"></i> uil-align-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-letter-right"></i> uil-align-letter-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-center-alt"></i> uil-align-center-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sort-amount-down"></i> uil-sort-amount-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sort-amount-up"></i> uil-sort-amount-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wrap-text"></i> uil-wrap-text
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-vertical"></i> uil-border-vertical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-top"></i> uil-border-top
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-left-justify"></i> uil-align-left-justify
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-paragraph"></i> uil-paragraph
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align"></i> uil-align
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-right-indent-alt"></i> uil-right-indent-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-right-justify"></i> uil-align-right-justify
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-right"></i> uil-border-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-right"></i> uil-align-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-clear"></i> uil-border-clear
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-list-ul"></i> uil-list-ul
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-list-ui-alt"></i> uil-list-ui-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-left-indent"></i> uil-left-indent
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-left-indent-alt"></i> uil-left-indent-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-left"></i> uil-border-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-subject"></i> uil-subject
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-left"></i> uil-align-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bars"></i> uil-bars
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-align-justify"></i> uil-align-justify
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bold"></i> uil-bold
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-text"></i> uil-text
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-underline"></i> uil-underline
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-text-strike-through"></i> uil-text-strike-through
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-italic"></i> uil-italic
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-text-size"></i> uil-text-size
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-text-fields"></i> uil-text-fields
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sigma"></i> uil-sigma
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-right-to-left-text-direction"></i>{' '}
                                    uil-right-to-left-text-direction
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-left-to-right-text-direction"></i>{' '}
                                    uil-left-to-right-text-direction
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Design Tools</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vertical-align-top"></i> uil-vertical-align-top
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vector-square-alt"></i> uil-vector-square-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-object-ungroup"></i> uil-object-ungroup
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-flip-h-alt"></i> uil-flip-h-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-th"></i> uil-th
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-panorama-v"></i> uil-panorama-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vertical-align-center"></i> uil-vertical-align-center
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vertical-distribute-bottom"></i>{' '}
                                    uil-vertical-distribute-bottom
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-flip-v"></i> uil-flip-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vertical-align-bottom"></i> uil-vertical-align-bottom
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pathfinder-unite"></i> uil-pathfinder-unite
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-square-full"></i> uil-square-full
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vector-square"></i> uil-vector-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ruler-combined"></i> uil-ruler-combined
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ruler"></i> uil-ruler
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-panorama-h-alt"></i> uil-panorama-h-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-panorama-h"></i> uil-panorama-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-object-group"></i> uil-object-group
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-line-alt"></i> uil-line-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-layers-alt"></i> uil-layers-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pathfinder"></i> uil-pathfinder
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-resize-square"></i> uil-image-resize-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-flip-h"></i> uil-flip-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-resize-landscape"></i> uil-image-resize-landscape
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-horizontal-distribution-right"></i>{' '}
                                    uil-horizontal-distribution-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-horizontal-distribution-center"></i>{' '}
                                    uil-horizontal-distribution-center
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-horizontal-distribution-left"></i>{' '}
                                    uil-horizontal-distribution-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-horizontal-align-left"></i> uil-horizontal-align-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-horizontal-align-right"></i> uil-horizontal-align-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-horizontal-align-center"></i> uil-horizontal-align-center
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-table"></i> uil-table
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-apps"></i> uil-apps
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-th-slash"></i> uil-th-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-grids"></i> uil-grids
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exclude"></i> uil-exclude
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-crop-alt-rotate-right"></i> uil-crop-alt-rotate-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-crop-alt-rotate-left"></i> uil-crop-alt-rotate-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-crop-alt"></i> uil-crop-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-circle-layer"></i> uil-circle-layer
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-brush-alt"></i> uil-brush-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-flip-v-alt"></i> uil-flip-v-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vertical-distribution-top"></i> uil-vertical-distribution-top
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-vertical-distribution-center"></i>{' '}
                                    uil-vertical-distribution-center
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-border-out"></i> uil-border-out
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-minus-path"></i> uil-minus-path
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-repeat"></i> uil-repeat
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-line-spacing"></i> uil-line-spacing
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shrink"></i> uil-shrink
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-th-large"></i> uil-th-large
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bring-bottom"></i> uil-bring-bottom
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bring-front"></i> uil-bring-front
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compress-v"></i> uil-compress-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compress-lines"></i> uil-compress-lines
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-spin"></i> uil-spin
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compress"></i> uil-compress
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-palette"></i> uil-palette
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Devices</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mouse-alt"></i> uil-mouse-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tablet"></i> uil-tablet
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-print"></i> uil-print
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-desktop-alt"></i> uil-desktop-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mobile-android-alt"></i> uil-mobile-android-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-desktop"></i> uil-desktop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-computer-mouse"></i> uil-computer-mouse
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mobile-android"></i> uil-mobile-android
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-laptop"></i> uil-laptop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mouse"></i> uil-mouse
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-modem"></i> uil-modem
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-hdd"></i> uil-hdd
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-monitor"></i> uil-monitor
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-webcam"></i> uil-webcam
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wifi-router"></i> uil-wifi-router
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-weight"></i> uil-weight
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-processor"></i> uil-processor
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-circuit"></i> uil-circuit
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Education</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dna"></i> uil-dna
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-flask"></i> uil-flask
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-diary"></i> uil-diary
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-diary-alt"></i> uil-diary-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-plus"></i> uil-presentation-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-lines-alt"></i> uil-presentation-lines-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-edit"></i> uil-presentation-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-book-alt"></i> uil-book-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-check"></i> uil-presentation-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-minus"></i> uil-presentation-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-times"></i> uil-presentation-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-science"></i> uil-science
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-atom"></i> uil-atom
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-backpack"></i> uil-backpack
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-notes"></i> uil-notes
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-book"></i> uil-book
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-flask-potion"></i> uil-flask-potion
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cell"></i> uil-cell
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-podium"></i> uil-podium
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-meeting-board"></i> uil-meeting-board
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-award"></i> uil-award
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-medal"></i> uil-medal
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-graduation-hat"></i> uil-graduation-hat
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bell-school"></i> uil-bell-school
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-abacus"></i> uil-abacus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-game-structure"></i> uil-game-structure
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-telescope"></i> uil-telescope
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sperms"></i> uil-sperms
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation-play"></i> uil-presentation-play
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-award-alt"></i> uil-award-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-presentation"></i> uil-presentation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-book-open"></i> uil-book-open
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-notebooks"></i> uil-notebooks
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-robot"></i> uil-robot
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Emoji</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-nerd"></i> uil-nerd
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-smile"></i> uil-smile
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sad-dizzy"></i> uil-sad-dizzy
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-annoyed"></i> uil-annoyed
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sad"></i> uil-sad
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-meh-alt"></i> uil-meh-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-frown"></i> uil-frown
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-silence"></i> uil-silence
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-smile-dizzy"></i> uil-smile-dizzy
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-squint"></i> uil-squint
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-meh"></i> uil-meh
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dizzy-meh"></i> uil-dizzy-meh
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-meh-closed-eye"></i> uil-meh-closed-eye
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sad-squint"></i> uil-sad-squint
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-smile-beam"></i> uil-smile-beam
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sad-crying"></i> uil-sad-crying
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ninja"></i> uil-ninja
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-laughing"></i> uil-laughing
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-emoji"></i> uil-emoji
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sad-cry"></i> uil-sad-cry
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-annoyed-alt"></i> uil-annoyed-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-confused"></i> uil-confused
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-grin"></i> uil-grin
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-smile-wink-alt"></i> uil-smile-wink-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-unamused"></i> uil-unamused
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-smile-squint-wink-alt"></i> uil-smile-squint-wink-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-kid"></i> uil-kid
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-surprise"></i> uil-surprise
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-grin-tongue-wink"></i> uil-grin-tongue-wink
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-grin-tongue-wink-alt"></i> uil-grin-tongue-wink-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-smile-squint-wink"></i> uil-smile-squint-wink
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-silent-squint"></i> uil-silent-squint
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-smile-wink"></i> uil-smile-wink
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sick"></i> uil-sick
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-angry"></i> uil-angry
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">File And Foloder</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-files-landscapes"></i> uil-files-landscapes
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-books"></i> uil-books
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-plus-alt"></i> uil-file-plus-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clipboard-alt"></i> uil-clipboard-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-contract-dollar"></i> uil-file-contract-dollar
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-network"></i> uil-file-network
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-upload"></i> uil-folder-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-upload"></i> uil-file-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-upload-alt"></i> uil-file-upload-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-search-alt"></i> uil-file-search-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-minus"></i> uil-folder-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-share-alt"></i> uil-file-share-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-redo-alt"></i> uil-file-redo-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-shield-alt"></i> uil-file-shield-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-minus-alt"></i> uil-file-minus-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-minus"></i> uil-file-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-medical"></i> uil-folder-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-medical"></i> uil-file-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-lock"></i> uil-folder-lock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-lock-alt"></i> uil-file-lock-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-files-landscapes-alt"></i> uil-files-landscapes-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-landscape-alt"></i> uil-file-landscape-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-landscape"></i> uil-file-landscape
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-question"></i> uil-file-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-question"></i> uil-folder-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-question-alt"></i> uil-file-question-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder"></i> uil-folder
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-exclamation"></i> uil-folder-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-info"></i> uil-folder-info
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-heart"></i> uil-folder-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-heart"></i> uil-file-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-download"></i> uil-folder-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-copy-alt"></i> uil-file-copy-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-alt"></i> uil-file-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-download-alt"></i> uil-file-download-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-edit-alt"></i> uil-file-edit-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-copy-landscape"></i> uil-copy-landscape
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-copy-alt"></i> uil-copy-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-download"></i> uil-file-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-exclamation-alt"></i> uil-file-exclamation-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-exclamation"></i> uil-file-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-copy"></i> uil-copy
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file"></i> uil-file
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-document"></i> uil-document
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-times"></i> uil-folder-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-info-alt"></i> uil-file-info-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-times-alt"></i> uil-file-times-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-blank"></i> uil-file-blank
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clipboard-notes"></i> uil-clipboard-notes
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clipboard-blank"></i> uil-clipboard-blank
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clipboard"></i> uil-clipboard
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-times"></i> uil-file-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-bookmark-alt"></i> uil-file-bookmark-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-block-alt"></i> uil-file-block-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-plus"></i> uil-file-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-check"></i> uil-file-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-plus"></i> uil-folder-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-check"></i> uil-folder-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-check-alt"></i> uil-file-check-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-network"></i> uil-folder-network
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="m-t-0 header-title mb-2">Location And Map</h4>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compass"></i> uil-compass
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-shield"></i> uil-map-marker-shield
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-question"></i> uil-map-marker-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-pin"></i> uil-map-pin
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-pin-alt"></i> uil-map-pin-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-minus"></i> uil-map-marker-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-edit"></i> uil-map-marker-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map"></i> uil-map
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-location-arrow-alt"></i> uil-location-arrow-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-location-point"></i> uil-location-point
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-info"></i> uil-map-marker-info
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-location-arrow"></i> uil-location-arrow
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-navigator"></i> uil-navigator
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-plus"></i> uil-map-marker-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker"></i> uil-map-marker
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-alt"></i> uil-map-marker-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-location-pin-alt"></i> uil-location-pin-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sign-right"></i> uil-sign-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sign-left"></i> uil-sign-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-directions"></i> uil-directions
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sign-alt"></i> uil-sign-alt
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Medical</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-medical-square-full"></i> uil-medical-square-full
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-book-medical"></i> uil-book-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wheelchair-alt"></i> uil-wheelchair-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ambulance"></i> uil-ambulance
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-medical-square"></i> uil-medical-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-medical"></i> uil-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-heart-medical"></i> uil-heart-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-thermometer"></i> uil-thermometer
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-syringe"></i> uil-syringe
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-stretcher"></i> uil-stretcher
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tablets"></i> uil-tablets
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-capsule"></i> uil-capsule
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-medkit"></i> uil-medkit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-medical-drip"></i> uil-medical-drip
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-medical-alt"></i> uil-file-medical-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-prescription-bottle"></i> uil-prescription-bottle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-heartbeat"></i> uil-heartbeat
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-monitor-heart-rate"></i> uil-monitor-heart-rate
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-heart-rate"></i> uil-heart-rate
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ear"></i> uil-ear
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-assistive-listening-systems"></i>{' '}
                                    uil-assistive-listening-systems
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Multimedia</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-share"></i> uil-image-share
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-backward"></i> uil-backward
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-camera"></i> uil-camera
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-music-tune-slash"></i> uil-music-tune-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-scenery"></i> uil-scenery
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-images"></i> uil-images
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-headphones"></i> uil-headphones
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-step-backward"></i> uil-step-backward
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-search"></i> uil-image-search
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-shield"></i> uil-image-shield
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-minus"></i> uil-image-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-play-circle"></i> uil-play-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-edit"></i> uil-image-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pause"></i> uil-pause
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pause-circle"></i> uil-pause-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-block"></i> uil-image-block
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-step-forward"></i> uil-step-forward
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-music-note"></i> uil-music-note
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-music"></i> uil-music
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-lock"></i> uil-image-lock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-question"></i> uil-image-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-v"></i> uil-image-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image"></i> uil-image
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-redo"></i> uil-image-redo
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-headphones-alt"></i> uil-headphones-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-picture"></i> uil-picture
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-forward"></i> uil-forward
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-download"></i> uil-image-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-times"></i> uil-image-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-broken"></i> uil-image-broken
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-film"></i> uil-film
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-previous"></i> uil-previous
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-check"></i> uil-image-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-camera-plus"></i> uil-camera-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-plus"></i> uil-image-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-video"></i> uil-video
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-play"></i> uil-play
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-stop-circle"></i> uil-stop-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-upload"></i> uil-image-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-boombox"></i> uil-boombox
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-skip-forward"></i> uil-skip-forward
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-skip-forward-circle"></i> uil-skip-forward-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-skip-forward-alt"></i> uil-skip-forward-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-step-backward-circle"></i> uil-step-backward-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-step-backward-alt"></i> uil-step-backward-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shutter"></i> uil-shutter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-rss-interface"></i> uil-rss-interface
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-equal-circle"></i> uil-equal-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-airplay"></i> uil-airplay
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-microphone-slash"></i> uil-microphone-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-flower"></i> uil-flower
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ticket"></i> uil-ticket
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mountains"></i> uil-mountains
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bolt-slash"></i> uil-bolt-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sliders-v"></i> uil-sliders-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sliders-v-alt"></i> uil-sliders-v-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-compact-disc"></i> uil-compact-disc
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clapper-board"></i> uil-clapper-board
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shutter-alt"></i> uil-shutter-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-record-audio"></i> uil-record-audio
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-camera-change"></i> uil-camera-change
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-selfie"></i> uil-selfie
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Photography Tools</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-eye"></i> uil-eye
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exposure-alt"></i> uil-exposure-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exposure-increase"></i> uil-exposure-increase
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bright"></i> uil-bright
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-focus-target"></i> uil-focus-target
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-focus-add"></i> uil-focus-add
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-capture"></i> uil-capture
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-focus"></i> uil-focus
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Security</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-keyhole-square"></i> uil-keyhole-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-keyhole-square-full"></i> uil-keyhole-square-full
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lock-open-alt"></i> uil-lock-open-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-keyhole-circle"></i> uil-keyhole-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-unlock"></i> uil-unlock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lock-access"></i> uil-lock-access
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-unlock-alt"></i> uil-unlock-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shield-question"></i> uil-shield-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shield-exclamation"></i> uil-shield-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shield-check"></i> uil-shield-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shield"></i> uil-shield
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-padlock"></i> uil-padlock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shield-slash"></i> uil-shield-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lock-alt"></i> uil-lock-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lock"></i> uil-lock
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Shape</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-heart-alt"></i> uil-heart-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-heart"></i> uil-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-triangle"></i> uil-triangle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-square-shape"></i> uil-square-shape
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-star"></i> uil-star
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-octagon"></i> uil-octagon
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-square"></i> uil-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-circle"></i> uil-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-polygon"></i> uil-polygon
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pentagon"></i> uil-pentagon
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Shopping</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shopping-cart-alt"></i> uil-shopping-cart-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cart"></i> uil-cart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-store-alt"></i> uil-store-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tag-alt"></i> uil-tag-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-label-alt"></i> uil-label-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pricetag-alt"></i> uil-pricetag-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shop"></i> uil-shop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shopping-basket"></i> uil-shopping-basket
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tag"></i> uil-tag
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-shopping-trolley"></i> uil-shopping-trolley
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-label"></i> uil-label
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-store"></i> uil-store
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-archive"></i> uil-archive
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-gift"></i> uil-gift
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Sign And Symbol</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-trademark"></i> uil-trademark
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-closed-captioning"></i> uil-closed-captioning
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wheelchair"></i> uil-wheelchair
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-venus"></i> uil-venus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-trademark-circle"></i> uil-trademark-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-copyright"></i> uil-copyright
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-servicemark"></i> uil-servicemark
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-registered"></i> uil-registered
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-symbol"></i> uil-symbol
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-creative-commons-pd-alt"></i> uil-creative-commons-pd-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-creative-commons-pd"></i> uil-creative-commons-pd
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mars"></i> uil-mars
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-accessible-icon-alt"></i> uil-accessible-icon-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-parking-square"></i> uil-parking-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ban"></i> uil-ban
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Sports</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-basketball"></i> uil-basketball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-football-ball"></i> uil-football-ball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ball"></i> uil-ball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dice-three"></i> uil-dice-three
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-basketball-hoop"></i> uil-basketball-hoop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-club"></i> uil-club
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-trophy"></i> uil-trophy
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-volleyball"></i> uil-volleyball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-game"></i> uil-game
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-heart-sign"></i> uil-heart-sign
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-diamond"></i> uil-diamond
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-spade"></i> uil-spade
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sport"></i> uil-sport
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-kayak"></i> uil-kayak
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dumbbell"></i> uil-dumbbell
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-football"></i> uil-football
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dice-one"></i> uil-dice-one
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dice-four"></i> uil-dice-four
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dice-five"></i> uil-dice-five
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dice-six"></i> uil-dice-six
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dice-two"></i> uil-dice-two
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Time</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock-eight"></i> uil-clock-eight
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock-two"></i> uil-clock-two
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock"></i> uil-clock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-watch"></i> uil-watch
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock-three"></i> uil-clock-three
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-watch-alt"></i> uil-watch-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-stopwatch-slash"></i> uil-stopwatch-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock-nine"></i> uil-clock-nine
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock-seven"></i> uil-clock-seven
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-stopwatch"></i> uil-stopwatch
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock-ten"></i> uil-clock-ten
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clock-five"></i> uil-clock-five
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Transport</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-car-sideview"></i> uil-car-sideview
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bus-alt"></i> uil-bus-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-car-wash"></i> uil-car-wash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ship"></i> uil-ship
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-truck-loading"></i> uil-truck-loading
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-parcel"></i> uil-parcel
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-taxi"></i> uil-taxi
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-subway-alt"></i> uil-subway-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-subway"></i> uil-subway
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bus"></i> uil-bus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-truck"></i> uil-truck
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bus-school"></i> uil-bus-school
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-truck-case"></i> uil-truck-case
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">User Interface</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wifi"></i> uil-wifi
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-car"></i> uil-car
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-volume-up"></i> uil-volume-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-search-alt"></i> uil-search-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-search-plus"></i> uil-search-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wifi-slash"></i> uil-wifi-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-search-minus"></i> uil-search-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bluetooth-b"></i> uil-bluetooth-b
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-calcualtor"></i> uil-calcualtor
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-volume-off"></i> uil-volume-off
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-video-slash"></i> uil-video-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tv-retro"></i> uil-tv-retro
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-trash-alt"></i> uil-trash-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-toggle-off"></i> uil-toggle-off
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-star-half-alt"></i> uil-star-half-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-volume-down"></i> uil-volume-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-utensils-alt"></i> uil-utensils-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-toggle-on"></i> uil-toggle-on
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-yellow"></i> uil-yellow
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bolt"></i> uil-bolt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cog"></i> uil-cog
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-share-alt"></i> uil-share-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bookmark-full"></i> uil-bookmark-full
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-rss"></i> uil-rss
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-trash"></i> uil-trash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sync"></i> uil-sync
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-redo"></i> uil-redo
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-minus"></i> uil-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bookmark"></i> uil-bookmark
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-umbrella"></i> uil-umbrella
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wallet"></i> uil-wallet
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plus-square"></i> uil-plus-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plus"></i> uil-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-package"></i> uil-package
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pen"></i> uil-pen
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-signal"></i> uil-signal
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-signal-alt"></i> uil-signal-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-minus-square-full"></i> uil-minus-square-full
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-volume-mute"></i> uil-volume-mute
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-minus-circle"></i> uil-minus-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-glass-martini-alt"></i> uil-glass-martini-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-minus-square"></i> uil-minus-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-edit"></i> uil-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ellipsis-h"></i> uil-ellipsis-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-microphone"></i> uil-microphone
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-link-alt"></i> uil-link-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ellipsis-v"></i> uil-ellipsis-v
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-search"></i> uil-search
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-volume"></i> uil-volume
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-link-h"></i> uil-link-h
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-thumbs-up"></i> uil-thumbs-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-layer-group"></i> uil-layer-group
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-globe"></i> uil-globe
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-keyboard"></i> uil-keyboard
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-link"></i> uil-link
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-home"></i> uil-home
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-restaurant"></i> uil-restaurant
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-home-alt"></i> uil-home-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exclamation-octagon"></i> uil-exclamation-octagon
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-filter"></i> uil-filter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-question-circle"></i> uil-question-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-favorite"></i> uil-favorite
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-info-circle"></i> uil-info-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exclamation-triangle"></i> uil-exclamation-triangle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-thumbs-down"></i> uil-thumbs-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-calender"></i> uil-calender
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exclamation-circle"></i> uil-exclamation-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-edit-alt"></i> uil-edit-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-box"></i> uil-box
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-multiply"></i> uil-multiply
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-times-square"></i> uil-times-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-times-circle"></i> uil-times-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sim-card"></i> uil-sim-card
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-check-square"></i> uil-check-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-times"></i> uil-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-paperclip"></i> uil-paperclip
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cube"></i> uil-cube
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-battery-empty"></i> uil-battery-empty
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-battery-bolt"></i> uil-battery-bolt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-adjust-half"></i> uil-adjust-half
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-check"></i> uil-check
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bolt-alt"></i> uil-bolt-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-check-circle"></i> uil-check-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bullseye"></i> uil-bullseye
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-adjust-circle"></i> uil-adjust-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plus-circle"></i> uil-plus-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-adjust-alt"></i> uil-adjust-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-at"></i> uil-at
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-link-broken"></i> uil-link-broken
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-brightness"></i> uil-brightness
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-brightness-minus"></i> uil-brightness-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-brightness-half"></i> uil-brightness-half
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-brightness-low"></i> uil-brightness-low
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-brightness-empty"></i> uil-brightness-empty
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-brightness-plus"></i> uil-brightness-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-adjust"></i> uil-adjust
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sun"></i> uil-sun
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-backspace"></i> uil-backspace
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-keyboard-alt"></i> uil-keyboard-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-key-skeleton-alt"></i> uil-key-skeleton-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-space-key"></i> uil-space-key
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-keyboard-hide"></i> uil-keyboard-hide
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-keyboard-show"></i> uil-keyboard-show
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-key-skeleton"></i> uil-key-skeleton
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-swatchbook"></i> uil-swatchbook
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-history"></i> uil-history
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cancel"></i> uil-cancel
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-auto-flash"></i> uil-auto-flash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plane"></i> uil-plane
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plane-departure"></i> uil-plane-departure
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mobile-vibrate"></i> uil-mobile-vibrate
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-glass"></i> uil-glass
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-voicemail"></i> uil-voicemail
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-voicemail-rectangle"></i> uil-voicemail-rectangle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-trees"></i> uil-trees
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plane-fly"></i> uil-plane-fly
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sync-slash"></i> uil-sync-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sync-exclamation"></i> uil-sync-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sign-out-alt"></i> uil-sign-out-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tachometer-fast"></i> uil-tachometer-fast
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-exit"></i> uil-exit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sign-in-alt"></i> uil-sign-in-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-entry"></i> uil-entry
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-upload"></i> uil-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-refresh"></i> uil-refresh
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-power"></i> uil-power
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-food"></i> uil-food
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-archive-alt"></i> uil-archive-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-newspaper"></i> uil-newspaper
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-history-alt"></i> uil-history-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plane-arrival"></i> uil-plane-arrival
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-life-ring"></i> uil-life-ring
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-coffee"></i> uil-coffee
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-glass-martini"></i> uil-glass-martini
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-anchor"></i> uil-anchor
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lamp"></i> uil-lamp
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-swimmer"></i> uil-swimmer
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-building"></i> uil-building
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-crockery"></i> uil-crockery
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bed"></i> uil-bed
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-message"></i> uil-message
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-rope-way"></i> uil-rope-way
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-feedback"></i> uil-feedback
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-pump"></i> uil-pump
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-rotate-360"></i> uil-rotate-360
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-utensils"></i> uil-utensils
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-water-glass"></i> uil-water-glass
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bed-double"></i> uil-bed-double
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-baby-carriage"></i> uil-baby-carriage
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-external-link-alt"></i> uil-external-link-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-card-atm"></i> uil-card-atm
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tear"></i> uil-tear
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-football-american"></i> uil-football-american
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-glass-tea"></i> uil-glass-tea
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-streering"></i> uil-streering
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wrench"></i> uil-wrench
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-layers"></i> uil-layers
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-water-drop-slash"></i> uil-water-drop-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tv-retro-slash"></i> uil-tv-retro-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-calendar-slash"></i> uil-calendar-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-print-slash"></i> uil-print-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-eye-slash"></i> uil-eye-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-slash"></i> uil-image-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-image-alt-slash"></i> uil-image-alt-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mobey-bill-slash"></i> uil-mobey-bill-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-android-phone-slash"></i> uil-android-phone-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-alt-slash"></i> uil-comment-alt-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-comment-slash"></i> uil-comment-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-map-marker-slash"></i> uil-map-marker-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-lock-slash"></i> uil-lock-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-folder-slash"></i> uil-folder-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-filter-slash"></i> uil-filter-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-glass-martini-alt-slash"></i> uil-glass-martini-alt-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-slash"></i> uil-file-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-file-lanscape-slash"></i> uil-file-lanscape-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-car-slash"></i> uil-car-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-camera-slash"></i> uil-camera-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bell-slash"></i> uil-bell-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-plug"></i> uil-plug
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-layers-slash"></i> uil-layers-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-desktop-slash"></i> uil-desktop-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-layer-group-slash"></i> uil-layer-group-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-desktop-alt-slash"></i> uil-desktop-alt-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bell"></i> uil-bell
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-bag-slash"></i> uil-bag-slash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-10-plus"></i> uil-10-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-12-plus"></i> uil-12-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-13-plus"></i> uil-13-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-16-plus"></i> uil-16-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-21-plus"></i> uil-21-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-17-plus"></i> uil-17-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-0-plus"></i> uil-0-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-3-plus"></i> uil-3-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-6-plus"></i> uil-6-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-ankh"></i> uil-ankh
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-archway"></i> uil-archway
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-18-plus"></i> uil-18-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-asterisk"></i> uil-asterisk
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-dashboard"></i> uil-dashboard
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-balance-scale"></i> uil-balance-scale
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Users</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-plus"></i> uil-user-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-square"></i> uil-user-square
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user"></i> uil-user
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-exclamation"></i> uil-user-exclamation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-circle"></i> uil-user-circle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-users-alt"></i> uil-users-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-location"></i> uil-location
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-minus"></i> uil-user-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-times"></i> uil-user-times
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-book-reader"></i> uil-book-reader
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-user-check"></i> uil-user-check
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h5 className="m-t-0 header-title mb-2">Weather</h5>

                            <div className="row icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-snowflake"></i> uil-snowflake
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-clouds"></i> uil-clouds
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-sun-rain-alt"></i> uil-cloud-sun-rain-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-fahrenheit"></i> uil-fahrenheit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-temperature-quarter"></i> uil-temperature-quarter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-showers-heavy"></i> uil-cloud-showers-heavy
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-snowflake-alt"></i> uil-snowflake-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-sun-rain"></i> uil-cloud-sun-rain
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-wind"></i> uil-wind
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-wind"></i> uil-cloud-wind
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-tornado"></i> uil-tornado
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud"></i> uil-cloud
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-sun"></i> uil-cloud-sun
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-sun-hail"></i> uil-cloud-sun-hail
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-temperature-three-quarter"></i> uil-temperature-three-quarter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-moon-hail"></i> uil-cloud-moon-hail
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-thunderstorm-sun"></i> uil-thunderstorm-sun
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-temperature-empty"></i> uil-temperature-empty
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-thunderstorm"></i> uil-thunderstorm
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-snow-flake"></i> uil-snow-flake
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-thunderstorm-moon"></i> uil-thunderstorm-moon
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-raindrops"></i> uil-raindrops
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-raindrops-alt"></i> uil-raindrops-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-rain"></i> uil-cloud-rain
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-sun-tear"></i> uil-cloud-sun-tear
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-rain-sun"></i> uil-cloud-rain-sun
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-moon-showers"></i> uil-cloud-moon-showers
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-forecastcloud-moon-tear"></i> uil-forecastcloud-moon-tear
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-moon-rain"></i> uil-cloud-moon-rain
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-showers-alt"></i> uil-cloud-showers-alt
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-showers"></i> uil-cloud-showers
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-hail"></i> uil-cloud-hail
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-moon"></i> uil-cloud-moon
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-drizzle"></i> uil-cloud-drizzle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-moon"></i> uil-moon
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-moonset"></i> uil-moonset
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-windsock"></i> uil-windsock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-moon-eclipse"></i> uil-moon-eclipse
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-celsius"></i> uil-celsius
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-sun-meatball"></i> uil-cloud-sun-meatball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-moon-meatball"></i> uil-cloud-moon-meatball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-meatball"></i> uil-cloud-meatball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-temperature-half"></i> uil-temperature-half
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-temperature-minus"></i> uil-temperature-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-temperature-plus"></i> uil-temperature-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-temperature"></i> uil-temperature
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-cloud-set"></i> uil-cloud-set
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-n-a"></i> uil-n-a
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-mountains-sun"></i> uil-mountains-sun
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-water"></i> uil-water
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-rainbow"></i> uil-rainbow
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-desert"></i> uil-desert
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="uil uil-sunset"></i> uil-sunset
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Unicons;
