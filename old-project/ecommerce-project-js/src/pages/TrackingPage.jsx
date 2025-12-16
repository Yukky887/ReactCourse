import { Header } from "../components/Header";
import "./TrackingPage.css";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export function TrackingPage({ cart }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchTrackingData = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        }

        fetchTrackingData();
    }, [orderId]);

    if (!order) {
        return <div>Loading...</div>;
    }

    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    })

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs *1.0243;
    const deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
    console.log(deliveryPercent)

    if (deliveryPercent < 33) {
        var isPreparing = true;
        var isShipped = false;
        var isDelivered = false;
    } else if (deliveryPercent >= 33 && deliveryPercent < 100) {
        isPreparing = false;
        isShipped = true;
        isDelivered = false;
    } else {
        isPreparing = false;
        isShipped = false;
        isDelivered = true;
    }

    return (
        <>
            <title>Order Tracking</title>

            <link rel="icon" type="image/svg+xml" href="./images/tracking-favicon.png" />

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to={`/orders/${orderId}?expand=products`}>
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${isPreparing ? 'current-status' : ''}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${isShipped ? 'current-status' : ''}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${isDelivered ? 'current-status' : ''}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${deliveryPercent}%`}}></div>
                    </div>
                </div>

            </div>
        </>
    );
}