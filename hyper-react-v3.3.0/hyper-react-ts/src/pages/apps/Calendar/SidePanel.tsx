import classNames from 'classnames';
import { externalEvents } from './data';

const SidePanel = () => {
    return (
        <>
            <div id="external-events" className="m-t-20">
                <br />
                <p className="text-muted">Drag and drop your event or click in the calendar</p>
                {/* external events */}
                {(externalEvents || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })}
            </div>

            <div className="mt-5 d-none d-xl-block">
                <h5 className="text-center">How It Works ?</h5>

                <ul className="ps-3">
                    <li className="text-muted mb-3">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </li>
                    <li className="text-muted mb-3">
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                        the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                    </li>
                    <li className="text-muted mb-3">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SidePanel;
