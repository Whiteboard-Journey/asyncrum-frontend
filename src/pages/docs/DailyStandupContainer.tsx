import { Row, Col } from 'react-bootstrap';
import { DailyStandup } from './types';
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMoment } from './hooks';
import { readAllDailyStandups as readAllDailyStandupsAPI } from 'helpers';
import { APICore } from 'helpers/api/apiCore';
import DailyStandupCard from './DailyStandupCard';
import CreateRecordButton from './CreateRecordButton';

const DailyStandupContainer = () => {
  const [dailyStandups, setDailyStandups] = useState<DailyStandup[]>([]);
  const [dailyStandupLoading, setDailyStandupLoading] = useState<boolean>(true);

  const carouselRef = useRef<Carousel>(null);

  const { convertDateTime } = useMoment();

  const api = new APICore();
  const user = api.getLoggedInUser();
  const scope = 'team';

  const readAllDailyStandups = async () => {
    const pageIndex = 0;
    const readAllDailyStandupsAPIResponse = await readAllDailyStandupsAPI({ scope, pageIndex });
    for (const record of readAllDailyStandupsAPIResponse.data.records) {
      if (
        moment().diff(moment(convertDateTime(record.createdDate)), 'hours') > 24 &&
        record.seenMemberIdGroup?.indexOf(user.id) > -1
      ) {
        continue;
      }
      if (
        dailyStandups.at(-1) &&
        dailyStandups.at(-1)?.author === record.author.fullname &&
        dailyStandups.at(-1)?.title.slice(0, 13) === record.title.slice(0, 13)
      ) {
        if (record.title.slice(-6) === 'screen') {
          dailyStandups.at(-1)?.id.push(record.id);
          (dailyStandups.at(-1) as DailyStandup).screenRecordFileUrl = record.recordFileUrl;
        } else {
          dailyStandups.at(-1)?.id.push(record.id);
          (dailyStandups.at(-1) as DailyStandup).camRecordFileUrl = record.recordFileUrl;
        }
      } else {
        if (record.title.slice(-6) === 'screen') {
          dailyStandups.push({
            id: [record.id],
            author: record.author.fullname,
            title: record.title,
            profileImageUrl: record.author.profileImageUrl,
            createdDate: record.createdDate,
            camRecordFileUrl: '',
            screenRecordFileUrl: record.recordFileUrl,
            seen: record.seenMemberIdGroup?.indexOf(user.id) > -1 ? true : false,
          });
        } else {
          dailyStandups.push({
            id: [record.id],
            author: record.author.fullname,
            title: record.title,
            profileImageUrl: record.author.profileImageUrl,
            createdDate: record.createdDate,
            camRecordFileUrl: record.recordFileUrl,
            screenRecordFileUrl: '',
            seen: record.seenMemberIdGroup?.indexOf(user.id) > -1 ? true : false,
          });
        }
      }
    }
    setDailyStandups(dailyStandups.reverse());
    setDailyStandupLoading(false);
    let slide = dailyStandups.findIndex((dailyStandup) => !dailyStandup.seen);
    slide = slide >= 0 ? slide : 0;
    if (carouselRef && carouselRef.current) {
      carouselRef.current.goToSlide(slide);
    }
  };

  useEffect(() => {
    readAllDailyStandups();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Daily Standups</h4>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <CreateRecordButton />
        </Col>
      </Row>
      <Row>
        {!dailyStandupLoading && (
          <Carousel
            ref={carouselRef}
            additionalTransfrom={0}
            arrows
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 6,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {dailyStandups.map((dailyStandup: DailyStandup, i: number) => {
              return (
                <div key={i}>
                  <DailyStandupCard dailyStandup={dailyStandup} />
                </div>
              );
            })}
          </Carousel>
        )}
      </Row>
    </>
  );
};

export default DailyStandupContainer;
