import shijiLogoUrl from "@/assets/shiji-logo.png";
import { cn } from "@/components/lib/utils.js";

// Shiji 品牌图为白色透明底位图（横版约 2:1）。原 Z 图标/字标是 currentColor 矢量，
// 使用方均位于固定深色底壳（登录壳、引导壳、highspeed 分享卡），位图直接以白色呈现，
// 不再依赖文本颜色。
export function ZCodeAboutLogo({ className }: { className?: string }) {
  return (
    <img
      src={shijiLogoUrl}
      className={cn("shrink-0", className)}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}

export function ZCodeWordmarkLogo({ className }: { className?: string }) {
  return (
    <img
      src={shijiLogoUrl}
      className={cn("shrink-0", className)}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}
