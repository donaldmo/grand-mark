import React from 'react'

export default function PageModels() {
  return (
    <section className="ds ms page_models models_portrait gorizontal_padding section_padding_70">
      <div className="container-fluid">
        <div className="row boxed-padding bottommargin_40">

          <div className="col-lg-7">
            <div className="filters isotope_filters inline-block margin_0">
              <a href="#" data-filter="*" className="selected">All</a>
              <a href="#" data-filter=".fashion">Fashion</a>
              <a href="#" data-filter=".studio">Studio</a>
              <a href="#" data-filter=".session">Session</a>
            </div>
          </div>

          <div className="col-lg-5 text-lg-right">
            <form className="form-inline models-orderby">
              <div className="form-group select-group">
                <label className="sr-only" for="orderby">Sort By:</label>
                <select className="form-control orderby" name="orderby" id="orderby">
                  <option value="default" selected="">Default sorting</option>
                  <option value="name">Sort by name</option>
                  <option value="date">Sort by date</option>
                  <option value="random">Random sorting</option>
                </select>
                <i className="rt-icon2-chevron-thin-down form-button"></i>
              </div>

              <div className="form-group select-group">
                <label className="sr-only" for="orderby1">Sort By:</label>
                <select className="form-control orderby" name="orderby1" id="orderby1">
                  <option value="descending" selected="">Descending</option>
                  <option value="ascending">Ascending</option>
                </select>
                <i className="rt-icon2-chevron-thin-down form-button"></i>
              </div>
            </form>
          </div>
        </div>

        <div className="isotope_container isotope row masonry-layout" data-filters=".isotope_filters">

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/13.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/13.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Samantha Hawk</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/14.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/14.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Lana Anderson</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/15.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/15.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Pamela Stonem</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/16.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/16.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Naomy Olsen</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/17.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/17.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Gillian Rowe</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/18.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/18.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Sonya Smith</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/19.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/19.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Rachel Smalders</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/20.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/20.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Joanne Irwin</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/21.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/21.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Sarah Quinn</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/22.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/22.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Barbara Serney</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/23.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/23.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Pamela Torney</a>
              </h4>
            </div>
          </div>

          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img src="images/models_portrait/24.jpg" alt="" />
                <div className="media-links">
                  <div className="links-wrap">
                    <a className="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" href="images/models_portrait/24.jpg"></a>
                    <a className="p-link" title="" href="model.html"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-title text-center">
              <h4>
                <a href="model.html">Jessica Lee</a>
              </h4>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-sm-12 text-center margin_0">
            <ul className="pagination ">
              <li>
                <a href="#">
                  <span className="sr-only">Prev</span>
                  <i className="rt-icon2-chevron-thin-left"></i>
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">
                  <span className="sr-only">Next</span>
                  <i className="rt-icon2-chevron-thin-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
