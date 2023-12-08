import { Application } from './application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
  test('form render correctly', () => {
    render(<Application />);
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const paraElement = screen.getByText('All fields are mandatory');
    expect(paraElement).toBeInTheDocument();

    const valElement = screen.getByDisplayValue('Vishwas');
    expect(valElement).toBeInTheDocument();

    const altElement = screen.getByAltText('Submit');
    expect(altElement).toBeInTheDocument();

    const titleElement = screen.getByTitle('close');
    expect(titleElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const checkElement = screen.getByRole('checkbox');
    expect(checkElement).toBeInTheDocument();

    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeInTheDocument();
  });
});
