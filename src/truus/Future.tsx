import { SVG } from "./svgs";

export function Future() {
  return (
      <section data-inertia-init="" data-theme-section="light" data-bg-section="light" className="future">
        <div className="container">
          <div className="future__row-title">
            <div className="future__col-title">
              <h2 className="h1">
                A career OS for the future.{" "}
                <em>
                  from CV to offer.
                </em>
              </h2>
              <div data-scroll-animation="draw-sticker" className="future__line">
                <div className="future__title-line">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634 28" fill="none" data-scroll-animation-target="draw" dangerouslySetInnerHTML={{ __html: SVG.s33b849 }} />
                </div>
                <div className="future__love-sticker">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 111" fill="none" data-scroll-animation-target="sticker" dangerouslySetInnerHTML={{ __html: SVG.s473cb0 }} />
                </div>
              </div>
            </div>
          </div>
          <div className="future__row-cards">
            <div className="future__bg-shape">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 527 526" fill="none" dangerouslySetInnerHTML={{ __html: SVG.sc215ca }} />
            </div>
            <div data-inertia-element="" className="future__cards-item">
              <div data-inertia-child="" className="future-image">
                <div className="future-image__before"></div>
                <div className="orbit-tile" data-tone="green">
                  <img className="orbit-tile__sticker" src="/stickers/camera.svg" alt="" />
                  <span className="orbit-tile__name">
                    scout
                  </span>
                </div>
              </div>
            </div>
            <div data-inertia-element="" className="future__flying-tag">
              <div data-inertia-child="" className="flying-tag__wrap">
                <div data-theme="Pink" className="tag">
                  <h4 className="tag__h4">
                    your data stays yours
                  </h4>
                </div>
              </div>
            </div>
            <div data-inertia-element="" className="future__cards-item is--2">
              <div data-inertia-child="" className="future-image">
                <div className="future-image__before"></div>
                <div className="orbit-tile" data-tone="blue">
                  <img className="orbit-tile__sticker" src="/stickers/cute.svg" alt="" />
                  <span className="orbit-tile__name">
                    lens
                  </span>
                </div>
              </div>
            </div>
            <div data-inertia-element="" className="future__flying-tag is--2">
              <div data-inertia-child="" className="flying-tag__wrap">
                <div data-theme="Pink" className="tag">
                  <h4 className="tag__h4">
                    no auto-send, ever
                  </h4>
                </div>
              </div>
            </div>
            <div data-inertia-element="" className="future__cards-item is--3">
              <div data-inertia-child="" className="future-image">
                <div className="future-image__before"></div>
                <div className="orbit-tile" data-tone="maroonred">
                  <img className="orbit-tile__sticker" src="/stickers/fistbump.svg" alt="" />
                  <span className="orbit-tile__name">
                    coach
                  </span>
                </div>
              </div>
            </div>
            <div data-inertia-element="" className="future__cards-item is--4">
              <div data-inertia-child="" className="future-image">
                <div className="future-image__before"></div>
                <div className="orbit-tile" data-tone="orange">
                  <img className="orbit-tile__sticker" src="/stickers/lets-go.svg" alt="" />
                  <span className="orbit-tile__name">
                    draft
                  </span>
                </div>
              </div>
            </div>
            <div data-inertia-element="" className="future__flying-tag is--3">
              <div data-inertia-child="" className="flying-tag__wrap">
                <div data-theme="Pink" className="tag">
                  <h4 className="tag__h4">
                    evidence first
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="future__row-text">
            <p className="future__text-p">
              To reach the right role you need to know where it is. ORBIT is a true 360° career partner, working the whole spectrum from discovery and skill proof to tailored outreach, interview prep and offer negotiation.
            </p>
          </div>
        </div>
      </section>
  );
}
