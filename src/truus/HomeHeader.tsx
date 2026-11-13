import { SVG } from "./svgs";
import { OrbitBackdrop } from "./OrbitBackdrop";

export function HomeHeader() {
  return (
      <section data-vimeo-parent="" data-theme-section="dark" data-bg-section="video" className="home-header">
        <div data-clippath-transition="" className="home-header__video">
          <OrbitBackdrop />
          <div className="home-header__video-fade"></div>
        </div>
        <div className="container is--l">
          <div className="home-header__content">
            <div className="home-header__content-overflow">
              <div className="home-header__title">
                <h1 data-transition-words="" className="h1 is--home-header">
                  <span data-single-word="">
                    We
                  </span>
                  <span data-single-word="" className="is--relative">
                    <span>
                      make
                    </span>
                    <div className="home-header__smiley">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" fill="none" data-single-target="" className="home-header__smiley-svg" dangerouslySetInnerHTML={{ __html: SVG.s7c3330 }} />
                    </div>
                  </span>
                  <span data-single-word="">
                    <em>
                      opportunity
                    </em>
                  </span>
                  <span data-single-word="">
                    for
                  </span>
                  <span data-single-word="">
                    the
                  </span>
                  <span data-single-word="">
                    new
                  </span>
                  <span data-single-word="" className="is--relative">
                    <div className="home-header__star">
                      <div className="home-header__star-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 113" fill="none" data-single-target="" className="home-header__star-svg" dangerouslySetInnerHTML={{ __html: SVG.s07d73e }} />
                        {" "}
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608 100" fill="none" className="home-header__title-line-svg" dangerouslySetInnerHTML={{ __html: SVG.s15136d }} />
                    <span>
                      mainstream
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
