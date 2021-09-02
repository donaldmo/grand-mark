import React from 'react'

export default function PageTestimonials() {
  return (
    <section className="ds page_testimonials">
    <div className="container">

      <div className="row topmargin_40 bottommargin_40">
        <div className="col-sm-12 text-center">
          <h2>
            <span className="big">Our Agency</span>
            <br />
            <span className="highlight muellerhoff">Testimonials &amp; Quotes</span>
          </h2>

          <div className="testimonials-body">
            <blockquote className="blockquote-big" data-slide="1">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
            </blockquote>
            <blockquote className="blockquote-big tester" data-slide="2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            </blockquote>
            <blockquote className="blockquote-big" data-slide="3">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
            </blockquote>
            <blockquote className="blockquote-big" data-slide="4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
            </blockquote>
            <blockquote className="blockquote-big" data-slide="5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </blockquote>
          </div>

          <div className="owl-carousel testimonials-carousel" data-margin="0" data-nav="true" data-loop="true" data-center="true" data-items="3" data-responsive-lg="3" data-responsive-md="3" data-responsive-sm="3" data-responsive-xs="3">

            <div className="testimonial">
              <div className="author-photo">
                <img src="images/team/01.jpg" alt="" />
              </div>
              <div className="author-meta">
                <span className="bold highlight">Carl Johnson</span>
                <br /> Manager
              </div>
            </div>

            <div className="testimonial">
              <div className="author-photo">
                <img src="images/team/02.jpg" alt="" />
              </div>
              <div className="author-meta">
                <span className="bold highlight">Carl Johnson</span>
                <br /> Manager
              </div>
            </div>

            <div className="testimonial">
              <div className="author-photo">
                <img src="images/team/03.jpg" alt="" />
              </div>
              <div className="author-meta">
                <span className="bold highlight">Carl Johnson</span>
                <br /> Manager
              </div>
            </div>

            <div className="testimonial">
              <div className="author-photo">
                <img src="images/team/04.jpg" alt="" />
              </div>
              <div className="author-meta">
                <span className="bold highlight">Carl Johnson</span>
                <br /> Manager
              </div>
            </div>

            <div className="testimonial">
              <div className="author-photo">
                <img src="images/team/05.jpg" alt="" />
              </div>
              <div className="author-meta">
                <span className="bold highlight">Carl Johnson</span>
                <br /> Manager
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>

  )
}
