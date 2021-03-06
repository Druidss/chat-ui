import { css } from "styled-components"

export const circle = (color,size = "8px") => css`
  width: ${size};
  height: ${size};
  border-radius:50%;
  background-color: ${color};  
`;

export const card = (radius ="6px", padding = "20px 30px") => css`
  padding: ${padding};
  background: ${({ theme }) => theme.background };
  box-shadow: 0px 18px 40px 0px rgba(0,0,0,0.4);
  border-radius: ${radius};
`

export const activeBar = ({barWidth="8px", shadowWidth="20px"} = {}) =>
css`
    position: relative;
    &::before,
    &::after {
      display: block;
      content:"";
      position:absolute;
      height: 100%;
      left:0;
      transition:0.4s cubic-bezier(0.16,1,0.3,1);
      /* 先使用相对定位,再使用绝对定位 将两个伪元素移到容器的最左边 */
    }

    /* 设置代表显示条的before伪元素 */
    &::before{
      width: ${barWidth};
      background: linear-gradient(
        180deg,
        rgba(142,197,242,1) 0%,
        rgba(79,157,222,1) 100%
      );  
      /* 设置背景为渐变色 */
    }
    &::after{
      width: ${shadowWidth};
      background: linear-gradient(
        270deg,
        rgba(41,47,76,1) 0%,
        rgba(142,197,242,1) 100%
      );
      opacity:0.6;
    }
  `;





