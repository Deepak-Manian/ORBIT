import { SVG } from "./svgs";
import type { MouseEvent } from "react";

export function Flick({ onEnter }: { onEnter: () => void }) {
  const enter = (e: MouseEvent) => {
    e.preventDefault();
    onEnter();
  };
  return (
      <section data-bg-section="dark" data-theme-section="dark" className="flick" id="agents">
        <div className="container">
          <div className="flick__row-slider">
            <div data-flick-drag-status="grab" data-flick-cards-init="" className="flick-group">
              <div data-custom-cursor="drag" className="flick-group__top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 109" fill="none" data-scroll-animation="draw" className="flick-group__blob-scribble-svg" dangerouslySetInnerHTML={{ __html: SVG.sb15c1d }} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449 458" fill="none" className="flick-group__blob-back-svg" dangerouslySetInnerHTML={{ __html: SVG.s9b1a87 }} />
                <div className="relative-object">
                  <div className="relative-object__before"></div>
                </div>
                <div data-flick-cards-collection="" className="flick-group__collection w-dyn-list">
                  <div data-flick-cards-list="" role="list" className="flick-group__list w-dyn-items">
                    <div data-flick-cards-item-status="active" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Orange" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="lightgreen">
                            <img className="orbit-tile__sticker" src="/stickers/smiley.svg" alt="" />
                            <span className="orbit-tile__name">
                              orbit
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Orbit
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="360" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            Orchestrator
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="140" className="sticker">
                          <img alt="ORBIT" src="/stickers/smiley.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                    <div data-flick-cards-item-status="2-after" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Orange" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="green">
                            <img className="orbit-tile__sticker" src="/stickers/camera.svg" alt="" />
                            <span className="orbit-tile__name">
                              scout
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Scout
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="Social" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            Job Discovery
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="160" className="sticker">
                          <img alt="SCOUT" src="/stickers/camera.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                    <div data-flick-cards-item-status="2-after" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Pink" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="blue">
                            <img className="orbit-tile__sticker" src="/stickers/cute.svg" alt="" />
                            <span className="orbit-tile__name">
                              lens
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Lens
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="Social" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            Skill Proof
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="160" className="sticker">
                          <img alt="LENS" src="/stickers/cute.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                    <div data-flick-cards-item-status="2-after" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Pink" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="maroonred">
                            <img className="orbit-tile__sticker" src="/stickers/fistbump.svg" alt="" />
                            <span className="orbit-tile__name">
                              coach
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Coach
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="Social" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            CTC Poker
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="160" className="sticker">
                          <img alt="COACH" src="/stickers/fistbump.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                    <div data-flick-cards-item-status="2-after" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Pink" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="orange">
                            <img className="orbit-tile__sticker" src="/stickers/lets-go.svg" alt="" />
                            <span className="orbit-tile__name">
                              draft
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Draft
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="Social" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            Anti-Slop
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="160" className="sticker">
                          <img alt="DRAFT" src="/stickers/lets-go.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                    <div data-flick-cards-item-status="2-after" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Pink" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="pink">
                            <img className="orbit-tile__sticker" src="/stickers/100.svg" alt="" />
                            <span className="orbit-tile__name">
                              track
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Track
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="Social" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            Autopilot
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="160" className="sticker">
                          <img alt="TRACK" src="/stickers/100.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                    <div data-flick-cards-item-status="2-after" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Pink" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="pastelpink">
                            <img className="orbit-tile__sticker" src="/stickers/bam.svg" alt="" />
                            <span className="orbit-tile__name">
                              signal
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Signal
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="Social" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            Comp Intel
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="160" className="sticker">
                          <img alt="SIGNAL" src="/stickers/bam.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                    <div data-flick-cards-item-status="2-after" data-flick-cards-item="" role="listitem" className="flick-group__item w-dyn-item">
                      <div data-theme-tag="Orange" className="flick-card">
                        <div className="flick-card__before"></div>
                        <div className="flick-card__media">
                          <div className="orbit-tile" data-tone="darkgrey">
                            <img className="orbit-tile__sticker" src="/stickers/hands-love.svg" alt="" />
                            <span className="orbit-tile__name">
                              sentinel
                            </span>
                          </div>
                        </div>
                        <div className="flick-card__border"></div>
                        <div className="flick-card__tag is--big">
                          <div data-theme="Pink" className="tag">
                            <h4 className="tag__h4">
                              Sentinel
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="flick-group__type">
                        <div data-icon="Social" className="type">
                          <div className="type__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Social" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s912d85 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="360" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.sa82d87 }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Activation" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s8b740b }} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" data-icon-name="Design" className="type__icon-svg" dangerouslySetInnerHTML={{ __html: SVG.s7440ef }} />
                          </div>
                          <span className="type__span">
                            Scam Shield
                          </span>
                        </div>
                      </div>
                      <div className="flick-group__sticker">
                        <div data-width="160" className="sticker">
                          <img alt="SENTINEL" src="/stickers/hands-love.svg" className="sticker__svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-flick-cards-dragger="" className="flick-group__dragger"></div>
              </div>
              <div className="flick-group__bottom">
                <div className="flick-group__info-collection w-dyn-list">
                  <div data-flick-cards-list-mirror="" role="list" className="flick-group__info-list w-dyn-items">
                    <div data-flick-cards-item-status-mirror="active" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            one brain, eight partners
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Orbit
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-flick-cards-item-status-mirror="2-after" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            finds roles worth your time
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Scout
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-flick-cards-item-status-mirror="2-after" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            turns projects into proof
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Lens
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-flick-cards-item-status-mirror="2-after" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            knows your number first
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Coach
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-flick-cards-item-status-mirror="2-after" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            outreach that sounds like you
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Draft
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-flick-cards-item-status-mirror="2-after" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            follow-ups on autopilot
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Track
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-flick-cards-item-status-mirror="2-after" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            reads the market for you
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Signal
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-flick-cards-item-status-mirror="2-after" data-flick-cards-item-mirror="" role="listitem" className="flick-group__info-item w-dyn-item">
                      <a data-wiggle="1" data-custom-cursor="click" href="#workspace" onClick={enter} className="flick-info-item w-inline-block">
                        <div className="flick-info-item__top">
                          <h3 className="flick-info-item__h3">
                            spots scams before you click
                          </h3>
                        </div>
                        <div className="flick-info-item__bottom">
                          <div className="draw-btn">
                            <span data-wiggle-target="" className="draw-btn__span">
                              Meet Sentinel
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 10" fill="none" className="draw-btn__svg" dangerouslySetInnerHTML={{ __html: SVG.s2805f0 }} />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
