import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router';
import { PaymentSummary } from './PaymentSummary';

describe("PaymentSummary component", () => {
    let paymentSummary;
    let loadCart;

    beforeEach(() => {
        paymentSummary = {
            productCostCents: 28580,
            shippingCostCents: 0,
            totalCostBeforeTaxCents: 28580,
            taxCents: 2858,
            totalCostCents: 31438
        };

        loadCart = vi.fn();
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
});