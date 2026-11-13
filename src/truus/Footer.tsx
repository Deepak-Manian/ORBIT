import { SVG } from "./svgs";
import { LogoSvg } from "./LogoSvg";
import type { MouseEvent } from "react";

export function Footer({ onEnter }: { onEnter: () => void }) {
  const enter = (e: MouseEvent) => {
    e.preventDefault();
    onEnter();
  };
  return (
      <section data-inertia-init="" data-theme-section="Light" data-bg-section="Light" className="footer">
        <div className="footer__tile">
          <div className="footer__row-info">
            <div className="container is--footer">
              <div className="footer__row-contact">
                <div className="footer__col">
                  <div className="footer__tag">
                    <div className="tag is--footer">
                      <h4 className="tag__h4 is--footer">
                        Ready to start?
                      </h4>
                    </div>
                  </div>
                  <div className="footer__jobs-collection w-dyn-list">
                    <div className="footer__no-jobs w-dyn-empty">
                      <div className="footer__no-jobs-bg"></div>
                      <p className="footer__no-jobs-p">
                        Eight agents are warmed up and waiting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="footer__col">
                  <div className="footer__tag">
                    <div className="tag is--footer">
                      <h4 className="tag__h4 is--footer">
                        Workspace
                      </h4>
                    </div>
                  </div>
                  <div className="footer__text">
                    <div className="footer__text-line">
                      <p className="h3 is--footer-h3">
                        open any time
                      </p>
                    </div>
                    <div className="footer__text-line">
                      <p className="h3 is--footer-h3">
                        from anywhere
                      </p>
                    </div>
                  </div>
                  <div className="footer__btn">
                    <a data-custom-cursor="click" data-wiggle="1" href="#workspace" onClick={enter} className="draw-btn w-inline-block">
                      <span data-wiggle-target="" className="draw-btn__span">
                        Enter workspace
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s63c04f }} />
                    </a>
                  </div>
                </div>
                <div className="footer__col">
                  <div className="footer__tag">
                    <div className="tag is--footer">
                      <h4 className="tag__h4 is--footer">
                        Contact
                      </h4>
                    </div>
                  </div>
                  <div className="footer__text">
                    <a data-wiggle="0.5" href="mailto:hello@orbit.app" className="footer__text-line w-inline-block">
                      <p data-custom-cursor="click" data-wiggle-target="" className="h3 is--footer-h3">
                        hello@orbit.app
                      </p>
                    </a>
                    <div data-modal-whatsapp-action="toggle" data-hover="" data-wiggle="0.5" className="footer__text-line">
                      <p data-custom-cursor="click" data-wiggle-target="" className="h3 is--footer-h3">
                        open it on your phone*
                      </p>
                      <a href="#workspace" onClick={enter} className="whatsapp-cover-link w-inline-block"></a>
                    </div>
                  </div>
                  <div className="footer__whatsapp-not">
                    <p className="p-s">
                      *scan the QR code and take ORBIT with you.
                    </p>
                  </div>
                  <div className="footer__socials">
                    <div className="socials">
                      <a data-custom-cursor="click" data-wiggle="4" href="https://www.linkedin.com/" target="_blank" className="single-social w-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" data-wiggle-target="" dangerouslySetInnerHTML={{ __html: SVG.s01e88c }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__row-logo">
            <div data-scroll-animation="stickers" className="footer-logo">
              <div className="footer-logo__before"></div>
              <LogoSvg className="footer-logo__svg"/>
<div className="footer-sticker">
                <div data-inertia-element="" className="footer-sticker__inner">
                  <div data-inertia-child="" className="footer-sticker__inner-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 140" fill="none" data-scroll-animation-target="" dangerouslySetInnerHTML={{ __html: SVG.se4876c }} />
                  </div>
                </div>
              </div>
              <div className="footer-sticker is--smiley">
                <div data-inertia-element="" className="footer-sticker__inner">
                  <div data-inertia-child="" className="footer-sticker__inner-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none" data-scroll-animation-target="" dangerouslySetInnerHTML={{ __html: SVG.se1376c }} />
                  </div>
                </div>
              </div>
              <div className="footer-sticker is--heart">
                <div data-inertia-element="" className="footer-sticker__inner">
                  <div data-inertia-child="" className="footer-sticker__inner-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 129" fill="none" data-scroll-animation-target="" dangerouslySetInnerHTML={{ __html: SVG.sd47435 }} />
                  </div>
                </div>
              </div>
              <div className="footer-sticker is--handslove">
                <div data-inertia-element="" className="footer-sticker__inner">
                  <div data-inertia-child="" className="footer-sticker__inner-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 116" fill="none" data-scroll-animation-target="" dangerouslySetInnerHTML={{ __html: SVG.sf9f967 }} />
                  </div>
                </div>
              </div>
              <div className="footer-sticker is--100">
                <div data-inertia-element="" className="footer-sticker__inner">
                  <div data-inertia-child="" className="footer-sticker__inner-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 138" fill="none" data-scroll-animation-target="" dangerouslySetInnerHTML={{ __html: SVG.s24db18 }} />
                  </div>
                </div>
              </div>
              <div className="footer-sticker is--camera">
                <div data-inertia-element="" className="footer-sticker__inner">
                  <div data-inertia-child="" className="footer-sticker__inner-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 144" fill="none" data-scroll-animation-target="" dangerouslySetInnerHTML={{ __html: SVG.sece1c4 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="credits">
            <div className="credits__group">
              <div className="credits__tile">
                <a data-wiggle="2" href="https://truus.co/" target="_blank" className="credits__tile-col w-inline-block">
                  <h4 className="credits__h4">
                    design inspired by
                  </h4>
                  <p data-wiggle-target="" className="credits__p">
                    Truus
                  </p>
                </a>
                <a data-wiggle="2" href="https://github.com/Deepak-Manian/ORBIT" target="_blank" className="credits__tile-col w-inline-block">
                  <h4 className="credits__h4">
                    built by
                  </h4>
                  <p data-wiggle-target="" className="credits__p">
                    Deepak
                  </p>
                </a>
              </div>
            </div>
            <div data-hover="" className="tag is--credits">
              <h4 className="tag__h4">
                credits
              </h4>
            </div>
          </div>
        </div>
      </section>
  );
}
