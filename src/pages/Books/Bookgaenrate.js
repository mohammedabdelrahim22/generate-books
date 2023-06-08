import React, { useState } from 'react';
import GitImage from './spinner.gif';
import './style.css'; // Import the style.css file
// import Section1 from '../../images/section1.webp'
import Books1 from '../../images/books1.jpg';
import Books2 from '../../images/books2.jpg';
import Books3 from '../../images/boooks3.jpg';

function BookGaenrate() {
  // State for user input
  const [userInput, setUserInput] = useState('');

  // State for loading spinner visibility
  const [loading, setLoading] = useState(false);

  // State for generated description
  const [description, setDescription] = useState('');

  // State for displaying gradual text
  const [displayedDescription, setDisplayedDescription] = useState('');

  // State for button disabled status
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Function to handle button click event
  const generateDescription = () => {
    // Disable the button
    setButtonDisabled(true);

    // Show loading spinner
    setLoading(true);

    // Send the user input to the server-side code using AJAX or fetch API
    fetch('http://localhost:5000/generate-description2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userInput: userInput })
    })
      .then(response => response.json())
      .then(data => {
        // Hide loading spinner
        setLoading(false);

        // Set the generated description
        setDescription(data.description);

        // Display description gradually
        displayGradually(data.description);
      })
      .catch(error => {
        // Hide loading spinner
        setLoading(false);

        // Display error message
        setDescription('Error: ' + error);
      });
  };

  // Function to display description gradually
  const displayGradually = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedDescription(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
        // Enable the button after the text is displayed
        setButtonDisabled(false);
      }
    }, 100);
  };

  return (
    <div className='overflow-hidden'>
      <div className="center-align">
        <div className="input-wrapper">
          <div className='d-flex w-100 text_box'>
            <input
              type="text"
              id="book-input"
              placeholder='Enter a book description or keywords'
              value={userInput}
              onChange={event => setUserInput(event.target.value)}
            />
            <button
              id="generate-btn"
              className=""
              onClick={generateDescription}
              disabled={buttonDisabled}
            >
              {loading ? 'Loading...' : 'Generate'}
            </button>
          </div>

        </div>
        {loading && (
          <div id="loading-spinner">
            <img src={GitImage} alt="Loading" width="50" height="50" />
            <p>Loading...</p>
          </div>
        )}

        <div id="result">
          <p>{displayedDescription}</p>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <div className=''>
              <h3 className=''>Websites</h3>
            </div>
          </div>
        </div>
        <div className="row row_tow mt-4">
          <div className="col-sm-4">
            <div className="card card_book">
              <div className='overlay'> </div>
              <div className='text d-flex'>
                <div className='text-center'>
                  <h3 className='text-white'>
                    <a href="#" className='links'>
                      Full Stack Development
                    </a>
                  </h3>
                </div>
              </div>
              <div className='image_section'>
                <img src={Books3} className="card-img-top" alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card card_book">
              <div className='overlay'> </div>
              <div className='text d-flex'>
                <div className='text-center'>
                  <h3 className='text-white'>
                    <a href="#" className='links'>
                      Full Stack Development
                    </a>
                  </h3>
                </div>
              </div>
              <div className='image_section'>
                <img src={Books2} className="card-img-top" alt="Image 3" />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card card_book">
              <div className='overlay'> </div>
              <div className='text d-flex'>
                <div className='text-center'>
                  <h3 className='text-white'>
                    <a href="#" className='links'>
                      Full Stack Development
                    </a>
                  </h3>
                </div>
              </div>
              <div className='image_section'>
                <img src={Books1} className="card-img-top" alt="Image 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookGaenrate;
