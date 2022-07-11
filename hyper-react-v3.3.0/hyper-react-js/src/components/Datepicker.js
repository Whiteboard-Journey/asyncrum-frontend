// @flow
import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';

type DatepickerInputProps = {
    onClick?: () => void,
    value?: string,
};

/* Datepicker with Input */
const DatepickerInput = forwardRef((props: DatepickerInputProps, ref) => {
    const onDateValueChange = () => {
        console.log('date value changed');
    };
    return (
        <input
            type="text"
            className="form-control date"
            onClick={props.onClick}
            value={props.value}
            onChange={onDateValueChange}
            ref={ref}
        />
    );
});

type DatepickerInputWithAddonProps = {
    onClick?: () => void,
    value?: string,
};
/* Datepicker with Addon Input */
const DatepickerInputWithAddon = forwardRef((props: DatepickerInputWithAddonProps, ref) => (
    <div className="input-group" ref={ref}>
        <input
            type="text"
            className="form-control form-control-light"
            onClick={props.onClick}
            value={props.value}
            readOnly
        />
        <div className="input-group-append">
            <span className="input-group-text bg-primary border-primary text-white">
                <i className="mdi mdi-calendar-range font-13"></i>
            </span>
        </div>
    </div>
));

type HyperDatepickerProps = {
    value: Date,
    onChange: (date: any) => void,
    hideAddon?: boolean,
    inputClass?: string,
    dateFormat?: string,
    minDate?: Date,
    maxDate?: Date,
    showTimeSelect?: boolean,
    tI?: number,
    timeCaption?: string,
    showTimeSelectOnly?: boolean,
    monthsShown?: number,
    inline?: boolean,
};

const HyperDatepicker = (props: HyperDatepickerProps): React$Element<any> => {
    // handle custom input
    const input = (props.hideAddon || false) === true ? <DatepickerInput /> : <DatepickerInputWithAddon />;

    return (
        <>
            {/* date picker control */}
            <DatePicker
                customInput={input}
                timeIntervals={props.tI}
                className={classNames('form-control', props.inputClass)}
                selected={props.value}
                onChange={(date) => props.onChange(date)}
                showTimeSelect={props.showTimeSelect}
                timeFormat="hh:mm a"
                timeCaption={props.timeCaption}
                dateFormat={props.dateFormat || 'MM/dd/yyyy'}
                minDate={props.minDate}
                maxDate={props.maxDate}
                monthsShown={props.monthsShown}
                showTimeSelectOnly={props.showTimeSelectOnly}
                inline={props.inline}
                autoComplete="off"
            />
        </>
    );
};

export default HyperDatepicker;
