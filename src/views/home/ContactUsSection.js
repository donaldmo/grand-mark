import React from 'react'

export default function ContactUsSection() {
  return (
    <section class="ds section_padding_70">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h2 class="big margin_0">Contact Us</h2>
            <h2 class="muellerhoff topmargin_5 bottommargin_50 highlight">Contact Form</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <p class="bottommargin_20">
              <span class="grey fontsize_12 text-uppercase bold">address:</span>
              <br /> Jackson’s Street 567, San Diego, California, United States
            </p>
            <p class="bottommargin_20">
              <span class="grey fontsize_12 text-uppercase bold">Call us:</span>
              <br /> 8 (800) 456-2698, 8 (800) 456-2643
            </p>
            <p class="bottommargin_0">
              <span class="grey fontsize_12 text-uppercase bold">Email:</span>
              <br />
              <a href="mainto:agency@support.com">
                <em><span class="__cf_email__" data-cfemail="e28385878c819ba2919792928d9096cc818d8f">[email&#160;protected]</span></em>
              </a>
            </p>
          </div>
          <div class="col-md-8">
            <form class="contact-form row" method="post" action="https://html.modernwebtemplates.com/">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name" class="sr-only">Full Name
                    <span class="required">*</span>
                  </label>
                  <input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control with-icon" placeholder="" />
                  <i class="rt-icon2-user"></i>
                </div>
                <div class="form-group">
                  <label for="email" class="sr-only">Email address
                    <span class="required">*</span>
                  </label>
                  <input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control with-icon" placeholder="" />
                  <i class="rt-icon2-mail"></i>
                </div>
                <div class="form-group">
                  <label for="phone" class="sr-only">Phone number
                    <span class="required">*</span>
                  </label>
                  <input type="text" aria-required="true" size="30" value="" name="phone" id="phone" class="form-control with-icon" placeholder="" />
                  <i class="rt-icon2-phone5"></i>
                </div>
                <div class="form-group bottommargin_0">
                  <label for="theme" class="sr-only">Message theme
                    <span class="required">*</span>
                  </label>
                  <input type="text" aria-required="true" size="30" value="" name="theme" id="theme" class="form-control with-icon" placeholder="" />
                  <i class="rt-icon2-bulb"></i>
                </div>

              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="message" class="sr-only">Message</label>
                  <textarea aria-required="true" rows="6" cols="45" name="message" id="message" class="form-control with-icon" placeholder=""></textarea>
                  <i class="rt-icon2-pen"></i>
                </div>

                <button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button color1 bottommargin_0">Send</button>
                <button type="reset" id="contact_form_clear" name="contact_clear" class="theme_button inverse bottommargin_0">Clear</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
