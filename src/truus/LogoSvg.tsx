import { OrbitScriptLogo } from "../components/common/OrbitScriptLogo";

/** ORBIT wordmark, sized by the reference's own logo classes (9em × 2.5em box). */
export function LogoSvg({ className = "" }: { className?: string }) {
  return <OrbitScriptLogo className={className} width="100%" height="100%" viewBox="20 -2 790 200" />;
}
