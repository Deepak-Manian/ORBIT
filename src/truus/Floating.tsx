import { SVG } from "./svgs";
import { LogoSvg } from "./LogoSvg";

export function Floating() {
  return (
      <div className="floating-elements">
        <div data-transition-theme="none" className="transition-container">
          <div className="transition-screen"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3222 3114" fill="none" preserveAspectRatio="none" className="transition-scribble" dangerouslySetInnerHTML={{ __html: SVG.s96041e }} />
          <div className="transition-logo">
            <LogoSvg className="transition-logo__svg"/>
</div>
        </div>
        <div data-cursor-type="false" data-cursor-init="true" className="custom-cursor">
          <div className="cursor-mute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 170" fill="none" className="cursor-mute__bg-svg" dangerouslySetInnerHTML={{ __html: SVG.s8fa727 }} />
            <div className="mute is--custom-cursor">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" fill="none" className="mute__mute-svg" dangerouslySetInnerHTML={{ __html: SVG.sd15f8f }} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" fill="none" className="mute__unmute-svg" dangerouslySetInnerHTML={{ __html: SVG.sc57fb9 }} />
            </div>
          </div>
          <div className="cursor-drag">
            <div data-theme="Pink" className="tag">
              <h4 className="tag__h4">
                Drag
              </h4>
            </div>
          </div>
          <div className="cursor-click">
            <div data-theme="Pink" className="tag">
              <h4 className="tag__h4">
                Click
              </h4>
            </div>
          </div>
          <div className="cursor-home">
            <div data-theme="Pink" className="tag">
              <h4 className="tag__h4">
                to Home
              </h4>
            </div>
          </div>
        </div>
      </div>
  );
}
