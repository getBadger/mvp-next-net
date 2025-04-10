import React from 'react';
import Script from 'next/script';

const WaitlistForm: React.FC = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us20.list-manage.com/subscribe/post?u=d87324bb0fccf652d78a78b55&amp;id=d86aba4508&amp;f_id=009bc4e3f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self" // Changed to submit on the same page
      >
        <div id="mc_embed_signup_scroll">
          {/* <h2 style={{ textAlign: 'center', color: '#333' }}>Join our Waitlist!</h2> */}
          <div className="indicates-required" style={{ marginBottom: '10px', fontSize: '14px' }}>
            <span className="asterisk" style={{ color: 'red' }}>*</span> indicates required
          </div>

          <div className="mc-field-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="mce-USERTYPE" style={{ display: 'block', marginBottom: '5px' }}>
              I am a... <span className="asterisk" style={{ color: 'red' }}>*</span>
            </label>
            <select
              name="USERTYPE"
              className="required w-full p-2 border border-gray-300 rounded bg-white"
              id="mce-USERTYPE"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            >
              <option value="Digital Marketer">Digital Marketer</option>
              <option value="Savvy Shopper">Savvy Shopper</option>
              <option value="Potential Partner">Potential Partner</option>
            </select>
          </div>

          <div className="mc-field-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="mce-EMAIL" style={{ display: 'block', marginBottom: '5px' }}>
              Email Address <span className="asterisk" style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email w-full p-2 border border-gray-300 rounded bg-white"
              id="mce-EMAIL"
              required
              defaultValue=""
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>

          <div className="mc-field-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="mce-FNAME" style={{ display: 'block', marginBottom: '5px' }} >
              Name <span className="asterisk" style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              name="FNAME"
              className="required text w-full p-2 border border-gray-300 rounded bg-white"
              id="mce-FNAME"
              defaultValue=""
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <span
              id="mce-FNAME-HELPERTEXT"
              className="helper_text "
              style={{
                display: 'block',
                marginTop: '5px',
                fontSize: '12px',
                color: '#666',
              }}
            >

            </span>
          </div>

          <div hidden>
            <input type="hidden" name="tags" value="3073767" />
          </div>

          <div id="mce-responses" className="clear foot" style={{ marginTop: '15px' }}>
            <div
              className="response"
              id="mce-error-response"
              style={{ display: 'none', color: 'red', fontSize: '14px' }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: 'none', color: 'green', fontSize: '14px' }}
            ></div>
          </div>

          {/* Bot protection */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_d87324bb0fccf652d78a78b55_d86aba4508"
              tabIndex={-1}
              defaultValue=""
            />
          </div>

          <div className="optionalParent" style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="clear foot">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Join Waitlist"
                style={{
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              />
            </div>
          </div>
        </div>
      </form>
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="afterInteractive"
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[7] = 'USERTYPE';
              ftypes[7] = 'dropdown';
              fnames[0] = 'EMAIL';
              ftypes[0] = 'email';
              fnames[1] = 'FNAME';
              ftypes[1] = 'text';
              fnames[6] = 'COMPANY';
              ftypes[6] = 'text';
              fnames[2] = 'LNAME';
              ftypes[2] = 'text';
              fnames[3] = 'ADDRESS';
              ftypes[3] = 'address';
              fnames[4] = 'PHONE';
              ftypes[4] = 'phone';
              fnames[5] = 'BIRTHDAY';
              ftypes[5] = 'birthday';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `,
        }}
      ></script>
    </div>
  );
};

export default WaitlistForm;