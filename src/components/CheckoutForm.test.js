import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstNameField = screen.getByLabelText(/First Name:/i);
    const lastNameField = screen.getByLabelText(/Last Name:/i);
    const addressField = screen.getByLabelText(/Address:/i);
    const cityField = screen.getByLabelText(/City:/i);
    const stateField =screen.getByLabelText(/State:/i);
    const zipField = screen.getByLabelText(/Zip:/i);
    

    userEvent.type(firstNameField, "Levi");
    userEvent.type(lastNameField, "Smith");
    userEvent.type(addressField, "poke");
    userEvent.type(cityField, "Buhl");
    userEvent.type(stateField, "Idaho");
    userEvent.type(zipField, "83316");
   

    const submitButton = await screen.findByRole('button');
    userEvent.click(submitButton);

    await waitFor(()=>{
        const firstNameDisplay = screen.queryByText(/Levi/i);
        const lastNameDisplay = screen.queryByText(/Smith/i);
        const addressDisplay = screen.queryByText(/poke/i);
        const cityDisplay = screen.queryByText(/Buhl/i);
        const stateDisplay = screen.queryByText(/Idaho/i);
        const zipDisplay = screen.queryByText(/83316/i);
        const messageDisplay = screen.queryByTestId(/successMessage/i)

       
        expect(firstNameDisplay).toBeInTheDocument();
        expect(lastNameDisplay).toBeInTheDocument();
        expect(addressDisplay).toBeInTheDocument();
        expect(cityDisplay).toBeInTheDocument();
        expect(stateDisplay).toBeInTheDocument();
        expect(zipDisplay).toBeInTheDocument();
        expect(messageDisplay).toBeInTheDocument();
    });
});
