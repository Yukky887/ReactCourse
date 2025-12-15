import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, useLocation } from 'react-router';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { PaymentSummary } from './PaymentSummary';

vi.mock("axios");

describe("PaymentSummary component", () => {
    let paymentSummary;
    let loadCart;
    let user;

    beforeEach(() => {
        paymentSummary = {
            productCostCents: 28580,
            shippingCostCents: 0,
            totalCostBeforeTaxCents: 28580,
            taxCents: 2858,
            totalCostCents: 31438
        };

        loadCart = vi.fn();
        user = userEvent.setup();
    });

    it("displays the correct details", async () => {
        render(
            <MemoryRouter>
                <PaymentSummary
                    paymentSummary={paymentSummary}
                    loadCart={loadCart}
                />
            </MemoryRouter>
        );

        expect(
            screen.getByTestId("payment-summary-product-cost")
        ).toHaveTextContent("$285.80");

        expect(
            screen.getByTestId("payment-summary-shipping-cost")
        ).toHaveTextContent("$0.00");

        expect(
            screen.getByTestId("payment-summary-before-tax")
        ).toHaveTextContent("$285.80");

        expect(
            screen.getByTestId("payment-summary-tax")
        ).toHaveTextContent("$28.58");

        expect(
            screen.getByTestId("payment-summary-total")
        ).toHaveTextContent("$314.38");
    });

    it("places an order", async () => {
        function Location() {
            const location = useLocation();
            return <div data-testid="url-path">{location.pathname}</div>;
        }

        render(
            <MemoryRouter>
                <PaymentSummary
                    paymentSummary={paymentSummary}
                    loadCart={loadCart}
                />
                <Location />
            </MemoryRouter>
        );
        const placeOrderButton = screen.getByTestId("place-order-button");
        await user.click(placeOrderButton);

        expect(axios.post).toHaveBeenCalledWith('api/orders');
        expect(loadCart).toHaveBeenCalled();
        expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');
    });
});