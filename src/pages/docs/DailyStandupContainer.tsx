import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDailyStandup } from './hooks';
import { DailyStandup } from './types';
import DailyStandupCard from './DailyStandupCard';
import CreateRecordButton from './CreateRecordButton';

const DailyStandupContainer = () => {
  const { carouselRef, dailyStandups, dailyStandupLoading } = useDailyStandup();

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
            slidesToSlide={1}>
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
