// @flow
import React from 'react';

type CartItems = {
    id: number,
    image: string,
    name: string,
    size: string,
    color: string,
    price: number,
    qty: number,
    total: number,
};

type SummaryProps = {
    cart: {
        items: Array<CartItems>,
        sub_total: number,
        shipping: number,
        total: number,
    },
};

// Summary
const Summary = (props: SummaryProps): React$Element<React$FragmentType> => {
    const cart = props.cart || {};

    return (
        <>
            <div className="border p-3 mt-4 mt-lg-0 rounded">
                <h4 className="header-title mb-3">Order Summary</h4>

                <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                        <tbody>
                            {cart.items.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                title="contact-img"
                                                className="rounded me-2"
                                                height="48"
                                            />
                                            <p className="m-0 d-inline-block align-middle">
                                                <a
                                                    href="apps-ecommerce-products-details.html"
                                                    className="text-body fw-semibold">
                                                    {item.name}
                                                </a>
                                                <br />
                                                <small>
                                                    {item.qty} x ${item.price.toFixed(2)}
                                                </small>
                                            </p>
                                        </td>
                                        <td className="text-end">${item.total.toFixed(2)}</td>
                                    </tr>
                                );
                            })}

                            <tr className="text-end">
                                <td>
                                    <h6 className="m-0">Sub Total:</h6>
                                </td>
                                <td className="text-end">${cart.sub_total.toFixed(2)}</td>
                            </tr>
                            <tr className="text-end">
                                <td>
                                    <h6 className="m-0">Shipping:</h6>
                                </td>
                                <td className="text-end">{cart.shipping ? '$' + cart.shipping.toFixed(2) : 'FREE'}</td>
                            </tr>
                            <tr className="text-end">
                                <td>
                                    <h5 className="m-0">Total:</h5>
                                </td>
                                <td className="text-end fw-semibold">${cart.total.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Summary;
