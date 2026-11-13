import { SVG } from "./svgs";
import { LogoSvg } from "./LogoSvg";
import type { MouseEvent } from "react";

export function SiteHeader({ onEnter }: { onEnter: () => void }) {
  const enter = (e: MouseEvent) => {
    e.preventDefault();
    onEnter();
  };
  return (
      <header data-modal-work-status="not-active" data-modal-whatsapp-status="not-active" className="header">
        <div data-modal-whatsapp-action="close" data-modal-work-action="close" className="dark-bg"></div>
        <div className="nav-bar">
          <div data-modal-work-action="hover" className="nav-bar__work">
            <div className="modal-work">
              <div className="modal-work__collection w-dyn-list">
                <div role="list" className="modal-work__list w-dyn-items">
                  <div role="listitem" className="modal-work__item w-dyn-item">
                    <a data-wiggle="3" href="#agents" className="modal-work-card w-inline-block" data-anchor-target="#agents">
                      <div className="modal-work-card__image">
                        <div className="orbit-tile" data-tone="green">
                          <img className="orbit-tile__sticker" src="/stickers/camera.svg" alt="" />
                          <span className="orbit-tile__name">
                            scout
                          </span>
                        </div>
                      </div>
                      <div className="modal-work-card__content">
                        <div data-wiggle-target="" className="tag__wrap">
                          <div data-theme="Orange" className="tag">
                            <h4 className="tag__h4">
                              Scout
                            </h4>
                          </div>
                        </div>
                        <h3 className="modal-work-card__h3">
                          finds roles worth your time
                        </h3>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="modal-work__item w-dyn-item">
                    <a data-wiggle="3" href="#agents" className="modal-work-card w-inline-block" data-anchor-target="#agents">
                      <div className="modal-work-card__image">
                        <div className="orbit-tile" data-tone="blue">
                          <img className="orbit-tile__sticker" src="/stickers/cute.svg" alt="" />
                          <span className="orbit-tile__name">
                            lens
                          </span>
                        </div>
                      </div>
                      <div className="modal-work-card__content">
                        <div data-wiggle-target="" className="tag__wrap">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Lens
                            </h4>
                          </div>
                        </div>
                        <h3 className="modal-work-card__h3">
                          turns projects into proof
                        </h3>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="modal-work__item w-dyn-item">
                    <a data-wiggle="3" href="#agents" className="modal-work-card w-inline-block" data-anchor-target="#agents">
                      <div className="modal-work-card__image">
                        <div className="orbit-tile" data-tone="orange">
                          <img className="orbit-tile__sticker" src="/stickers/lets-go.svg" alt="" />
                          <span className="orbit-tile__name">
                            draft
                          </span>
                        </div>
                      </div>
                      <div className="modal-work-card__content">
                        <div data-wiggle-target="" className="tag__wrap">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Draft
                            </h4>
                          </div>
                        </div>
                        <h3 className="modal-work-card__h3">
                          outreach that sounds like you
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bold-btn__wrap">
                <a data-custom-cursor="click" data-wiggle="1" href="#agents" className="bold-btn w-inline-block" data-anchor-target="#agents">
                  <span data-wiggle-target="" className="bold-btn__span">
                    Meet all 8 agents
                  </span>
                </a>
              </div>
            </div>
            <div data-hover="" data-modal-work-action="toggle" className="nav-bar__work-btn">
              <div className="nav-bar__work-blob">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 48" fill="none" className="nav-bar__work-blob-svg" dangerouslySetInnerHTML={{ __html: SVG.s75f415 }} />
              </div>
              <span className="h3 is--nav">
                agents
              </span>
              <span data-wiggle-target="" className="h3 is--nav is--duplicate">
                close
              </span>
            </div>
          </div>
          <a data-custom-cursor="home" data-wiggle="" href="#top" aria-current="page" className="nav-bar__logo w-inline-block w--current" data-anchor-target="top">
            <LogoSvg className="nav-bar__logo-svg"/>
</a>
          <div data-qr-code="https://orbit-job.pages.dev/" data-modal-whatsapp-action="hover" className="nav-bar__whatsapp">
            <div className="modal-whatsapp">
              <div className="qr-code">
                <div data-qr-code-canvas="" className="qr-code__canvas"></div>
              </div>
              <div className="modal-whatsapp__text">
                <h4 className="modal-whatsapp__h4">
                  Open ORBIT
                </h4>
                <p className="modal-whatsapp__p">
                  Scan the QR code to take ORBIT with you on your smartphone.
                </p>
              </div>
              <div className="modal-whatsapp__btn">
                <a data-custom-cursor="click" data-wiggle="1" href="#workspace" onClick={enter} className="draw-btn w-inline-block">
                  <span data-wiggle-target="" className="draw-btn__span">
                    Enter workspace
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s63c04f }} />
                </a>
              </div>
            </div>
            <div data-modal-whatsapp-action="toggle" data-hover="" className="nav-bar__whatsapp-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="nav-bar__whatsapp-svg" dangerouslySetInnerHTML={{ __html: SVG.sbc9ba5 }} />
              <a href="#workspace" onClick={enter} className="whatsapp-cover-link w-inline-block"></a>
            </div>
          </div>
        </div>
      </header>
  );
}
